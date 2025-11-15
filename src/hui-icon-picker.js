import {
  ICON_FAMILIES,
  resolveFamilies,
  DEFAULT_FAMILY_ORDER,
} from "./icon-data.js";

const template = document.createElement("template");

template.innerHTML = `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0&display=block" crossorigin="anonymous" />
  <style>
    :host {
      --hui-picker-surface: #0f172a;
      --hui-picker-panel: #1e293b;
      --hui-picker-border: rgba(148, 163, 184, 0.35);
      --hui-picker-text: #f8fafc;
      --hui-picker-muted: rgba(226, 232, 240, 0.75);
      --hui-picker-primary: #6366f1;
      --hui-picker-primary-contrast: #0f172a;
      --hui-picker-backdrop: rgba(15, 23, 42, 0.65);
      --hui-picker-radius: 16px;
      --hui-picker-shadow: 0 32px 96px rgba(15, 23, 42, 0.45);
      --hui-picker-grid-min: 4rem;
      display: inline-block;
      font-family: inherit;
      color: var(--hui-picker-text);
      min-width: 18rem;
      position: relative;
    }

    :host([disabled]) {
      pointer-events: none;
      opacity: 0.6;
    }

    .picker-control {
      display: flex;
      align-items: stretch;
      border: 1px solid var(--hui-picker-border);
      border-radius: var(--hui-picker-radius);
      background: var(--hui-picker-panel);
      overflow: hidden;
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.35);
    }

    .trigger {
      appearance: none;
      border: none;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      flex: 1 1 auto;
      padding: 0.85rem 1.1rem;
      text-align: left;
      cursor: pointer;
      font-size: 0.95rem;
      color: inherit;
    }

    .trigger:hover {
      background: rgba(148, 163, 184, 0.08);
    }

    .trigger:focus-visible,
    .clear:focus-visible,
    .btn:focus-visible,
    .icon-item:focus-visible,
    .form-select:focus-visible,
    .form-control:focus-visible {
      outline: 2px solid var(--hui-picker-primary);
      outline-offset: 2px;
    }

    .trigger-content {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      min-width: 0;
      flex: 1 1 auto;
    }

    .icon-preview {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 12px;
      background: rgba(148, 163, 184, 0.15);
      display: grid;
      place-items: center;
      color: inherit;
      font-size: 1.4rem;
      flex-shrink: 0;
    }

    .icon-preview.empty {
      color: var(--hui-picker-muted);
    }

    .label {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      min-width: 0;
    }

    .label span:last-child {
      color: var(--hui-picker-muted);
      font-size: 0.82rem;
      line-height: 1.2;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 16rem;
    }

    .chevron {
      border-left: 1px solid var(--hui-picker-border);
      padding-left: 0.85rem;
      color: var(--hui-picker-muted);
      display: flex;
      align-items: center;
    }

    .clear {
      border: none;
      background: rgba(99, 102, 241, 0.08);
      border-left: 1px solid var(--hui-picker-border);
      padding: 0 1rem;
      cursor: pointer;
      font-size: 0.85rem;
      color: var(--hui-picker-muted);
      transition: color 0.2s ease, background 0.2s ease;
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }

    .clear:hover:not([hidden]) {
      color: var(--hui-picker-text);
      background: rgba(99, 102, 241, 0.15);
    }

    .clear[hidden] {
      display: none;
    }

    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: var(--hui-picker-backdrop);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.25s ease;
      z-index: 1000;
    }

    .modal {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.25s ease;
      z-index: 1001;
    }

    .modal[aria-hidden='true'],
    .modal-backdrop[aria-hidden='true'] {
      pointer-events: none;
    }

    .modal[aria-hidden='false'],
    :host([open]) .modal {
      opacity: 1;
      visibility: visible;
    }

    .modal-backdrop[aria-hidden='false'],
    :host([open]) .modal-backdrop {
      opacity: 1;
      visibility: visible;
    }

    .modal-dialog {
      width: min(960px, 100%);
      max-height: calc(100vh - 3rem);
      display: flex;
    }

    .modal-content {
      background: var(--hui-picker-panel);
      border-radius: 24px;
      border: 1px solid rgba(148, 163, 184, 0.25);
      box-shadow: var(--hui-picker-shadow);
      display: flex;
      flex-direction: column;
      width: 100%;
      overflow: hidden;
    }

    .modal-header {
      padding: 1.5rem 1.75rem 1rem;
      border-bottom: 1px solid rgba(148, 163, 184, 0.12);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .modal-title {
      font-size: 1.1rem;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .btn-close {
      appearance: none;
      border: none;
      background: rgba(148, 163, 184, 0.12);
      color: inherit;
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 999px;
      display: grid;
      place-items: center;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .btn-close:hover {
      background: rgba(148, 163, 184, 0.25);
    }

    .modal-body {
      padding: 1.5rem 1.75rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .modal-footer {
      padding: 1.25rem 1.75rem 1.75rem;
      border-top: 1px solid rgba(148, 163, 184, 0.12);
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
    }

    .form-label {
      display: block;
      margin-bottom: 0.4rem;
      font-weight: 600;
    }

    .form-select,
    .form-control {
      width: 100%;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.35);
      background: rgba(15, 23, 42, 0.35);
      color: inherit;
      padding: 0.55rem 1rem;
      font-size: 0.95rem;
    }

    .form-select:focus,
    .form-control:focus {
      border-color: var(--hui-picker-primary);
    }

    .input-group {
      display: flex;
      align-items: stretch;
      border-radius: 999px;
      overflow: hidden;
      border: 1px solid rgba(148, 163, 184, 0.35);
      background: rgba(15, 23, 42, 0.35);
    }

    .input-group-text {
      padding: 0 0.85rem;
      display: flex;
      align-items: center;
      color: var(--hui-picker-muted);
    }

    .input-group .form-control {
      border: none;
      border-radius: 0;
      background: transparent;
      padding-left: 0;
    }

    .results-summary {
      font-size: 0.85rem;
      color: var(--hui-picker-muted);
      min-height: 1.5rem;
    }

    .icon-grid-container {
      border: 1px solid rgba(148, 163, 184, 0.15);
      border-radius: 20px;
      padding: 1rem;
      background: rgba(15, 23, 42, 0.25);
      max-height: 420px;
      overflow: hidden;
    }

    .icon-grid-container.loading {
      opacity: 0.4;
      pointer-events: none;
    }

    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--hui-picker-grid-min), 1fr));
      gap: 0.75rem;
      max-height: 360px;
      overflow-y: auto;
      padding-right: 0.25rem;
    }

    .icon-item {
      appearance: none;
      font: inherit;
      border: 1px solid transparent;
      border-radius: 14px;
      background: rgba(226, 232, 240, 0.04);
      padding: 0.75rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.45rem;
      cursor: pointer;
      transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
      color: var(--hui-picker-muted);
      font-size: 0.75rem;
      text-transform: none;
    }

    .icon-item span {
      text-transform: none;
      word-break: break-word;
    }

    .icon-item i,
    .icon-item .material-symbols-rounded {
      font-size: 1.65rem;
      color: var(--hui-picker-text);
    }

    .icon-item:hover {
      border-color: rgba(148, 163, 184, 0.3);
      background: rgba(99, 102, 241, 0.12);
      transform: translateY(-2px);
      color: var(--hui-picker-text);
    }

    .icon-item.selected {
      border-color: var(--hui-picker-primary);
      background: rgba(99, 102, 241, 0.15);
      color: var(--hui-picker-text);
    }

    .icon-loading {
      display: none;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      padding: 1.5rem 0;
    }

    .icon-loading.active {
      display: flex;
    }

    .spinner-border {
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 50%;
      border: 2px solid rgba(148, 163, 184, 0.35);
      border-top-color: var(--hui-picker-primary);
      animation: hui-spin 0.9s linear infinite;
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }

    .btn {
      border: none;
      border-radius: 999px;
      padding: 0.65rem 1.4rem;
      font-size: 0.95rem;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      cursor: pointer;
      transition: opacity 0.2s ease, transform 0.2s ease;
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .btn-primary {
      background: var(--hui-picker-primary);
      color: #fff;
      box-shadow: 0 10px 25px rgba(99, 102, 241, 0.35);
    }

    .btn-primary:hover:not(:disabled) {
      transform: translateY(-1px);
    }

    .btn-secondary {
      background: rgba(148, 163, 184, 0.18);
      color: var(--hui-picker-text);
    }

    @keyframes hui-spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @media (max-width: 720px) {
      :host {
        min-width: auto;
      }

      .modal-dialog {
        width: 100%;
      }

      .modal-content {
        border-radius: 18px;
      }
    }

    .material-symbols-rounded,
    .material-icons {
      font-family: 'Material Symbols Rounded', 'Material Icons', sans-serif;
      font-weight: normal;
      font-style: normal;
      font-size: 24px;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      -webkit-font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      font-feature-settings: 'liga';
      vertical-align: middle;
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
    <button class="clear" type="button" part="clear" hidden>
      <span class="material-symbols-rounded" aria-hidden="true">close</span>
      <span class="visually-hidden">Clear selection</span>
    </button>
  </div>
  <div class="modal-backdrop" part="backdrop" aria-hidden="true"></div>
  <section class="modal" part="modal" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Choose an icon">
    <div class="modal-dialog">
      <div class="modal-content">
        <header class="modal-header">
          <h2 class="modal-title">
            <i class="material-symbols-rounded" aria-hidden="true">style</i>
            Icon Picker
          </h2>
          <button class="btn-close" type="button" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </header>
        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">Icon Family</label>
            <select class="form-select icon-family-selector"></select>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-text">
                <i class="material-symbols-rounded" aria-hidden="true">search</i>
              </span>
              <input type="search" class="form-control icon-search-input" placeholder="Search icons..." autocomplete="off" aria-label="Search icons" />
            </div>
            <div class="icon-search-results position-absolute d-none"></div>
          </div>
          <div class="results-summary" part="summary"></div>
          <div class="icon-grid-container">
            <div class="icon-grid" part="grid" role="listbox"></div>
          </div>
          <div class="icon-loading" role="status" aria-live="polite">
            <span class="spinner-border" aria-hidden="true"></span>
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <footer class="modal-footer">
          <button type="button" class="btn btn-secondary modal-cancel">
            <span>Cancel</span>
          </button>
          <button type="button" class="btn btn-primary icon-picker-confirm" disabled>
            <span class="material-symbols-rounded" aria-hidden="true">check</span>
            <span>Select Icon</span>
          </button>
        </footer>
      </div>
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
    return ["value", "family", "families", "placeholder", "label", "disabled"];
  }

  static formAssociated = true;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this._internals = this.attachInternals?.();
    this._families = resolveFamilies(DEFAULT_FAMILY_ORDER);
    this._currentFamily = this._families[0] ?? "bootstrap";
    this._value = "";
    this._name = this.getAttribute("name");
    this._placeholder = this.getAttribute("placeholder") || "Select an icon";
    this._label = this.getAttribute("label") || "Icon";
    this._open = false;
    this._pendingSelection = null;

    this._boundHandleDocumentKeydown = this._handleDocumentKeydown.bind(this);
    this._boundHandleOutsideClick = this._handleOutsideClick.bind(this);

    this.elements = {
      trigger: this.shadowRoot.querySelector(".trigger"),
      clear: this.shadowRoot.querySelector(".clear"),
      preview: this.shadowRoot.querySelector(".icon-preview"),
      valueLabel: this.shadowRoot.querySelector(".label-selection"),
      labelTitle: this.shadowRoot.querySelector(".label-title"),
      backdrop: this.shadowRoot.querySelector(".modal-backdrop"),
      modal: this.shadowRoot.querySelector(".modal"),
      modalDialog: this.shadowRoot.querySelector(".modal-dialog"),
      familySelect: this.shadowRoot.querySelector(".icon-family-selector"),
      searchInput: this.shadowRoot.querySelector(".icon-search-input"),
      summary: this.shadowRoot.querySelector(".results-summary"),
      gridContainer: this.shadowRoot.querySelector(".icon-grid-container"),
      grid: this.shadowRoot.querySelector(".icon-grid"),
      loading: this.shadowRoot.querySelector(".icon-loading"),
      confirm: this.shadowRoot.querySelector(".icon-picker-confirm"),
      cancel: this.shadowRoot.querySelector(".modal-cancel"),
      close: this.shadowRoot.querySelector(".btn-close"),
    };

    this.elements.trigger.addEventListener("click", () => this.toggle());
    this.elements.clear.addEventListener("click", () => this.clear());
    this.elements.confirm?.addEventListener("click", () =>
      this._confirmSelection()
    );
    this.elements.cancel?.addEventListener("click", () => this.close());
    this.elements.close?.addEventListener("click", () => this.close());
    this.elements.backdrop?.addEventListener("click", () => this.close());
    this.elements.searchInput?.addEventListener("input", () =>
      this._handleSearchInput()
    );
    this.elements.familySelect?.addEventListener("change", (event) => {
      const nextFamily = event.target.value;
      if (!nextFamily) {
        return;
      }
      this.family = nextFamily;
      this._pendingSelection = null;
      this._updateConfirmState();
    });
  }

  connectedCallback() {
    if (this.hasAttribute("families")) {
      this._families = resolveFamilies(this.getAttribute("families"));
    }

    if (!this._families.length) {
      this._families = resolveFamilies(DEFAULT_FAMILY_ORDER);
    }

    if (this.hasAttribute("family")) {
      const familyAttr = this.getAttribute("family");
      if (this._families.includes(familyAttr)) {
        this._currentFamily = familyAttr;
      }
    }

    if (this.hasAttribute("value")) {
      this._value = this.getAttribute("value");
    }

    this._placeholder = this.getAttribute("placeholder") || this._placeholder;
    this._label = this.getAttribute("label") || this._label;

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
      case "value":
        this._value = newValue ?? "";
        this._updateDisplay();
        this._syncFormValue();
        break;
      case "family":
        if (newValue && this._families.includes(newValue)) {
          this._currentFamily = newValue;
          this._renderFamilies();
          if (this.elements.familySelect) {
            this.elements.familySelect.value = this._currentFamily;
          }
          this._renderIcons();
        }
        break;
      case "families":
        this._families = resolveFamilies(newValue);
        if (!this._families.length) {
          this._families = resolveFamilies(DEFAULT_FAMILY_ORDER);
        }
        if (!this._families.includes(this._currentFamily)) {
          this._currentFamily = this._families[0];
        }
        this._renderFamilies();
        if (this.elements.familySelect) {
          this.elements.familySelect.value = this._currentFamily;
        }
        this._renderIcons();
        break;
      case "placeholder":
        this._placeholder = newValue || "Select an icon";
        this._updateDisplay();
        break;
      case "label":
        this._label = newValue || "Icon";
        this._applyLabeling();
        break;
      case "disabled":
        this.elements.trigger.toggleAttribute(
          "disabled",
          this.hasAttribute("disabled")
        );
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
    this._value = newValue || "";
    this._updateDisplay();
    this._syncFormValue();
    this.dispatchEvent(new InputEvent("input", { bubbles: true }));
    this.dispatchEvent(new Event("change", { bubbles: true }));
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
    this.setAttribute("family", newFamily);
    this._renderFamilies();
    if (this.elements.familySelect) {
      this.elements.familySelect.value = newFamily;
    }
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
    this.setAttribute("families", this._families.join(","));
    this._renderFamilies();
    this._renderIcons();
  }

  get open() {
    return this._open;
  }

  openPicker() {
    if (this._open || this.hasAttribute("disabled")) return;
    this._open = true;
    this.setAttribute("open", "");
    this.elements.trigger.setAttribute("aria-expanded", "true");
    this.elements.modal?.setAttribute("aria-hidden", "false");
    this.elements.backdrop?.setAttribute("aria-hidden", "false");
    this._pendingSelection = null;
    this._updateConfirmState();
    if (this.elements.searchInput) {
      this.elements.searchInput.value = "";
    }
    this._renderIcons();
    this._addDocumentListeners();
    this.elements.searchInput?.focus({ preventScroll: true });
  }

  close() {
    if (!this._open) return;
    this._open = false;
    this.removeAttribute("open");
    this.elements.trigger.setAttribute("aria-expanded", "false");
    this.elements.modal?.setAttribute("aria-hidden", "true");
    this.elements.backdrop?.setAttribute("aria-hidden", "true");
    this._pendingSelection = null;
    this._updateConfirmState();
    if (this.elements.searchInput) {
      this.elements.searchInput.value = "";
    }
    this._renderIcons();
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
    this.value = "";
    this.dispatchEvent(new CustomEvent("icon-clear", { bubbles: true }));
    this._pendingSelection = null;
    this._updateConfirmState();
    this._highlightSelection();
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
    this._pendingSelection = null;
    this._updateConfirmState();
    this.dispatchEvent(
      new CustomEvent("icon-select", {
        detail: /** @type {HuiIconSelection} */ ({
          family,
          name,
          preview,
        }),
        bubbles: true,
      })
    );
    this.close();
  }

  focus() {
    this.elements.trigger.focus();
  }

  formResetCallback() {
    this.value = this.getAttribute("value") || "";
  }

  formStateRestoreCallback(state) {
    if (typeof state === "string") {
      this.value = state;
    }
  }

  _renderFamilies() {
    const select = this.elements.familySelect;
    if (!select) return;
    select.innerHTML = "";

    this._families.forEach((family) => {
      const config = ICON_FAMILIES[family];
      if (!config) return;
      const option = document.createElement("option");
      option.value = family;
      option.textContent = config.name;
      option.selected = family === this._currentFamily;
      select.appendChild(option);
    });
  }

  _renderIcons() {
    const familyConfig = ICON_FAMILIES[this._currentFamily];
    if (!familyConfig) return;

    this._setLoading(true);
    const searchTerm = (this.elements.searchInput?.value || "")
      .trim()
      .toLowerCase();

    const icons = !searchTerm
      ? familyConfig.icons
      : familyConfig.icons.filter((icon) =>
          icon.toLowerCase().includes(searchTerm)
        );

    if (this.elements.summary) {
      this.elements.summary.textContent = `${icons.length} icon${
        icons.length === 1 ? "" : "s"
      } available`;
    }

    if (!this.elements.grid) {
      this._setLoading(false);
      return;
    }

    this.elements.grid.innerHTML = "";

    if (!icons.length) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.innerHTML = `
        <span aria-hidden="true" style="font-size:2.5rem;">🔎</span>
        <strong>No icons found</strong>
        <span>Try a different search term.</span>
      `;
      this.elements.grid.appendChild(empty);
      this._setLoading(false);
      return;
    }

    icons.forEach((icon) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "icon-item";
      button.setAttribute("role", "option");
      button.setAttribute("data-icon", icon);
      button.setAttribute("data-family", this._currentFamily);
      button.innerHTML = `
        ${familyConfig.previewClass(icon)}
        <span class="icon-name">${icon}</span>
      `;
      button.addEventListener("click", () => {
        this._pendingSelection = {
          name: icon,
          family: this._currentFamily,
        };
        this._updateConfirmState();
        this._highlightSelection();
      });
      this.elements.grid.appendChild(button);
    });
    this._setLoading(false);
    this._highlightSelection();
  }

  _updateDisplay() {
    const selection = this._parseValue(this._value);
    const hasSelection = Boolean(selection && ICON_FAMILIES[selection.family]);

    this.elements.labelTitle.textContent = this._label;
    this.elements.valueLabel.textContent = hasSelection
      ? selection.name
      : this._placeholder;

    this.elements.preview.classList.toggle("empty", !hasSelection);
    this.elements.clear.hidden = !hasSelection;

    if (hasSelection) {
      const previewHtml = ICON_FAMILIES[selection.family].previewClass(
        selection.name
      );
      this.elements.preview.innerHTML = previewHtml;
      this.elements.trigger.setAttribute(
        "data-selected-family",
        selection.family
      );
    } else {
      this.elements.preview.innerHTML = "☆";
      this.elements.trigger.removeAttribute("data-selected-family");
    }

    this._highlightSelection();
  }

  _highlightSelection() {
    const selection = this._pendingSelection ?? this._parseValue(this._value);
    if (!this.elements.grid) return;
    const buttons = this.elements.grid.querySelectorAll(".icon-item");
    buttons.forEach((button) => {
      const icon = button.getAttribute("data-icon");
      const family = button.getAttribute("data-family");
      const isActive =
        selection && selection.name === icon && selection.family === family;
      button.classList.toggle("selected", Boolean(isActive));
      button.setAttribute("aria-selected", String(Boolean(isActive)));
    });
  }

  _syncFormValue() {
    if (!this._internals) return;
    this._internals.setFormValue(this._value || null);
  }

  _syncAria() {
    this.elements.trigger.setAttribute(
      "aria-expanded",
      this._open ? "true" : "false"
    );
  }

  _applyLabeling() {
    this.elements.labelTitle.textContent = this._label;
    this.shadowRoot.host.setAttribute("aria-label", this._label);
  }

  _addDocumentListeners() {
    document.addEventListener(
      "keydown",
      this._boundHandleDocumentKeydown,
      true
    );
    document.addEventListener(
      "pointerdown",
      this._boundHandleOutsideClick,
      true
    );
  }

  _removeDocumentListeners() {
    document.removeEventListener(
      "keydown",
      this._boundHandleDocumentKeydown,
      true
    );
    document.removeEventListener(
      "pointerdown",
      this._boundHandleOutsideClick,
      true
    );
  }

  _handleDocumentKeydown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      this.close();
    }

    if (event.key === "Tab" && this._open) {
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
    const path = event.composedPath();
    if (
      path.includes(this) ||
      (this.elements.modalDialog && path.includes(this.elements.modalDialog))
    ) {
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
    const [family, name] = raw.split(":");
    if (!family || !name || !ICON_FAMILIES[family]) return null;
    return { family, name };
  }

  _handleSearchInput() {
    this._renderIcons();
  }

  _confirmSelection() {
    if (!this._pendingSelection) return;
    this.selectIcon(this._pendingSelection.name, this._pendingSelection.family);
  }

  _updateConfirmState() {
    if (!this.elements.confirm) return;
    this.elements.confirm.disabled = !this._pendingSelection;
  }

  _setLoading(isLoading) {
    if (!this.elements.loading || !this.elements.gridContainer) return;
    this.elements.loading.classList.toggle("active", isLoading);
    this.elements.gridContainer.classList.toggle("loading", isLoading);
  }
}

if (!customElements.get("hui-icon-picker")) {
  customElements.define("hui-icon-picker", HuiIconPicker);
}

export default HuiIconPicker;
