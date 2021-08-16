import { Component, Event, EventEmitter, h, Prop, Watch } from '@stencil/core';
import { ChirimoyaTheme as Theme, defaultTheme } from '../../utils/themes';
import { logger } from '../../utils/logger';

const darkThemeMediaQuery = '(prefers-color-scheme: dark)';

const getThemeName = (isDarkMode: boolean): Theme => (isDarkMode ? 'dark' : 'light');

/**
 *
 */
@Component({
  tag: 'chirimoya-theme',
  shadow: false,
})
export class ChirimoyaTheme {
  private media: MediaQueryList;

  /** indicates the theme of the library */
  @Prop({ mutable: true }) theme: Theme;

  /** fires whenever the theme changes */
  @Event({ bubbles: true, eventName: 'themeChange' }) themeChange: EventEmitter<Theme>;

  @Watch('theme')
  onThemeChange(newTheme: Theme, oldTheme: Theme) {
    logger.log(`Changing theme from "${oldTheme}" to "${newTheme}"`);
    this.themeChange.emit(newTheme);
  }

  constructor() {
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
  }

  handleChangeTheme(event: MediaQueryListEvent) {
    logger.log(`Listener :: Should change the theme to ${getThemeName(event.matches)}`);
    this.theme = getThemeName(event.matches);
  }

  connectedCallback() {
    try {
      this.media = window.matchMedia(darkThemeMediaQuery);
      // If no theme is provided, look up for whatever is in the user system preferences.
      // Otherwise use what's provided by the theme prop
      this.theme ??= getThemeName(this.media.matches);

      // Listen for changes in user preferences
      this.media.addEventListener('change', this.handleChangeTheme);
    } catch (e) {
      logger.warn(`Couldn't listen for change of themes. Setting default theme ${defaultTheme}`);
      this.theme = defaultTheme;
    }
  }

  disconnectedCallback() {
    if (this.media) {
      this.media.removeEventListener('change', this.handleChangeTheme);
    }
  }

  render() {
    return <slot />;
  }
}
