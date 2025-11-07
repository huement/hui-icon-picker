(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.huiIconPicker = {}));
})(this, (function (exports) { 'use strict';

  const BOOTSTRAP_ICONS = [
    '0-circle',
    '0-circle-fill',
    '123',
    'activity',
    'alarm',
    'alarm-fill',
    'align-bottom',
    'align-center',
    'align-end',
    'align-middle',
    'align-start',
    'align-top',
    'app',
    'app-indicator',
    'archive',
    'archive-fill',
    'arrow-90deg-down',
    'arrow-90deg-left',
    'arrow-90deg-right',
    'arrow-90deg-up',
    'arrow-bar-down',
    'arrow-bar-left',
    'arrow-bar-right',
    'arrow-bar-up',
    'arrow-clockwise',
    'arrow-counterclockwise',
    'arrow-down',
    'arrow-down-circle',
    'arrow-down-circle-fill',
    'arrow-down-left',
    'arrow-down-right',
    'arrow-down-short',
    'arrow-down-square',
    'arrow-down-square-fill',
    'arrow-left',
    'arrow-left-circle',
    'arrow-left-circle-fill',
    'arrow-left-right',
    'arrow-left-short',
    'arrow-left-square',
    'arrow-left-square-fill',
    'arrow-repeat',
    'arrow-return-left',
    'arrow-return-right',
    'arrow-right',
    'arrow-right-circle',
    'arrow-right-circle-fill',
    'arrow-right-short',
    'arrow-right-square',
    'arrow-right-square-fill',
    'arrow-up',
    'arrow-up-circle',
    'arrow-up-circle-fill',
    'arrow-up-left',
    'arrow-up-right',
    'arrow-up-short',
    'arrow-up-square',
    'arrow-up-square-fill',
    'asterisk',
    'at',
    'award',
    'award-fill',
    'back',
    'backspace',
    'backspace-fill',
    'bag',
    'bag-check',
    'bag-check-fill',
    'bag-dash',
    'bag-dash-fill',
    'bag-fill',
    'bag-heart',
    'bag-heart-fill',
    'bag-plus',
    'bag-plus-fill',
    'bag-x',
    'bag-x-fill',
    'balloon',
    'balloon-fill',
    'balloon-heart',
    'balloon-heart-fill',
    'bank',
    'bank2',
    'bar-chart',
    'bar-chart-fill',
    'bar-chart-line',
    'bar-chart-line-fill',
    'basket',
    'basket-fill',
    'bell',
    'bell-fill',
    'bell-slash',
    'bell-slash-fill',
    'bookmark',
    'bookmark-check',
    'bookmark-check-fill',
    'bookmark-dash',
    'bookmark-dash-fill',
    'bookmark-fill',
    'bookmark-heart',
    'bookmark-heart-fill',
    'bookmark-plus',
    'bookmark-plus-fill',
    'bookmark-star',
    'bookmark-star-fill',
    'bookmark-x',
    'bookmark-x-fill',
    'bookmarks',
    'bookmarks-fill',
    'bootstrap',
    'bootstrap-fill',
    'box',
    'box-arrow-down',
    'box-arrow-in-down',
    'box-arrow-in-left',
    'box-arrow-in-right',
    'box-arrow-in-up',
    'box-arrow-left',
    'box-arrow-right',
    'box-arrow-up',
    'briefcase',
    'briefcase-fill',
    'brightness-high',
    'brightness-high-fill',
    'brightness-low',
    'brightness-low-fill',
    'bug',
    'bug-fill',
    'building',
    'bullseye',
    'calculator',
    'calculator-fill',
    'calendar',
    'calendar-check',
    'calendar-check-fill',
    'calendar-date',
    'calendar-date-fill',
    'calendar-day',
    'calendar-day-fill',
    'calendar-event',
    'calendar-event-fill',
    'calendar-fill',
    'calendar-heart',
    'calendar-heart-fill',
    'calendar-minus',
    'calendar-minus-fill',
    'calendar-month',
    'calendar-month-fill',
    'calendar-plus',
    'calendar-plus-fill',
    'calendar-range',
    'calendar-range-fill',
    'calendar-week',
    'calendar-week-fill',
    'calendar-x',
    'calendar-x-fill',
    'camera',
    'camera-fill',
    'camera-video',
    'camera-video-fill',
    'camera-video-off',
    'camera-video-off-fill',
    'capslock',
    'capslock-fill',
    'card-checklist',
    'card-heading',
    'card-image',
    'card-list',
    'card-text',
    'cart',
    'cart-check',
    'cart-check-fill',
    'cart-dash',
    'cart-dash-fill',
    'cart-fill',
    'cart-plus',
    'cart-plus-fill',
    'cart-x',
    'cart-x-fill',
    'cash',
    'cash-coin',
    'cash-stack',
    'chat',
    'chat-dots',
    'chat-dots-fill',
    'chat-fill',
    'chat-heart',
    'chat-heart-fill',
    'chat-left',
    'chat-left-dots',
    'chat-left-dots-fill',
    'chat-left-fill',
    'chat-left-heart',
    'chat-left-heart-fill',
    'chat-left-quote',
    'chat-left-quote-fill',
    'chat-left-text',
    'chat-left-text-fill',
    'chat-quote',
    'chat-quote-fill',
    'chat-right',
    'chat-right-dots',
    'chat-right-dots-fill',
    'chat-right-fill',
    'chat-square',
    'chat-square-dots',
    'chat-square-dots-fill',
    'chat-square-fill',
    'chat-text',
    'chat-text-fill',
    'check',
    'check-all',
    'check-circle',
    'check-circle-fill',
    'check-lg',
    'check-square',
    'check-square-fill',
    'check2',
    'check2-all',
    'check2-circle',
    'check2-square',
    'chevron-bar-down',
    'chevron-bar-left',
    'chevron-bar-right',
    'chevron-bar-up',
    'chevron-compact-down',
    'chevron-compact-left',
    'chevron-compact-right',
    'chevron-compact-up',
    'chevron-double-down',
    'chevron-double-left',
    'chevron-double-right',
    'chevron-double-up',
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'circle',
    'circle-fill',
    'circle-half',
    'circle-square',
    'clipboard',
    'clipboard-check',
    'clipboard-check-fill',
    'clipboard-data',
    'clipboard-data-fill',
    'clipboard-fill',
    'clipboard-heart',
    'clipboard-heart-fill',
    'clipboard-minus',
    'clipboard-minus-fill',
    'clipboard-plus',
    'clipboard-plus-fill',
    'clipboard-x',
    'clipboard-x-fill',
    'clock',
    'clock-fill',
    'clock-history',
    'cloud',
    'cloud-arrow-down',
    'cloud-arrow-down-fill',
    'cloud-arrow-up',
    'cloud-arrow-up-fill',
    'cloud-check',
    'cloud-check-fill',
    'cloud-download',
    'cloud-download-fill',
    'cloud-fill',
    'cloud-upload',
    'cloud-upload-fill',
    'code',
    'code-slash',
    'code-square',
    'collection',
    'collection-fill',
    'collection-play',
    'collection-play-fill',
    'columns',
    'columns-gap',
    'compass',
    'compass-fill',
    'cpu',
    'cpu-fill',
    'credit-card',
    'credit-card-fill',
    'cup',
    'cup-fill',
    'cup-hot',
    'cup-hot-fill',
    'cup-straw',
    'cursor',
    'cursor-fill',
    'cursor-text',
    'dash',
    'dash-circle',
    'dash-circle-fill',
    'dash-lg',
    'dash-square',
    'dash-square-fill',
    'database',
    'database-add',
    'database-check',
    'database-dash',
    'database-fill',
    'diagram-2',
    'diagram-2-fill',
    'diagram-3',
    'diagram-3-fill',
    'diamond',
    'diamond-fill',
    'diamond-half',
    'dice-1',
    'dice-1-fill',
    'dice-2',
    'dice-2-fill',
    'dice-3',
    'dice-3-fill',
    'dice-4',
    'dice-4-fill',
    'dice-5',
    'dice-5-fill',
    'dice-6',
    'dice-6-fill',
    'disc',
    'disc-fill',
    'display',
    'display-fill',
    'door-closed',
    'door-closed-fill',
    'door-open',
    'door-open-fill',
    'download',
    'droplet',
    'droplet-fill',
    'droplet-half',
    'ear',
    'ear-fill',
    'earbuds',
    'egg',
    'egg-fill',
    'egg-fried',
    'eject',
    'eject-fill',
    'emoji-angry',
    'emoji-angry-fill',
    'emoji-dizzy',
    'emoji-dizzy-fill',
    'emoji-expressionless',
    'emoji-expressionless-fill',
    'emoji-frown',
    'emoji-frown-fill',
    'emoji-heart-eyes',
    'emoji-heart-eyes-fill',
    'emoji-kiss',
    'emoji-kiss-fill',
    'emoji-laughing',
    'emoji-laughing-fill',
    'emoji-neutral',
    'emoji-neutral-fill',
    'emoji-smile',
    'emoji-smile-fill',
    'emoji-sunglasses',
    'emoji-sunglasses-fill',
    'emoji-wink',
    'emoji-wink-fill',
    'envelope',
    'envelope-at',
    'envelope-at-fill',
    'envelope-check',
    'envelope-check-fill',
    'envelope-dash',
    'envelope-dash-fill',
    'envelope-fill',
    'envelope-heart',
    'envelope-heart-fill',
    'envelope-open',
    'envelope-open-fill',
    'envelope-plus',
    'envelope-plus-fill',
    'envelope-x',
    'envelope-x-fill',
    'eraser',
    'eraser-fill',
    'exclamation',
    'exclamation-circle',
    'exclamation-circle-fill',
    'exclamation-diamond',
    'exclamation-diamond-fill',
    'exclamation-lg',
    'exclamation-octagon',
    'exclamation-octagon-fill',
    'exclamation-square',
    'exclamation-square-fill',
    'exclamation-triangle',
    'exclamation-triangle-fill',
    'eye',
    'eye-fill',
    'eye-slash',
    'eye-slash-fill',
    'eyedropper',
    'eyeglasses',
    'file',
    'file-arrow-down',
    'file-arrow-down-fill',
    'file-arrow-up',
    'file-arrow-up-fill',
    'file-bar-graph',
    'file-bar-graph-fill',
    'file-binary',
    'file-binary-fill',
    'file-break',
    'file-break-fill',
    'file-check',
    'file-check-fill',
    'file-code',
    'file-code-fill',
    'file-diff',
    'file-diff-fill',
    'file-earmark',
    'file-earmark-arrow-down',
    'file-earmark-arrow-down-fill',
    'file-earmark-arrow-up',
    'file-earmark-arrow-up-fill',
    'file-earmark-bar-graph',
    'file-earmark-bar-graph-fill',
    'file-earmark-binary',
    'file-earmark-binary-fill',
    'file-earmark-check',
    'file-earmark-check-fill',
    'file-earmark-code',
    'file-earmark-code-fill',
    'file-earmark-diff',
    'file-earmark-diff-fill',
    'file-earmark-excel',
    'file-earmark-excel-fill',
    'file-earmark-fill',
    'file-earmark-font',
    'file-earmark-font-fill',
    'file-earmark-image',
    'file-earmark-image-fill',
    'file-earmark-medical',
    'file-earmark-medical-fill',
    'file-earmark-minus',
    'file-earmark-minus-fill',
    'file-earmark-music',
    'file-earmark-music-fill',
    'file-earmark-pdf',
    'file-earmark-pdf-fill',
    'file-earmark-person',
    'file-earmark-person-fill',
    'file-earmark-play',
    'file-earmark-play-fill',
    'file-earmark-plus',
    'file-earmark-plus-fill',
    'file-earmark-post',
    'file-earmark-post-fill',
    'file-earmark-ppt',
    'file-earmark-ppt-fill',
    'file-earmark-richtext',
    'file-earmark-richtext-fill',
    'file-earmark-slides',
    'file-earmark-slides-fill',
    'file-earmark-spreadsheet',
    'file-earmark-spreadsheet-fill',
    'file-earmark-text',
    'file-earmark-text-fill',
    'file-earmark-word',
    'file-earmark-word-fill',
    'file-earmark-x',
    'file-earmark-x-fill',
    'file-earmark-zip',
    'file-earmark-zip-fill',
    'file-excel',
    'file-excel-fill',
    'file-fill',
    'file-font',
    'file-font-fill',
    'file-image',
    'file-image-fill',
    'file-medical',
    'file-medical-fill',
    'file-minus',
    'file-minus-fill',
    'file-music',
    'file-music-fill',
    'file-pdf',
    'file-pdf-fill',
    'file-person',
    'file-person-fill',
    'file-play',
    'file-play-fill',
    'file-plus',
    'file-plus-fill',
    'file-post',
    'file-post-fill',
    'file-ppt',
    'file-ppt-fill',
    'file-richtext',
    'file-richtext-fill',
    'file-spreadsheet',
    'file-spreadsheet-fill',
    'file-text',
    'file-text-fill',
    'file-word',
    'file-word-fill',
    'file-x',
    'file-x-fill',
    'file-zip',
    'file-zip-fill',
    'files',
    'files-alt',
    'film',
    'filter',
    'filter-circle',
    'filter-circle-fill',
    'filter-left',
    'filter-right',
    'filter-square',
    'filter-square-fill',
    'fire',
    'flag',
    'flag-fill',
    'folder',
    'folder-check',
    'folder-fill',
    'folder-minus',
    'folder-plus',
    'folder-symlink',
    'folder-symlink-fill',
    'folder-x',
    'folder2',
    'folder2-open',
    'fonts',
    'forward',
    'forward-fill',
    'funnel',
    'funnel-fill',
    'gear',
    'gear-fill',
    'gear-wide',
    'gear-wide-connected',
    'gem',
    'geo',
    'geo-alt',
    'geo-alt-fill',
    'geo-fill',
    'gift',
    'gift-fill',
    'git',
    'github',
    'globe',
    'globe2',
    'google',
    'graph-down',
    'graph-down-arrow',
    'graph-up',
    'graph-up-arrow',
    'grid',
    'grid-1x2',
    'grid-1x2-fill',
    'grid-3x2',
    'grid-3x2-gap',
    'grid-3x2-gap-fill',
    'grid-3x3',
    'grid-3x3-gap',
    'grid-3x3-gap-fill',
    'grid-fill',
    'hammer',
    'hand-index',
    'hand-index-fill',
    'hand-index-thumb',
    'hand-index-thumb-fill',
    'hand-thumbs-down',
    'hand-thumbs-down-fill',
    'hand-thumbs-up',
    'hand-thumbs-up-fill',
    'handbag',
    'handbag-fill',
    'hash',
    'hdd',
    'hdd-fill',
    'hdd-network',
    'hdd-network-fill',
    'hdd-rack',
    'hdd-rack-fill',
    'hdd-stack',
    'hdd-stack-fill',
    'headphones',
    'headset',
    'headset-vr',
    'heart',
    'heart-arrow',
    'heart-fill',
    'heart-half',
    'heart-pulse',
    'heart-pulse-fill',
    'heartbreak',
    'heartbreak-fill',
    'hearts',
    'house',
    'house-door',
    'house-door-fill',
    'house-fill',
    'house-heart',
    'house-heart-fill',
    'image',
    'image-alt',
    'image-fill',
    'images',
    'inbox',
    'inbox-fill',
    'inboxes',
    'inboxes-fill',
    'info',
    'info-circle',
    'info-circle-fill',
    'info-lg',
    'info-square',
    'info-square-fill',
    'journal',
    'journal-album',
    'journal-arrow-down',
    'journal-arrow-up',
    'journal-bookmark',
    'journal-bookmark-fill',
    'journal-check',
    'journal-code',
    'journal-medical',
    'journal-minus',
    'journal-plus',
    'journal-richtext',
    'journal-text',
    'journal-x',
    'journals',
    'kanban',
    'kanban-fill',
    'key',
    'key-fill',
    'keyboard',
    'keyboard-fill',
    'laptop',
    'laptop-fill',
    'layers',
    'layers-fill',
    'layers-half',
    'layout-sidebar',
    'layout-sidebar-inset',
    'layout-sidebar-inset-reverse',
    'layout-sidebar-reverse',
    'layout-split',
    'layout-text-sidebar',
    'layout-text-sidebar-reverse',
    'layout-text-window',
    'layout-text-window-reverse',
    'layout-three-columns',
    'lightbulb',
    'lightbulb-fill',
    'lightbulb-off',
    'lightbulb-off-fill',
    'lightning',
    'lightning-charge',
    'lightning-charge-fill',
    'lightning-fill',
    'link',
    'link-45deg',
    'list',
    'list-check',
    'list-columns',
    'list-columns-reverse',
    'list-nested',
    'list-ol',
    'list-stars',
    'list-task',
    'list-ul',
    'lock',
    'lock-fill',
    'magnet',
    'magnet-fill',
    'mailbox',
    'mailbox2',
    'map',
    'map-fill',
    'megaphone',
    'megaphone-fill',
    'memory',
    'menu-app',
    'menu-app-fill',
    'menu-button',
    'menu-button-fill',
    'menu-button-wide',
    'menu-button-wide-fill',
    'menu-down',
    'menu-up',
    'mic',
    'mic-fill',
    'mic-mute',
    'mic-mute-fill',
    'moon',
    'moon-fill',
    'moon-stars',
    'moon-stars-fill',
    'mouse',
    'mouse-fill',
    'music-note',
    'music-note-beamed',
    'music-note-list',
    'music-player',
    'music-player-fill',
    'newspaper',
    'palette',
    'palette-fill',
    'palette2',
    'paperclip',
    'patch-check',
    'patch-check-fill',
    'patch-exclamation',
    'patch-exclamation-fill',
    'patch-minus',
    'patch-minus-fill',
    'patch-plus',
    'patch-plus-fill',
    'patch-question',
    'patch-question-fill',
    'pause',
    'pause-btn',
    'pause-btn-fill',
    'pause-circle',
    'pause-circle-fill',
    'pause-fill',
    'peace',
    'peace-fill',
    'pen',
    'pen-fill',
    'pencil',
    'pencil-fill',
    'pencil-square',
    'people',
    'people-fill',
    'percent',
    'person',
    'person-add',
    'person-badge',
    'person-badge-fill',
    'person-bounding-box',
    'person-check',
    'person-check-fill',
    'person-circle',
    'person-dash',
    'person-dash-fill',
    'person-fill',
    'person-heart',
    'person-hearts',
    'person-lines-fill',
    'person-plus',
    'person-plus-fill',
    'person-square',
    'person-vcard',
    'person-vcard-fill',
    'person-video',
    'person-video2',
    'person-video3',
    'person-workspace',
    'person-x',
    'person-x-fill',
    'phone',
    'phone-fill',
    'phone-flip',
    'phone-landscape',
    'phone-landscape-fill',
    'phone-vibrate',
    'phone-vibrate-fill',
    'pie-chart',
    'pie-chart-fill',
    'piggy-bank',
    'piggy-bank-fill',
    'pin',
    'pin-angle',
    'pin-angle-fill',
    'pin-fill',
    'pin-map',
    'pin-map-fill',
    'play',
    'play-btn',
    'play-btn-fill',
    'play-circle',
    'play-circle-fill',
    'play-fill',
    'plug',
    'plug-fill',
    'plus',
    'plus-circle',
    'plus-circle-fill',
    'plus-lg',
    'plus-square',
    'plus-square-fill',
    'power',
    'printer',
    'printer-fill',
    'puzzle',
    'puzzle-fill',
    'qr-code',
    'qr-code-scan',
    'question',
    'question-circle',
    'question-circle-fill',
    'question-diamond',
    'question-diamond-fill',
    'question-lg',
    'question-octagon',
    'question-octagon-fill',
    'question-square',
    'question-square-fill',
    'quote',
    'receipt',
    'reception-0',
    'reception-1',
    'reception-2',
    'reception-3',
    'reception-4',
    'record',
    'record-btn',
    'record-btn-fill',
    'record-circle',
    'record-circle-fill',
    'record-fill',
    'record2',
    'record2-fill',
    'recycle',
    'reply',
    'reply-all',
    'reply-all-fill',
    'reply-fill',
    'rewind',
    'rewind-btn',
    'rewind-btn-fill',
    'rewind-circle',
    'rewind-circle-fill',
    'rewind-fill',
    'rocket',
    'rocket-fill',
    'rocket-takeoff',
    'rocket-takeoff-fill',
    'router',
    'router-fill',
    'rss',
    'rss-fill',
    'save',
    'save-fill',
    'save2',
    'save2-fill',
    'scissors',
    'search',
    'search-heart',
    'search-heart-fill',
    'send',
    'send-check',
    'send-check-fill',
    'send-dash',
    'send-dash-fill',
    'send-fill',
    'send-plus',
    'send-plus-fill',
    'send-x',
    'send-x-fill',
    'server',
    'share',
    'share-fill',
    'shield',
    'shield-check',
    'shield-fill',
    'shield-fill-check',
    'shield-fill-exclamation',
    'shield-fill-minus',
    'shield-fill-plus',
    'shield-fill-x',
    'shield-lock',
    'shield-lock-fill',
    'shield-minus',
    'shield-plus',
    'shield-shaded',
    'shield-slash',
    'shield-slash-fill',
    'shield-x',
    'shop',
    'shop-window',
    'shuffle',
    'sign-stop',
    'sign-stop-fill',
    'skip-backward',
    'skip-backward-btn',
    'skip-backward-btn-fill',
    'skip-backward-circle',
    'skip-backward-circle-fill',
    'skip-backward-fill',
    'skip-end',
    'skip-end-btn',
    'skip-end-btn-fill',
    'skip-end-circle',
    'skip-end-circle-fill',
    'skip-end-fill',
    'skip-forward',
    'skip-forward-btn',
    'skip-forward-btn-fill',
    'skip-forward-circle',
    'skip-forward-circle-fill',
    'skip-forward-fill',
    'skip-start',
    'skip-start-btn',
    'skip-start-btn-fill',
    'skip-start-circle',
    'skip-start-circle-fill',
    'skip-start-fill',
    'slash',
    'slash-circle',
    'slash-circle-fill',
    'slash-lg',
    'slash-square',
    'slash-square-fill',
    'sliders',
    'sliders2',
    'sliders2-vertical',
    'sort-alpha-down',
    'sort-alpha-down-alt',
    'sort-alpha-up',
    'sort-alpha-up-alt',
    'sort-down',
    'sort-down-alt',
    'sort-numeric-down',
    'sort-numeric-down-alt',
    'sort-numeric-up',
    'sort-numeric-up-alt',
    'sort-up',
    'sort-up-alt',
    'speedometer',
    'speedometer2',
    'star',
    'star-fill',
    'star-half',
    'stars',
    'stickies',
    'stickies-fill',
    'sticky',
    'sticky-fill',
    'stop',
    'stop-btn',
    'stop-btn-fill',
    'stop-circle',
    'stop-circle-fill',
    'stop-fill',
    'stopwatch',
    'stopwatch-fill',
    'sun',
    'sun-fill',
    'sunglasses',
    'sunrise',
    'sunrise-fill',
    'sunset',
    'sunset-fill',
    'tablet',
    'tablet-fill',
    'tablet-landscape',
    'tablet-landscape-fill',
    'tag',
    'tag-fill',
    'tags',
    'tags-fill',
    'telephone',
    'telephone-fill',
    'telephone-forward',
    'telephone-forward-fill',
    'telephone-inbound',
    'telephone-inbound-fill',
    'telephone-minus',
    'telephone-minus-fill',
    'telephone-outbound',
    'telephone-outbound-fill',
    'telephone-plus',
    'telephone-plus-fill',
    'telephone-x',
    'telephone-x-fill',
    'terminal',
    'terminal-fill',
    'text-center',
    'text-indent-left',
    'text-indent-right',
    'text-left',
    'text-paragraph',
    'text-right',
    'thermometer',
    'thermometer-half',
    'thermometer-high',
    'thermometer-low',
    'three-dots',
    'three-dots-vertical',
    'toggle-off',
    'toggle-on',
    'toggle2-off',
    'toggle2-on',
    'toggles',
    'toggles2',
    'tools',
    'trash',
    'trash-fill',
    'trash2',
    'trash2-fill',
    'trash3',
    'trash3-fill',
    'tree',
    'tree-fill',
    'trophy',
    'trophy-fill',
    'truck',
    'truck-flatbed',
    'tv',
    'tv-fill',
    'type',
    'type-bold',
    'type-h1',
    'type-h2',
    'type-h3',
    'type-italic',
    'type-strikethrough',
    'type-underline',
    'umbrella',
    'umbrella-fill',
    'upload',
    'usb',
    'usb-fill',
    'wallet',
    'wallet-fill',
    'wallet2',
    'watch',
    'water',
    'wifi',
    'wifi-1',
    'wifi-2',
    'wifi-off',
    'window',
    'wrench',
    'wrench-adjustable',
    'wrench-adjustable-circle',
    'wrench-adjustable-circle-fill',
    'x',
    'x-circle',
    'x-circle-fill',
    'x-diamond',
    'x-diamond-fill',
    'x-lg',
    'x-octagon',
    'x-octagon-fill',
    'x-square',
    'x-square-fill',
    'zoom-in',
    'zoom-out'
  ];

  const MATERIAL_SYMBOLS = [
    'home',
    'dashboard',
    'menu',
    'apps',
    'arrow_back',
    'arrow_forward',
    'arrow_upward',
    'arrow_downward',
    'chevron_left',
    'chevron_right',
    'expand_more',
    'expand_less',
    'close',
    'add',
    'remove',
    'edit',
    'delete',
    'save',
    'cancel',
    'check',
    'done',
    'clear',
    'refresh',
    'sync',
    'search',
    'filter_list',
    'sort',
    'settings',
    'more_vert',
    'more_horiz',
    'account_circle',
    'person',
    'person_add',
    'person_remove',
    'group',
    'group_add',
    'group_remove',
    'check_circle',
    'error',
    'warning',
    'info',
    'help',
    'help_outline',
    'priority_high',
    'verified',
    'security',
    'lock',
    'lock_open',
    'visibility',
    'visibility_off',
    'schedule',
    'access_time',
    'alarm',
    'alarm_add',
    'alarm_off',
    'timer',
    'chat',
    'chat_bubble',
    'chat_bubble_outline',
    'message',
    'sms',
    'phone',
    'call',
    'call_end',
    'mail',
    'email',
    'inbox',
    'drafts',
    'send',
    'archive',
    'unarchive',
    'flag',
    'star',
    'star_border',
    'star_half',
    'favorite',
    'favorite_border',
    'bookmark',
    'bookmark_border',
    'thumb_up',
    'thumb_down',
    'share',
    'reply',
    'forward',
    'print',
    'download',
    'upload',
    'cloud_upload',
    'cloud_download',
    'cloud_done',
    'cloud_off',
    'attach_file',
    'link',
    'link_off',
    'content_copy',
    'content_cut',
    'content_paste',
    'text_fields',
    'title',
    'format_bold',
    'format_italic',
    'format_underlined',
    'format_strikethrough',
    'format_size',
    'format_align_left',
    'format_align_center',
    'format_align_right',
    'format_align_justify',
    'format_list_bulleted',
    'format_list_numbered',
    'format_indent_increase',
    'format_indent_decrease',
    'folder',
    'folder_open',
    'folder_shared',
    'insert_drive_file',
    'description',
    'article',
    'note',
    'note_add',
    'image',
    'photo',
    'photo_camera',
    'photo_library',
    'camera_alt',
    'collections',
    'filter',
    'music_note',
    'audiotrack',
    'videocam',
    'videocam_off',
    'movie',
    'play_arrow',
    'pause',
    'stop',
    'skip_next',
    'skip_previous',
    'fast_forward',
    'fast_rewind',
    'volume_up',
    'volume_down',
    'volume_off',
    'volume_mute',
    'mic',
    'mic_off',
    'shopping_cart',
    'shopping_basket',
    'add_shopping_cart',
    'store',
    'storefront',
    'local_mall',
    'payment',
    'credit_card',
    'account_balance',
    'account_balance_wallet',
    'attach_money',
    'monetization_on',
    'trending_up',
    'trending_down',
    'trending_flat',
    'show_chart',
    'bar_chart',
    'pie_chart',
    'timeline',
    'analytics',
    'assessment',
    'place',
    'location_on',
    'location_off',
    'my_location',
    'navigation',
    'directions',
    'map',
    'near_me',
    'explore',
    'public',
    'language',
    'travel_explore',
    'computer',
    'laptop',
    'phone_android',
    'phone_iphone',
    'tablet',
    'watch',
    'tv',
    'headphones',
    'headset',
    'keyboard',
    'mouse',
    'router',
    'wifi',
    'wifi_off',
    'bluetooth',
    'bluetooth_connected',
    'bluetooth_disabled',
    'battery_full',
    'battery_charging_full',
    'battery_alert',
    'signal_cellular_4_bar',
    'signal_wifi_4_bar',
    'brightness_high',
    'brightness_low',
    'brightness_auto',
    'dark_mode',
    'light_mode',
    'contrast',
    'palette',
    'color_lens',
    'gradient',
    'opacity',
    'blur_on',
    'blur_off',
    'restaurant',
    'restaurant_menu',
    'local_cafe',
    'local_bar',
    'local_pizza',
    'cake',
    'local_dining',
    'fitness_center',
    'pool',
    'spa',
    'beach_access',
    'flight',
    'hotel',
    'local_hotel',
    'business',
    'work',
    'work_outline',
    'work_off',
    'school',
    'apartment',
    'domain',
    'factory',
    'warehouse',
    'construction',
    'build',
    'handyman',
    'plumbing',
    'electrical_services',
    'sports_esports',
    'sports_soccer',
    'sports_basketball',
    'sports_football',
    'sports_tennis',
    'event',
    'event_available',
    'event_busy',
    'event_note',
    'today',
    'calendar_today',
    'calendar_month',
    'date_range',
    'medical_services',
    'medication',
    'vaccines',
    'local_hospital',
    'emergency',
    'health_and_safety',
    'science',
    'biotech',
    'eco',
    'nature',
    'nature_people',
    'park',
    'pets',
    'bug_report',
    'code',
    'developer_mode',
    'integration_instructions',
    'api',
    'webhook',
    'terminal',
    'data_object',
    'database',
    'storage',
    'folder_zip',
    'inventory',
    'category',
    'label',
    'sell',
    'new_releases',
    'loyalty',
    'redeem',
    'card_giftcard',
    'volunteer_activism',
    'psychology',
    'emoji_objects',
    'lightbulb',
    'auto_awesome',
    'celebration',
    'military_tech',
    'workspace_premium'
  ];

  const DEFAULT_FAMILY_ORDER = ['bootstrap', 'material'];

  const ICON_FAMILIES = {
    bootstrap: {
      name: 'Bootstrap Icons',
      icons: BOOTSTRAP_ICONS,
      previewClass: (icon) => `<i class="bi bi-${icon}"></i>`
    },
    material: {
      name: 'Material Symbols Rounded',
      icons: MATERIAL_SYMBOLS,
      previewClass: (icon) => `<i class="material-symbols-rounded">${icon}</i>`
    }
  };

  function resolveFamilies(familiesInput) {
    if (!familiesInput) {
      return DEFAULT_FAMILY_ORDER;
    }

    if (Array.isArray(familiesInput)) {
      return familiesInput.filter((family) => ICON_FAMILIES[family]);
    }

    return String(familiesInput)
      .split(',')
      .map((family) => family.trim().toLowerCase())
      .filter((family) => ICON_FAMILIES[family]);
  }

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

  class HuiIconPicker extends HTMLElement {
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

  exports.HuiIconPicker = HuiIconPicker;
  exports.default = HuiIconPicker;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=hui-icon-picker.js.map
