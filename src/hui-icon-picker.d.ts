export interface IconFamilyConfig {
  name: string;
  icons: string[];
  previewClass(icon: string): string;
}

export type IconFamilyName = 'bootstrap' | 'material' | (string & {});

export interface HuiIconSelection {
  family: IconFamilyName;
  name: string;
  preview: string;
}

export interface HuiIconPickerChangeEvent extends CustomEvent<HuiIconSelection> {}

export interface HuiIconPickerClearEvent extends CustomEvent<undefined> {}

export declare const ICON_FAMILIES: Record<string, IconFamilyConfig>;
export declare const DEFAULT_FAMILY_ORDER: IconFamilyName[];
export declare function resolveFamilies(input?: string | string[]): IconFamilyName[];

export declare class HuiIconPicker extends HTMLElement {
  static formAssociated: boolean;
  static observedAttributes: string[];

  value: string;
  family: IconFamilyName;
  families: IconFamilyName[];
  open: boolean;

  openPicker(): void;
  close(): void;
  toggle(): void;
  clear(): void;
  selectIcon(name: string, family?: IconFamilyName): void;
  focus(): void;
}

export default HuiIconPicker;

declare global {
  interface HTMLElementTagNameMap {
    'hui-icon-picker': HuiIconPicker;
  }

  namespace JSX {
    interface IntrinsicElements {
      'hui-icon-picker': {
        value?: string;
        family?: IconFamilyName;
        families?: string;
        label?: string;
        placeholder?: string;
        disabled?: boolean;
        name?: string;
      } & Record<string, unknown>;
    }
  }
}
