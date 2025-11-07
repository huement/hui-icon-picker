import { ICON_FAMILIES, resolveFamilies, DEFAULT_FAMILY_ORDER } from './icon-data.js';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    :host {
      --hui-picker-background: #fff;
      --hui-picker-surface: #fff;
      --hui-picker-border: #d0d5dd;
      --hui-picker-border-radius: 12px;
      --hui-picker-shadow: 0 20px 60px rgba(15, 23, 42, 0.18);
      --hui-picker-gap: 0.75rem;
      --hui-picker-icon-size: 1.5rem;
      --hui-picker-icon-color: currentColor;
      --hui-picker-highlight: rgba(79, 70, 229, 0.16);
      --hui-picker-highlight-border: rgba(79, 70, 229, 0.48);
      --hui-picker-accent: #4f46e5;
      --hui-picker-text: #0f172a;
      --hui-picker-muted: #475569;
      --hui-picker-grid-columns: auto-fill;
      --hui-picker-grid-min: 4.25rem;
      --hui-picker-backdrop: rgba(15, 23, 42, 0.55);
      display: inline-block;
      font-family: inherit;
      color: var(--hui-picker-text);
      position: relative;
      min-width: 18rem;
    }

    :host([disabled]) {
      pointer-events: none;
      opacity: 0.6;
    }

    .picker-control {
      display: flex;
      align-items: stretch;
      border: 1px solid var(--hui-picker-border);
      border-radius: var(--hui-picker-border-radius);
      background-color: var(--hui-picker-background);
      overflow: hidden;
    }

    .trigger {
      appearance: none;
      border: none;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      flex: 1 1 auto;
      padding: 0.75rem 1rem;
      text-align: left;
      cursor: pointer;
      font-size: 0.95rem;
      color: inherit;
    }

    .trigger:focus-visible,
    .clear:focus-visible,
    .close:focus-visible,
    .family-button:focus-visible,
    .icon-button:focus-visible {
      outline: 2px solid var(--hui-picker-accent);
      outline-offset: 2px;
    }

    .trigger:hover {
      background: rgba(148, 163, 184, 0.12);
    }

    .trigger-content {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      min-width: 0;
      flex: 1 1 auto;
    }

    .icon-preview {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background: rgba(148, 163, 184, 0.18);
      display: grid;
      place-items: center;
      color: var(--hui-picker-icon-color);
      font-size: var(--hui-picker-icon-size);
      flex-shrink: 0;
    }

    .icon-preview.empty {
      color: var(--hui-picker-muted);
    }

    .label {
      display: flex;
      flex-direction: column;
      gap: 0.125rem;
      min-width: 0;
    }

    .label span:last-child {
      color: var(--hui-picker-muted);
      font-size: 0.8rem;
      line-height: 1.2;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 16rem;
    }

    .chevron {
      border-left: 1px solid var(--hui-picker-border);
      padding-left: 0.75rem;
      color: var(--hui-picker-muted);
      display: flex;
      align-items: center;
    }

    .clear {
      border: none;
      background: transparent;
      border-left: 1px solid var(--hui-picker-border);
      padding: 0 1rem;
      cursor: pointer;
      font-size: 0.85rem;
      color: var(--hui-picker-muted);
      transition: color 0.2s ease;
    }

    .clear:hover:not([hidden]) {
      color: var(--hui-picker-accent);
    }

    .clear[hidden] {
      display: none;
    }

    .backdrop {
      position: fixed;
      inset: 0;
      background: var(--hui-picker-backdrop);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.25s ease;
      z-index: 1000;
    }

    .panel {
      position: fixed;
      inset: 50% auto auto 50%;
      transform: translate(-50%, -55%) scale(0.96);
      background: var(--hui-picker-surface);
      border-radius: 20px;
      box-shadow: var(--hui-picker-shadow);
      width: min(960px, calc(100vw - 3rem));
      max-height: min(660px, calc(100vh - 3rem));
      display: flex;
      flex-direction: column;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.25s ease, transform 0.25s ease;
      z-index: 1001;
    }

    :host([open]) .backdrop,
    .backdrop[aria-hidden='false'] {
      opacity: 1;
      visibility: visible;
    }

    :host([open]) .panel,
    .panel[aria-hidden='false'] {
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, -50%) scale(1);
    }

    .panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.25rem 1.5rem 0.75rem;
      border-bottom: 1px solid rgba(148, 163, 184, 0.2);
      gap: 1rem;
    }

    .panel-title {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 600;
    }

    .close {
      appearance: none;
      border: none;
      background: rgba(15, 23, 42, 0.05);
      color: inherit;
      border-radius: 999px;
      width: 2.25rem;
      height: 2.25rem;
      display: grid;
      place-items: center;
      cursor: pointer;
      transition: background 0.2s ease;
      flex-shrink: 0;
    }

    .close:hover {
      background: rgba(15, 23, 42, 0.12);
    }

    .panel-toolbar {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      padding: 1rem 1.5rem;
      align-items: center;
    }

    .families {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .family-button {
      border: 1px solid rgba(148, 163, 184, 0.4);
      border-radius: 999px;
      background: transparent;
      padding: 0.45rem 0.95rem;
      cursor: pointer;
      font-size: 0.85rem;
      color: var(--hui-picker-muted);
      transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
    }

    .family-button[aria-pressed='true'] {
      background: rgba(79, 70, 229, 0.1);
      border-color: var(--hui-picker-accent);
      color: var(--hui-picker-accent);
      font-weight: 600;
    }

    .search {
      flex: 1 1 220px;
      position: relative;
      display: flex;
      align-items: center;
      border: 1px solid rgba(148, 163, 184, 0.45);
      border-radius: 999px;
      padding: 0.2rem 0.85rem;
      gap: 0.65rem;
    }

    .search input {
      border: none;
      background: transparent;
      outline: none;
      width: 100%;
      font-size: 0.92rem;
      padding: 0.4rem 0;
    }

    .search-icon {
      color: var(--hui-picker-muted);
      font-size: 1rem;
    }

    .panel-body {
      padding: 0 1.5rem 1.5rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      min-height: 0;
    }

    .results-summary {
      font-size: 0.8rem;
      color: rgba(71, 85, 105, 0.9);
      margin-bottom: 0.75rem;
    }

    .icon-grid {
      display: grid;
      grid-template-columns: repeat(var(--hui-picker-grid-columns), minmax(var(--hui-picker-grid-min), 1fr));
      gap: var(--hui-picker-gap);
      overflow: auto;
      padding-bottom: 0.5rem;
    }

    .icon-button {
      border: 1px solid rgba(148, 163, 184, 0.45);
      background: rgba(148, 163, 184, 0.08);
      border-radius: 16px;
      padding: 0.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      min-height: 4.5rem;
      transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, background 0.18s ease;
      text-align: center;
      font-size: 0.75rem;
      color: var(--hui-picker-muted);
    }

    .icon-button i,
    .icon-button .material-symbols-rounded {
      font-size: 1.75rem;
      color: var(--hui-picker-icon-color);
    }

    .icon-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(15, 23, 42, 0.14);
      border-color: var(--hui-picker-highlight-border);
      background: rgba(79, 70, 229, 0.06);
      color: var(--hui-picker-text);
    }

    .icon-button[aria-selected='true'] {
      border-color: var(--hui-picker-highlight-border);
      background: var(--hui-picker-highlight);
      color: var(--hui-picker-text);
      box-shadow: 0 12px 30px rgba(79, 70, 229, 0.18);
    }

    .empty-state {
      text-align: center;
      color: var(--hui-picker-muted);
      padding: 3rem 2rem;
    }

    .empty-state strong {
      display: block;
      margin-top: 0.75rem;
      font-weight: 600;
      color: var(--hui-picker-text);
    }

    ::slotted(button) {
      font: inherit;
    }

    @media (max-width: 720px) {
      :host {
        min-width: auto;
      }

      .panel {
        width: calc(100vw - 2rem);
        max-height: calc(100vh - 2rem);
      }

      .panel-toolbar {
        flex-direction: column;
        align-items: stretch;
      }

      .families {
        order: 1;
      }

      .search {
        order: 2;
      }
    }
  </style>
  <div class="picker-control">
    <button class="trigger" type="button" part="trigger" aria-haspopup="dialog" aria-expanded="false">
      <span class="trigger-content">
        <span class="icon-preview empty" part="preview" aria-hidden="true">☆</span>
        <span class="label">
          <span class="label-title">Icon</span>
          <span class="label-selection" part="value">Select an icon</span>
        </span>
      </span>
      <span class="chevron" aria-hidden="true">▾</span>
    </button>
    <button class="clear" type="button" part="clear" hidden>Clear</button>
  </div>
  <div class="backdrop" part="backdrop" aria-hidden="true"></div>
  <section class="panel" part="panel" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Choose an icon">
    <header class="panel-header">
      <h2 class="panel-title">Choose an icon</h2>
      <button class="close" type="button" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </header>
    <div class="panel-toolbar">
      <div class="families" role="tablist" aria-label="Icon families"></div>
      <label class="search" part="search">
        <span class="search-icon" aria-hidden="true">🔍</span>
        <input type="search" placeholder="Search icons" aria-label="Search icons" />
      </label>
    </div>
    <div class="panel-body">
      <div class="results-summary" part="summary"></div>
      <div class="icon-grid" part="grid" role="listbox"></div>
    </div>
  </section>
