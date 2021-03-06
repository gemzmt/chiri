/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AlignContent } from "./utils/internals/button.model";
import { Theme } from "./utils/themes";
export namespace Components {
    interface ChirimoyaAlert {
        /**
          * set if the alert is open
         */
        "isVisible": boolean;
    }
    interface ChirimoyaAlertAction {
        /**
          * alignment of the children elements
         */
        "alignContent": AlignContent;
        /**
          * indicates the disabled status, not intended to be changed
         */
        "isDisabled": boolean;
        /**
          * role for the alert action
         */
        "role": AlertActionRole;
    }
    interface ChirimoyaButton {
        /**
          * alignment of the children elements
         */
        "alignContent": AlignContent;
        /**
          * indicates the disabled status
         */
        "isDisabled": boolean;
        /**
          * indicates full width for components like Alert Action
         */
        "isFullWidth": boolean;
    }
    interface ChirimoyaCell {
        /**
          * boolean that indicates Status selected
         */
        "selected"?: boolean;
    }
    interface ChirimoyaFileField {
        /**
          * File type allowed
         */
        "acceptTypes": string;
        /**
          * Disable the component
         */
        "disabled": boolean;
        /**
          * Show error style to input
         */
        "hasError": boolean;
        /**
          * Label for the input, also has an animation
         */
        "label": string;
        /**
          * Name of input
         */
        "name": string;
        /**
          * Placeholder for the input
         */
        "placeholder": string;
        /**
          * Clean file value
         */
        "resetFile": () => Promise<void>;
    }
    interface ChirimoyaFormCell {
        /**
          * text of the error message of the field.
         */
        "errorText": string;
        /**
          * boolean that indicates if the form-cell should display the error alert
         */
        "hasError": boolean;
    }
    interface ChirimoyaListSection {
        "variant": ListSectionVariant;
    }
    interface ChirimoyaNavigationItem {
        /**
          * alignment of the children elements
         */
        "alignContent": AlignContent;
        /**
          * href property for anchor tags
         */
        "href"?: string;
        /**
          * indicates the disabled status
         */
        "isDisabled": boolean;
        /**
          * indicates weather the item is selected or not
         */
        "isSelected": boolean;
        /**
          * role of the navigation item
         */
        "navRole": NavigationItemRole;
        /**
          * variant of navigation item
         */
        "variant": NavigationItemVariant;
    }
    interface ChirimoyaRootMenu {
        /**
          * set if the menu is open
         */
        "isOpen": boolean;
    }
    interface ChirimoyaSelectField {
        /**
          * defaultValue to use in form-controls
         */
        "defaultValue": string;
        /**
          * if `true`, the select will be unaccessible
         */
        "disabled": boolean;
        "fullWidth": boolean;
        /**
          * if true, a red line will appear below the select (indicating an error)
         */
        "hasError": boolean;
        /**
          * text to show in the top label
         */
        "label"?: string;
        /**
          * name to use in form-controls
         */
        "name": string;
        /**
          * text to show inside the selector in case there is no value selected
         */
        "placeholder"?: string;
        /**
          * the value of the select
         */
        "value": string;
    }
    interface ChirimoyaTabBar {
    }
    interface ChirimoyaTabBarItem {
        /**
          * alignment of the children elements
         */
        "alignContent": AlignContent;
        /**
          * href for anchor tag
         */
        "href": string;
        /**
          * indicates if the label is active or inactive
         */
        "isActive": boolean;
        /**
          * indicates the disabled status
         */
        "isDisabled": boolean;
        /**
          * target for anchor tag
         */
        "target": string;
    }
    interface ChirimoyaTextField {
        /**
          * default value to use in form controls
         */
        "defaultValue": string;
        /**
          * disable the component
         */
        "disabled": boolean;
        /**
          * if true, a red line will appear below the input (indicating an error)
         */
        "hasError": boolean;
        /**
          * text for the label of the input
         */
        "label": string;
        /**
          * color of the label
         */
        "labelColor": textColor;
        /**
          * name to use in form controls
         */
        "name": string;
        /**
          * placeholder for the input
         */
        "placeholder": string;
        /**
          * if true, disables the animation of the label and set it fixed into the top of the input
         */
        "staticLabel": boolean;
        /**
          * color of the input text
         */
        "textColor": textColor;
        /**
          * the value of the input
         */
        "value": string;
    }
    interface ChirimoyaTheme {
        /**
          * indicates the theme of the library
         */
        "theme": Theme;
    }
    interface ChirimoyaToolbar {
    }
    interface ChirimoyaUserInfo {
    }
}
declare global {
    interface HTMLChirimoyaAlertElement extends Components.ChirimoyaAlert, HTMLStencilElement {
    }
    var HTMLChirimoyaAlertElement: {
        prototype: HTMLChirimoyaAlertElement;
        new (): HTMLChirimoyaAlertElement;
    };
    interface HTMLChirimoyaAlertActionElement extends Components.ChirimoyaAlertAction, HTMLStencilElement {
    }
    var HTMLChirimoyaAlertActionElement: {
        prototype: HTMLChirimoyaAlertActionElement;
        new (): HTMLChirimoyaAlertActionElement;
    };
    interface HTMLChirimoyaButtonElement extends Components.ChirimoyaButton, HTMLStencilElement {
    }
    var HTMLChirimoyaButtonElement: {
        prototype: HTMLChirimoyaButtonElement;
        new (): HTMLChirimoyaButtonElement;
    };
    interface HTMLChirimoyaCellElement extends Components.ChirimoyaCell, HTMLStencilElement {
    }
    var HTMLChirimoyaCellElement: {
        prototype: HTMLChirimoyaCellElement;
        new (): HTMLChirimoyaCellElement;
    };
    interface HTMLChirimoyaFileFieldElement extends Components.ChirimoyaFileField, HTMLStencilElement {
    }
    var HTMLChirimoyaFileFieldElement: {
        prototype: HTMLChirimoyaFileFieldElement;
        new (): HTMLChirimoyaFileFieldElement;
    };
    interface HTMLChirimoyaFormCellElement extends Components.ChirimoyaFormCell, HTMLStencilElement {
    }
    var HTMLChirimoyaFormCellElement: {
        prototype: HTMLChirimoyaFormCellElement;
        new (): HTMLChirimoyaFormCellElement;
    };
    interface HTMLChirimoyaListSectionElement extends Components.ChirimoyaListSection, HTMLStencilElement {
    }
    var HTMLChirimoyaListSectionElement: {
        prototype: HTMLChirimoyaListSectionElement;
        new (): HTMLChirimoyaListSectionElement;
    };
    interface HTMLChirimoyaNavigationItemElement extends Components.ChirimoyaNavigationItem, HTMLStencilElement {
    }
    var HTMLChirimoyaNavigationItemElement: {
        prototype: HTMLChirimoyaNavigationItemElement;
        new (): HTMLChirimoyaNavigationItemElement;
    };
    interface HTMLChirimoyaRootMenuElement extends Components.ChirimoyaRootMenu, HTMLStencilElement {
    }
    var HTMLChirimoyaRootMenuElement: {
        prototype: HTMLChirimoyaRootMenuElement;
        new (): HTMLChirimoyaRootMenuElement;
    };
    interface HTMLChirimoyaSelectFieldElement extends Components.ChirimoyaSelectField, HTMLStencilElement {
    }
    var HTMLChirimoyaSelectFieldElement: {
        prototype: HTMLChirimoyaSelectFieldElement;
        new (): HTMLChirimoyaSelectFieldElement;
    };
    interface HTMLChirimoyaTabBarElement extends Components.ChirimoyaTabBar, HTMLStencilElement {
    }
    var HTMLChirimoyaTabBarElement: {
        prototype: HTMLChirimoyaTabBarElement;
        new (): HTMLChirimoyaTabBarElement;
    };
    interface HTMLChirimoyaTabBarItemElement extends Components.ChirimoyaTabBarItem, HTMLStencilElement {
    }
    var HTMLChirimoyaTabBarItemElement: {
        prototype: HTMLChirimoyaTabBarItemElement;
        new (): HTMLChirimoyaTabBarItemElement;
    };
    interface HTMLChirimoyaTextFieldElement extends Components.ChirimoyaTextField, HTMLStencilElement {
    }
    var HTMLChirimoyaTextFieldElement: {
        prototype: HTMLChirimoyaTextFieldElement;
        new (): HTMLChirimoyaTextFieldElement;
    };
    interface HTMLChirimoyaThemeElement extends Components.ChirimoyaTheme, HTMLStencilElement {
    }
    var HTMLChirimoyaThemeElement: {
        prototype: HTMLChirimoyaThemeElement;
        new (): HTMLChirimoyaThemeElement;
    };
    interface HTMLChirimoyaToolbarElement extends Components.ChirimoyaToolbar, HTMLStencilElement {
    }
    var HTMLChirimoyaToolbarElement: {
        prototype: HTMLChirimoyaToolbarElement;
        new (): HTMLChirimoyaToolbarElement;
    };
    interface HTMLChirimoyaUserInfoElement extends Components.ChirimoyaUserInfo, HTMLStencilElement {
    }
    var HTMLChirimoyaUserInfoElement: {
        prototype: HTMLChirimoyaUserInfoElement;
        new (): HTMLChirimoyaUserInfoElement;
    };
    interface HTMLElementTagNameMap {
        "chirimoya-alert": HTMLChirimoyaAlertElement;
        "chirimoya-alert-action": HTMLChirimoyaAlertActionElement;
        "chirimoya-button": HTMLChirimoyaButtonElement;
        "chirimoya-cell": HTMLChirimoyaCellElement;
        "chirimoya-file-field": HTMLChirimoyaFileFieldElement;
        "chirimoya-form-cell": HTMLChirimoyaFormCellElement;
        "chirimoya-list-section": HTMLChirimoyaListSectionElement;
        "chirimoya-navigation-item": HTMLChirimoyaNavigationItemElement;
        "chirimoya-root-menu": HTMLChirimoyaRootMenuElement;
        "chirimoya-select-field": HTMLChirimoyaSelectFieldElement;
        "chirimoya-tab-bar": HTMLChirimoyaTabBarElement;
        "chirimoya-tab-bar-item": HTMLChirimoyaTabBarItemElement;
        "chirimoya-text-field": HTMLChirimoyaTextFieldElement;
        "chirimoya-theme": HTMLChirimoyaThemeElement;
        "chirimoya-toolbar": HTMLChirimoyaToolbarElement;
        "chirimoya-user-info": HTMLChirimoyaUserInfoElement;
    }
}
declare namespace LocalJSX {
    interface ChirimoyaAlert {
        /**
          * set if the alert is open
         */
        "isVisible"?: boolean;
        /**
          * emit event on hiding alert
         */
        "onHide"?: (event: CustomEvent<any>) => void;
        /**
          * emit event on showing alert
         */
        "onShow"?: (event: CustomEvent<any>) => void;
    }
    interface ChirimoyaAlertAction {
        /**
          * alignment of the children elements
         */
        "alignContent"?: AlignContent;
        /**
          * indicates the disabled status, not intended to be changed
         */
        "isDisabled"?: boolean;
        /**
          * role for the alert action
         */
        "role"?: AlertActionRole;
    }
    interface ChirimoyaButton {
        /**
          * alignment of the children elements
         */
        "alignContent"?: AlignContent;
        /**
          * indicates the disabled status
         */
        "isDisabled"?: boolean;
        /**
          * indicates full width for components like Alert Action
         */
        "isFullWidth"?: boolean;
    }
    interface ChirimoyaCell {
        /**
          * boolean that indicates Status selected
         */
        "selected"?: boolean;
    }
    interface ChirimoyaFileField {
        /**
          * File type allowed
         */
        "acceptTypes"?: string;
        /**
          * Disable the component
         */
        "disabled"?: boolean;
        /**
          * Show error style to input
         */
        "hasError"?: boolean;
        /**
          * Label for the input, also has an animation
         */
        "label"?: string;
        /**
          * Name of input
         */
        "name"?: string;
        /**
          * This Event emits when file is ready loaded
         */
        "onFileLoadReady"?: (event: CustomEvent<Blob>) => void;
        /**
          * Placeholder for the input
         */
        "placeholder"?: string;
    }
    interface ChirimoyaFormCell {
        /**
          * text of the error message of the field.
         */
        "errorText"?: string;
        /**
          * boolean that indicates if the form-cell should display the error alert
         */
        "hasError"?: boolean;
    }
    interface ChirimoyaListSection {
        "variant"?: ListSectionVariant;
    }
    interface ChirimoyaNavigationItem {
        /**
          * alignment of the children elements
         */
        "alignContent"?: AlignContent;
        /**
          * href property for anchor tags
         */
        "href"?: string;
        /**
          * indicates the disabled status
         */
        "isDisabled"?: boolean;
        /**
          * indicates weather the item is selected or not
         */
        "isSelected"?: boolean;
        /**
          * role of the navigation item
         */
        "navRole"?: NavigationItemRole;
        /**
          * variant of navigation item
         */
        "variant"?: NavigationItemVariant;
    }
    interface ChirimoyaRootMenu {
        /**
          * set if the menu is open
         */
        "isOpen"?: boolean;
        /**
          * emit event on Close menu
         */
        "onCloseMenu"?: (event: CustomEvent<any>) => void;
    }
    interface ChirimoyaSelectField {
        /**
          * defaultValue to use in form-controls
         */
        "defaultValue"?: string;
        /**
          * if `true`, the select will be unaccessible
         */
        "disabled"?: boolean;
        "fullWidth"?: boolean;
        /**
          * if true, a red line will appear below the select (indicating an error)
         */
        "hasError"?: boolean;
        /**
          * text to show in the top label
         */
        "label"?: string;
        /**
          * name to use in form-controls
         */
        "name"?: string;
        /**
          * event to handle user selection
         */
        "onSelectChange"?: (event: CustomEvent<KeyboardEvent>) => void;
        /**
          * text to show inside the selector in case there is no value selected
         */
        "placeholder"?: string;
        /**
          * the value of the select
         */
        "value"?: string;
    }
    interface ChirimoyaTabBar {
    }
    interface ChirimoyaTabBarItem {
        /**
          * alignment of the children elements
         */
        "alignContent"?: AlignContent;
        /**
          * href for anchor tag
         */
        "href"?: string;
        /**
          * indicates if the label is active or inactive
         */
        "isActive"?: boolean;
        /**
          * indicates the disabled status
         */
        "isDisabled"?: boolean;
        /**
          * target for anchor tag
         */
        "target"?: string;
    }
    interface ChirimoyaTextField {
        /**
          * default value to use in form controls
         */
        "defaultValue"?: string;
        /**
          * disable the component
         */
        "disabled"?: boolean;
        /**
          * if true, a red line will appear below the input (indicating an error)
         */
        "hasError"?: boolean;
        /**
          * text for the label of the input
         */
        "label"?: string;
        /**
          * color of the label
         */
        "labelColor"?: textColor;
        /**
          * name to use in form controls
         */
        "name"?: string;
        /**
          * event to handle the user input
         */
        "onInput"?: (event: CustomEvent<KeyboardEvent>) => void;
        /**
          * placeholder for the input
         */
        "placeholder"?: string;
        /**
          * if true, disables the animation of the label and set it fixed into the top of the input
         */
        "staticLabel"?: boolean;
        /**
          * color of the input text
         */
        "textColor"?: textColor;
        /**
          * the value of the input
         */
        "value"?: string;
    }
    interface ChirimoyaTheme {
        /**
          * fires whenever the theme changes
         */
        "onThemeChange"?: (event: CustomEvent<Theme>) => void;
        /**
          * indicates the theme of the library
         */
        "theme"?: Theme;
    }
    interface ChirimoyaToolbar {
    }
    interface ChirimoyaUserInfo {
    }
    interface IntrinsicElements {
        "chirimoya-alert": ChirimoyaAlert;
        "chirimoya-alert-action": ChirimoyaAlertAction;
        "chirimoya-button": ChirimoyaButton;
        "chirimoya-cell": ChirimoyaCell;
        "chirimoya-file-field": ChirimoyaFileField;
        "chirimoya-form-cell": ChirimoyaFormCell;
        "chirimoya-list-section": ChirimoyaListSection;
        "chirimoya-navigation-item": ChirimoyaNavigationItem;
        "chirimoya-root-menu": ChirimoyaRootMenu;
        "chirimoya-select-field": ChirimoyaSelectField;
        "chirimoya-tab-bar": ChirimoyaTabBar;
        "chirimoya-tab-bar-item": ChirimoyaTabBarItem;
        "chirimoya-text-field": ChirimoyaTextField;
        "chirimoya-theme": ChirimoyaTheme;
        "chirimoya-toolbar": ChirimoyaToolbar;
        "chirimoya-user-info": ChirimoyaUserInfo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "chirimoya-alert": LocalJSX.ChirimoyaAlert & JSXBase.HTMLAttributes<HTMLChirimoyaAlertElement>;
            "chirimoya-alert-action": LocalJSX.ChirimoyaAlertAction & JSXBase.HTMLAttributes<HTMLChirimoyaAlertActionElement>;
            "chirimoya-button": LocalJSX.ChirimoyaButton & JSXBase.HTMLAttributes<HTMLChirimoyaButtonElement>;
            "chirimoya-cell": LocalJSX.ChirimoyaCell & JSXBase.HTMLAttributes<HTMLChirimoyaCellElement>;
            "chirimoya-file-field": LocalJSX.ChirimoyaFileField & JSXBase.HTMLAttributes<HTMLChirimoyaFileFieldElement>;
            "chirimoya-form-cell": LocalJSX.ChirimoyaFormCell & JSXBase.HTMLAttributes<HTMLChirimoyaFormCellElement>;
            "chirimoya-list-section": LocalJSX.ChirimoyaListSection & JSXBase.HTMLAttributes<HTMLChirimoyaListSectionElement>;
            "chirimoya-navigation-item": LocalJSX.ChirimoyaNavigationItem & JSXBase.HTMLAttributes<HTMLChirimoyaNavigationItemElement>;
            "chirimoya-root-menu": LocalJSX.ChirimoyaRootMenu & JSXBase.HTMLAttributes<HTMLChirimoyaRootMenuElement>;
            "chirimoya-select-field": LocalJSX.ChirimoyaSelectField & JSXBase.HTMLAttributes<HTMLChirimoyaSelectFieldElement>;
            "chirimoya-tab-bar": LocalJSX.ChirimoyaTabBar & JSXBase.HTMLAttributes<HTMLChirimoyaTabBarElement>;
            "chirimoya-tab-bar-item": LocalJSX.ChirimoyaTabBarItem & JSXBase.HTMLAttributes<HTMLChirimoyaTabBarItemElement>;
            "chirimoya-text-field": LocalJSX.ChirimoyaTextField & JSXBase.HTMLAttributes<HTMLChirimoyaTextFieldElement>;
            "chirimoya-theme": LocalJSX.ChirimoyaTheme & JSXBase.HTMLAttributes<HTMLChirimoyaThemeElement>;
            "chirimoya-toolbar": LocalJSX.ChirimoyaToolbar & JSXBase.HTMLAttributes<HTMLChirimoyaToolbarElement>;
            "chirimoya-user-info": LocalJSX.ChirimoyaUserInfo & JSXBase.HTMLAttributes<HTMLChirimoyaUserInfoElement>;
        }
    }
}
