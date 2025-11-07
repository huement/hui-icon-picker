interface IconFamilyConfig {
  name: string;
  icons: string[];
  previewClass(icon: string): string;
}

type IconFamilyName = 'bootstrap' | 'material' | (string & {});

interface HuiIconSelection {
  family: IconFamilyName;
  name: string;
  preview: string;
}

interface HuiIconPickerChangeEvent extends CustomEvent<HuiIconSelection> {}

interface HuiIconPickerClearEvent extends CustomEvent<undefined> {}

declare const ICON_FAMILIES: Record<string, IconFamilyConfig>;
declare const DEFAULT_FAMILY_ORDER: IconFamilyName[];
declare function resolveFamilies(input?: string | string[]): IconFamilyName[];

declare class HuiIconPicker extends HTMLElement {
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

export { DEFAULT_FAMILY_ORDER, HuiIconPicker, ICON_FAMILIES, HuiIconPicker as default, resolveFamilies };
export type { HuiIconPickerChangeEvent, HuiIconPickerClearEvent, HuiIconSelection, IconFamilyConfig, IconFamilyName };