`;

/**
 * @typedef {Object} HuiIconSelection
 * @property {string} name
 * @property {string} family
 * @property {string} preview
 */

export class HuiIconPicker extends HTMLElement {
  static get observedAttributes() {
    return ['value', 'family', 'families', 'placeholder', 'label', 'disabled'];
  }

  static formAssociated = true;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this._internals = this.attachInternals?.();
    this._families = resolveFamilies(DEFAULT_FAMILY_ORDER);
    this._currentFamily = this._families[0] ?? 'bootstrap';
    this._value = '';
    this._name = this.getAttribute('name');
    this._placeholder = this.getAttribute('placeholder') || 'Select an icon';
    this._label = this.getAttribute('label') || 'Icon';
    this._open = false;

    this._boundHandleDocumentKeydown = this._handleDocumentKeydown.bind(this);
    this._boundHandleOutsideClick = this._handleOutsideClick.bind(this);

    this.elements = {
      trigger: this.shadowRoot.querySelector('.trigger'),
      clear: this.shadowRoot.querySelector('.clear'),
      preview: this.shadowRoot.querySelector('.icon-preview'),
      valueLabel: this.shadowRoot.querySelector('.label-selection'),
      labelTitle: this.shadowRoot.querySelector('.label-title'),
      backdrop: this.shadowRoot.querySelector('.backdrop'),
      panel: this.shadowRoot.querySelector('.panel'),
      families: this.shadowRoot.querySelector('.families'),
      searchInput: this.shadowRoot.querySelector('.search input'),
      summary: this.shadowRoot.querySelector('.results-summary'),
      grid: this.shadowRoot.querySelector('.icon-grid'),
      close: this.shadowRoot.querySelector('.close')
    };

    this.elements.trigger.addEventListener('click', () => this.toggle());
    this.elements.clear.addEventListener('click', () => this.clear());
    this.elements.close.addEventListener('click', () => this.close());
    this.elements.backdrop.addEventListener('click', () => this.close());
    this.elements.searchInput.addEventListener('input', () => this._renderIcons());
  }

  connectedCallback() {
    if (this.hasAttribute('families')) {
      this._families = resolveFamilies(this.getAttribute('families'));
    }

    if (!this._families.length) {
      this._families = resolveFamilies(DEFAULT_FAMILY_ORDER);
    }

    if (this.hasAttribute('family')) {
      const familyAttr = this.getAttribute('family');
      if (this._families.includes(familyAttr)) {
        this._currentFamily = familyAttr;
      }
    }

    if (this.hasAttribute('value')) {
      this._value = this.getAttribute('value');
    }

    this._placeholder = this.getAttribute('placeholder') || this._placeholder;
    this._label = this.getAttribute('label') || this._label;

    this._renderFamilies();
    this._renderIcons();
    this._updateDisplay();
    this._syncAria();
    this._applyLabeling();
    this._syncFormValue();
  }

  disconnectedCallback() {
    this._removeDocumentListeners();
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    switch (name) {
      case 'value':
        this._value = newValue ?? '';
        this._updateDisplay();
        this._syncFormValue();
        break;
      case 'family':
        if (newValue && this._families.includes(newValue)) {
          this._currentFamily = newValue;
          this._renderFamilies();
          this._renderIcons();
        }
        break;
      case 'families':
        this._families = resolveFamilies(newValue);
        if (!this._families.length) {
          this._families = resolveFamilies(DEFAULT_FAMILY_ORDER);
        }
        if (!this._families.includes(this._currentFamily)) {
          this._currentFamily = this._families[0];
        }
        this._renderFamilies();
        this._renderIcons();
        break;
      case 'placeholder':
        this._placeholder = newValue || 'Select an icon';
        this._updateDisplay();
        break;
      case 'label':
        this._label = newValue || 'Icon';
        this._applyLabeling();
        break;
      case 'disabled':
        this.elements.trigger.toggleAttribute('disabled', this.hasAttribute('disabled'));
        break;
      default:
        break;
    }
  }

  /** @returns {string} */
  get value() {
    return this._value;
  }

  /** @param {string} newValue */
  set value(newValue) {
    if (newValue === this._value) return;
    this._value = newValue || '';
    this._updateDisplay();
    this._syncFormValue();
    this.dispatchEvent(new InputEvent('input', { bubbles: true }));
    this.dispatchEvent(new Event('change', { bubbles: true }));
  }

  /** @returns {string} */
  get family() {
    return this._currentFamily;
  }

  /** @param {string} newFamily */
  set family(newFamily) {
    if (!this._families.includes(newFamily)) return;
    if (newFamily === this._currentFamily) return;
    this._currentFamily = newFamily;
    this.setAttribute('family', newFamily);
    this._renderFamilies();
    this._renderIcons();
  }

  /** @returns {string[]} */
  get families() {
    return [...this._families];
  }

  /** @param {string[] | string} value */
  set families(value) {
    const normalized = resolveFamilies(value);
    if (!normalized.length) return;
    this._families = normalized;
    if (!this._families.includes(this._currentFamily)) {
      this._currentFamily = this._families[0];
    }
    this.setAttribute('families', this._families.join(','));
    this._renderFamilies();
    this._renderIcons();
  }

  get open() {
    return this._open;
  }

  openPicker() {
    if (this._open || this.hasAttribute('disabled')) return;
    this._open = true;
    this.setAttribute('open', '');
    this.elements.trigger.setAttribute('aria-expanded', 'true');
    this.elements.panel.setAttribute('aria-hidden', 'false');
    this.elements.backdrop.setAttribute('aria-hidden', 'false');
    this._addDocumentListeners();
    this.elements.searchInput.focus({ preventScroll: true });
  }

  close() {
    if (!this._open) return;
    this._open = false;
    this.removeAttribute('open');
    this.elements.trigger.setAttribute('aria-expanded', 'false');
    this.elements.panel.setAttribute('aria-hidden', 'true');
    this.elements.backdrop.setAttribute('aria-hidden', 'true');
    this._removeDocumentListeners();
    this.elements.trigger.focus({ preventScroll: true });
  }

  toggle() {
    if (this._open) {
      this.close();
    } else {
      this.openPicker();
    }
  }

  clear() {
    this.value = '';
    this.dispatchEvent(new CustomEvent('icon-clear', { bubbles: true }));
  }

  /**
   * @param {string} name
   * @param {string} family
   */
  selectIcon(name, family = this._currentFamily) {
    const familyConfig = ICON_FAMILIES[family];
    if (!familyConfig) return;

    const preview = familyConfig.previewClass(name);
    this.value = `${family}:${name}`;
    this.dispatchEvent(
      new CustomEvent('icon-select', {
        detail: /** @type {HuiIconSelection} */ ({
          family,
          name,
          preview
        }),
        bubbles: true
      })
    );
    this.close();
  }

  focus() {
    this.elements.trigger.focus();
  }

  formResetCallback() {
    this.value = this.getAttribute('value') || '';
  }

  formStateRestoreCallback(state) {
    if (typeof state === 'string') {
      this.value = state;
    }
  }

  _renderFamilies() {
    const { families } = this.elements;
    families.innerHTML = '';

    this._families.forEach((family) => {
      const config = ICON_FAMILIES[family];
      if (!config) return;

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'family-button';
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-pressed', String(family === this._currentFamily));
      button.textContent = config.name;
      button.addEventListener('click', () => {
        this.family = family;
      });
      families.appendChild(button);
    });
  }

  _renderIcons() {
    const familyConfig = ICON_FAMILIES[this._currentFamily];
    if (!familyConfig) return;

    const searchTerm = this.elements.searchInput.value.trim().toLowerCase();

    const icons = !searchTerm
      ? familyConfig.icons
      : familyConfig.icons.filter((icon) => icon.toLowerCase().includes(searchTerm));

    this.elements.summary.textContent = `${icons.length} icon${icons.length === 1 ? '' : 's'} available`;

    this.elements.grid.innerHTML = '';

    if (!icons.length) {
      const empty = document.createElement('div');
      empty.className = 'empty-state';
      empty.innerHTML = `
        <span aria-hidden="true" style="font-size:2.5rem;">🔎</span>
        <strong>No icons found</strong>
        <span>Try a different search term.</span>
      `;
      this.elements.grid.appendChild(empty);
      return;
    }

    const currentSelection = this._parseValue(this._value);

    icons.forEach((icon) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'icon-button';
      button.setAttribute('role', 'option');
      button.setAttribute('data-icon', icon);
      button.setAttribute('aria-selected', String(currentSelection && currentSelection.name === icon && currentSelection.family === this._currentFamily));
      button.innerHTML = `
        ${familyConfig.previewClass(icon)}
        <span>${icon}</span>
      `;
      button.addEventListener('click', () => this.selectIcon(icon, this._currentFamily));
      this.elements.grid.appendChild(button);
    });
  }

  _updateDisplay() {
    const selection = this._parseValue(this._value);
    const hasSelection = Boolean(selection && ICON_FAMILIES[selection.family]);

    this.elements.labelTitle.textContent = this._label;
    this.elements.valueLabel.textContent = hasSelection ? selection.name : this._placeholder;

    this.elements.preview.classList.toggle('empty', !hasSelection);
    this.elements.clear.hidden = !hasSelection;

    if (hasSelection) {
      const previewHtml = ICON_FAMILIES[selection.family].previewClass(selection.name);
      this.elements.preview.innerHTML = previewHtml;
      this.elements.trigger.setAttribute('data-selected-family', selection.family);
    } else {
      this.elements.preview.innerHTML = '☆';
      this.elements.trigger.removeAttribute('data-selected-family');
    }

    this._highlightSelection();
  }

  _highlightSelection() {
    const selection = this._parseValue(this._value);
    const buttons = this.elements.grid.querySelectorAll('.icon-button');
    buttons.forEach((button) => {
      const icon = button.getAttribute('data-icon');
      const familyMatches = selection && selection.family === this._currentFamily;
      button.setAttribute('aria-selected', String(familyMatches && selection?.name === icon));
    });
  }

  _syncFormValue() {
    if (!this._internals) return;
    this._internals.setFormValue(this._value || null);
  }

  _syncAria() {
    this.elements.trigger.setAttribute('aria-expanded', this._open ? 'true' : 'false');
  }

  _applyLabeling() {
    this.elements.labelTitle.textContent = this._label;
    this.shadowRoot.host.setAttribute('aria-label', this._label);
  }

  _addDocumentListeners() {
    document.addEventListener('keydown', this._boundHandleDocumentKeydown, true);
    document.addEventListener('pointerdown', this._boundHandleOutsideClick, true);
  }

  _removeDocumentListeners() {
    document.removeEventListener('keydown', this._boundHandleDocumentKeydown, true);
    document.removeEventListener('pointerdown', this._boundHandleOutsideClick, true);
  }

  _handleDocumentKeydown(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
    }

    if (event.key === 'Tab' && this._open) {
      const focusable = this._getFocusableElements();
      if (!focusable.length) return;

      const currentIndex = focusable.indexOf(document.activeElement);
      if (event.shiftKey) {
        if (currentIndex <= 0) {
          focusable[focusable.length - 1].focus();
          event.preventDefault();
        }
      } else if (currentIndex === focusable.length - 1) {
        focusable[0].focus();
        event.preventDefault();
      }
    }
  }

  _handleOutsideClick(event) {
    if (!this._open) return;
    if (event.composedPath().includes(this) || event.composedPath().includes(this.elements.panel)) {
      return;
    }
    this.close();
  }

  _getFocusableElements() {
    return Array.from(
      this.shadowRoot.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
  }

  /**
   * @private
   * @param {string} raw
   * @returns {{family: string, name: string} | null}
   */
  _parseValue(raw) {
    if (!raw) return null;
    const [family, name] = raw.split(':');
    if (!family || !name || !ICON_FAMILIES[family]) return null;
    return { family, name };
  }
}

if (!customElements.get('hui-icon-picker')) {
  customElements.define('hui-icon-picker', HuiIconPicker);
}

export default HuiIconPicker;

