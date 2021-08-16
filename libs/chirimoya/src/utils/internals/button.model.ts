type AlignContent = 'left' | 'center' | 'right';

interface BaseButton {
  /** indicates the disabled status */
  isDisabled: boolean;

  /** alignment of the children elements */
  alignContent: AlignContent;
}

export { AlignContent };
export type { BaseButton };
