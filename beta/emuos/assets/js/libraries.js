// noinspection ThisExpressionReferencesGlobalObjectJS
(function(global) {
	if (typeof global['$sys'] === 'undefined') {
		global['$sys'] = {};
	}

	var location = ~window.location.hostname.indexOf('emupedia.net') ? 'emupedia.net' : (~window.location.hostname.indexOf('emupedia.org') ? 'emupedia.org' : (~window.location.hostname.indexOf('emuos.net') ? 'emuos.net' : (~window.location.hostname.indexOf('emuos.org') ? 'emuos.org' : 'emupedia.net')))

	// region Libraries

	global['$sys']['lib'] = {
		'babel-polyfill': [
			'libraries/babel-polyfill-7.12.1.min',
			'/beta/emuos/assets/js/libraries/babel-polyfill-7.12.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/babel-polyfill-7.12.1.min'
		],
		'babel-standalone': [
			'libraries/babel-standalone-7.15.7.min',
			'/beta/emuos/assets/js/libraries/babel-standalone-7.15.7.min',
			'//' + location + '/beta/emuos/assets/js/libraries/babel-standalone-7.15.7.min'
		],
		'bootstrap': [
			'libraries/bootstrap-5.1.1.min',
			'/beta/emuos/assets/js/libraries/bootstrap-5.1.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/bootstrap-5.1.1.min'
		],
		'browserfs': [
			'libraries/browserfs-1.4.3.min',
			'/beta/emuos/assets/js/libraries/browserfs-1.4.3.min',
			'//' + location + '/beta/emuos/assets/js/libraries/browserfs-1.4.3.min'
		],
		'bson': [
			'libraries/bson-4.5.2',
			'/beta/emuos/assets/js/libraries/bson-4.5.2',
			'//' + location + '/beta/emuos/assets/js/libraries/bson-4.5.2'
		],
		'buzz': [
			'libraries/buzz-1.2.1.min',
			'/beta/emuos/assets/js/libraries/buzz-1.2.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/buzz-1.2.1.min'
		],
		'clippy': [
			'libraries/clippy-0.0.3',
			'/beta/emuos/assets/js/libraries/clippy-0.0.3',
			'//' + location + '/beta/emuos/assets/js/libraries/clippy-0.0.3'
		],
		'custom-elements': [
			'libraries/custom-elements-1.5.0.min',
			'/beta/emuos/assets/js/libraries/custom-elements-1.5.0.min',
			'//' + location + '/beta/emuos/assets/js/libraries/custom-elements-1.5.0.min'
		],
		'custom-event': [
			'libraries/custom-event-1.0.7',
			'/beta/emuos/assets/js/libraries/custom-event-1.0.7',
			'//' + location + '/beta/emuos/assets/js/libraries/custom-event-1.0.7'
		],
		'datatables': [
			'libraries/datatables-1.11.3.min',
			'/beta/emuos/assets/js/libraries/datatables-1.11.3.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-1.11.3.min'
		],
		'datatables-bootstrap5': [
			'libraries/datatables-bootstrap5-1.11.3.min',
			'/beta/emuos/assets/js/libraries/datatables-bootstrap5-1.11.3.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-bootstrap5-1.11.3.min'
		],
		'datatables-buttons': [
			'libraries/datatables-buttons-2.0.1.min',
			'/beta/emuos/assets/js/libraries/datatables-buttons-2.0.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-buttons-2.0.1.min'
		],
		'datatables-buttons-bootstrap5': [
			'libraries/datatables-buttons-bootstrap5-2.0.1.min',
			'/beta/emuos/assets/js/libraries/datatables-buttons-bootstrap5-2.0.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-buttons-bootstrap5-2.0.1.min'
		],
		'datatables-buttons-colvis': [
			'libraries/datatables-buttons-colvis-2.0.1.min',
			'/beta/emuos/assets/js/libraries/datatables-buttons-colvis-2.0.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-buttons-colvis-2.0.1.min'
		],
		'datatables-buttons-flash': [
			'libraries/datatables-buttons-flash-2.0.1.min',
			'/beta/emuos/assets/js/libraries/datatables-buttons-flash-2.0.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-buttons-flash-2.0.1.min'
		],
		'datatables-buttons-html5': [
			'libraries/datatables-buttons-html5-2.0.1.min',
			'/beta/emuos/assets/js/libraries/datatables-buttons-html5-2.0.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-buttons-html5-2.0.1.min'
		],
		'datatables-buttons-print': [
			'libraries/datatables-buttons-print-2.0.1.min',
			'/beta/emuos/assets/js/libraries/datatables-buttons-print-2.0.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-buttons-print-2.0.1.min'
		],
		'datatables-colreorder': [
			'libraries/datatables-colreorder-1.5.4.min',
			'/beta/emuos/assets/js/libraries/datatables-colreorder-1.5.4.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-colreorder-1.5.4.min'
		],
		'datatables-colreorder-bootstrap5': [
			'libraries/datatables-colreorder-bootstrap5-1.5.4.min',
			'/beta/emuos/assets/js/libraries/datatables-colreorder-bootstrap5-1.5.4.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-colreorder-bootstrap5-1.5.4.min'
		],
		'datatables-editor': [
			'libraries/datatables-editor-2.0.0.min',
			'/beta/emuos/assets/js/libraries/datatables-editor-2.0.0.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-editor-2.0.0.min'
		],
		'datatables-ellipsis': [
			'libraries/datatables-ellipsis-1.10.24',
			'/beta/emuos/assets/js/libraries/datatables-ellipsis-1.10.24',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-ellipsis-1.10.24'
		],
		'datatables-fixedcolumns': [
			'libraries/datatables-fixedcolumns-4.0.0.min',
			'/beta/emuos/assets/js/libraries/datatables-fixedcolumns-4.0.0.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-fixedcolumns-4.0.0.min'
		],
		'datatables-fixedcolumns-bootstrap5': [
			'libraries/datatables-fixedcolumns-bootstrap5-4.0.0.min',
			'/beta/emuos/assets/js/libraries/datatables-fixedcolumns-bootstrap5-4.0.0.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-fixedcolumns-bootstrap5-4.0.0.min'
		],
		'datatables-fixedheader': [
			'libraries/datatables-fixedheader-3.2.0.min',
			'/beta/emuos/assets/js/libraries/datatables-fixedheader-3.2.0.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-fixedheader-3.2.0.min'
		],
		'datatables-fixedheader-bootstrap5': [
			'libraries/datatables-fixedheader-bootstrap5-3.2.0.min',
			'/beta/emuos/assets/js/libraries/datatables-fixedheader-bootstrap5-3.2.0.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-fixedheader-bootstrap5-3.2.0.min'
		],
		'datatables-responsive': [
			'libraries/datatables-responsive-2.2.9.min',
			'/beta/emuos/assets/js/libraries/datatables-responsive-2.2.9.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-responsive-2.2.9.min'
		],
		'datatables-responsive-bootstrap5': [
			'libraries/datatables-responsive-bootstrap5-2.2.9.min',
			'/beta/emuos/assets/js/libraries/datatables-responsive-bootstrap5-2.2.9.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-responsive-bootstrap5-2.2.9.min'
		],
		'datatables-select': [
			'libraries/datatables-select-1.3.3.min',
			'/beta/emuos/assets/js/libraries/datatables-select-1.3.3.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-select-1.3.3.min'
		],
		'datatables-select-bootstrap5': [
			'libraries/datatables-select-bootstrap5-1.3.3.min',
			'/beta/emuos/assets/js/libraries/datatables-select-bootstrap5-1.3.3.min',
			'//' + location + '/beta/emuos/assets/js/libraries/datatables-select-bootstrap5-1.3.3.min'
		],
		'dropbox': [
			'libraries/dropbox-10.11.0.min',
			'/beta/emuos/assets/js/libraries/dropbox-10.11.0.min',
			'//' + location + '/beta/emuos/assets/js/libraries/dropbox-10.11.0.min'
		],
		'emularity': [
			'libraries/emularity',
			'/beta/emuos/assets/js/libraries/emularity',
			'//' + location + '/beta/emuos/assets/js/libraries/emularity'
		],
		'esheep': [
			'libraries/esheep-0.9.2.min',
			'/beta/emuos/assets/js/libraries/esheep-0.9.2.min',
			'//' + location + '/beta/emuos/assets/js/libraries/esheep-0.9.2.min'
		],
		'fetch': [
			'libraries/fetch-3.6.2',
			'/beta/emuos/assets/js/libraries/fetch-3.6.2',
			'//' + location + '/beta/emuos/assets/js/libraries/fetch-3.6.2'
		],
		'fingerprint': [
			'libraries/fingerprint-3.3.3',
			'/beta/emuos/assets/js/libraries/fingerprint-3.3.3',
			'//' + location + '/beta/emuos/assets/js/libraries/fingerprint-3.3.3'
		],
		'firebug-lite': [
			'libraries/firebug-lite-1.5.3',
			'/beta/emuos/assets/js/libraries/firebug-lite-1.5.3',
			'//' + location + '/beta/emuos/assets/js/libraries/firebug-lite-1.5.3'
		],
		'hjson': [
			'libraries/hjson-3.2.2.min',
			'/beta/emuos/assets/js/libraries/hjson-3.2.2.min',
			'//' + location + '/beta/emuos/assets/js/libraries/hjson-3.2.2.min'
		],
		'howler': [
			'libraries/howler-2.2.3.min',
			'/beta/emuos/assets/js/libraries/howler-2.2.3.min',
			'//' + location + '/beta/emuos/assets/js/libraries/howler-2.2.3.min'
		],
		'howler-core': [
			'libraries/howler-core-2.2.3.min',
			'/beta/emuos/assets/js/libraries/howler-core-2.2.3.min',
			'//' + location + '/beta/emuos/assets/js/libraries/howler-core-2.2.3.min'
		],
		'howler-spatial': [
			'libraries/howler-spatial-2.2.3.min',
			'/beta/emuos/assets/js/libraries/howler-spatial-2.2.3.min',
			'//' + location + '/beta/emuos/assets/js/libraries/howler-spatial-2.2.3.min'
		],
		'html-imports': [
			'libraries/html-imports-1.3.0.min',
			'/beta/emuos/assets/js/libraries/html-imports-1.3.0.min',
			'//' + location + '/beta/emuos/assets/js/libraries/html-imports-1.3.0.min'
		],
		'hybrids': [
			'libraries/hybrids-4.3.4.min',
			'/beta/emuos/assets/js/libraries/hybrids-4.3.4.min',
			'//' + location + '/beta/emuos/assets/js/libraries/hybrids-4.3.4.min'
		],
		'i18next': [
			'libraries/i18next-21.2.0.min',
			'/beta/emuos/assets/js/libraries/i18next-21.2.0.min',
			'//' + location + '/beta/emuos/assets/js/libraries/i18next-21.2.0.min'
		],
		'ie11-custom-properties': [
			'libraries/css-vars-4.1.0',
			'/beta/emuos/assets/js/libraries/css-vars-4.1.0',
			'//' + location + '/beta/emuos/assets/js/libraries/css-vars-4.1.0'
		],
		'jquery': [
			'libraries/jquery-3.6.0.min',
			'/beta/emuos/assets/js/libraries/jquery-3.6.0.min',
			'//' + location + '/beta/emuos/assets/js/libraries/jquery-3.6.0.min'
		],
		'jquery-ajax-retry': [
			'libraries/jquery-ajax-retry-0.2.8.min',
			'/beta/emuos/assets/js/libraries/jquery-ajax-retry-0.2.8.min',
			'//' + location + '/beta/emuos/assets/js/libraries/jquery-ajax-retry-0.2.8.min'
		],
		'jquery-custom-scrollbar': [
			'libraries/jquery-customscrollbar-3.1.5.min',
			'/beta/emuos/assets/js/libraries/jquery-customscrollbar-3.1.5.min',
			'//' + location + '/beta/emuos/assets/js/libraries/jquery-customscrollbar-3.1.5.min'
		],
		'jquery-i18next': [
			'libraries/jquery-i18next-1.2.1.min',
			'/beta/emuos/assets/js/libraries/jquery-i18next-1.2.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/jquery-i18next-1.2.1.min'
		],
		'jquery-migrate': [
			'libraries/jquery-migrate-3.3.2.min',
			'/beta/emuos/assets/js/libraries/jquery-migrate-3.3.2.min',
			'//' + location + '/beta/emuos/assets/js/libraries/jquery-migrate-3.3.2.min'
		],
		'jquery-mousewheel': [
			'libraries/jquery-mousewheel-3.1.13',
			'/beta/emuos/assets/js/libraries/jquery-mousewheel-3.1.13',
			'//' + location + '/beta/emuos/assets/js/libraries/jquery-mousewheel-3.1.13'
		],
		'jquery-resizable': [
			'libraries/jquery-resizable-0.35.0.min',
			'/beta/emuos/assets/js/libraries/jquery-resizable-0.35.0.min',
			'//' + location + '/beta/emuos/assets/js/libraries/jquery-resizable-0.35.0.min'
		],
		'jquery-ui': [
			'libraries/jquery-ui-1.12.1.min',
			'/beta/emuos/assets/js/libraries/jquery-ui-1.12.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/jquery-ui-1.12.1.min'
		],
		'jquery-ui-contextmenu': [
			'libraries/jquery-ui-contextmenu-1.18.1.min',
			'/beta/emuos/assets/js/libraries/jquery-ui-contextmenu-1.18.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/jquery-ui-contextmenu-1.18.1.min'
		],
		'js-dos': [
			'libraries/js-dos-6.22.60.min',
			'/beta/emuos/assets/js/libraries/js-dos-6.22.60.min',
			'//' + location + '/beta/emuos/assets/js/libraries/js-dos-6.22.60.min'
		],
		'jsonpath': [
			'libraries/jsonpath-1.1.1.min',
			'/beta/emuos/assets/js/libraries/jsonpath-1.1.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/jsonpath-1.1.1.min'
		],
		'jsrsasign-all': [
			'libraries/jsrsasign-all-10.4.1.min',
			'/beta/emuos/assets/js/libraries/jsrsasign-all-10.4.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/jsrsasign-all-10.4.1.min'
		],
		'jszip': [
			'libraries/jszip-3.7.1.min',
			'/beta/emuos/assets/js/libraries/jszip-3.7.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/jszip-3.7.1.min'
		],
		'less': [
			'libraries/less-4.1.1.min',
			'/beta/emuos/assets/js/libraries/less-4.1.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/less-4.1.1.min'
		],
		'lightslider': [
			'libraries/lightslider-1.1.6.min',
			'/beta/emuos/assets/js/libraries/lightslider-1.1.6.min',
			'//' + location + '/beta/emuos/assets/js/libraries/lightslider-1.1.6.min'
		],
		'localforage': [
			'libraries/localforage-1.10.0.min',
			'/beta/emuos/assets/js/libraries/localforage-1.10.0.min',
			'//' + location + '/beta/emuos/assets/js/libraries/localforage-1.10.0.min'
		],
		'localforage-nopromise': [
			'libraries/localforage-nopromise-1.10.0.min',
			'/beta/emuos/assets/js/libraries/localforage-nopromise-1.10.0.min',
			'//' + location + '/beta/emuos/assets/js/libraries/localforage-nopromise-1.10.0.min'
		],
		'moment': [
			'libraries/moment-2.29.1.min',
			'/beta/emuos/assets/js/libraries/moment-2.29.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/moment-2.29.1.min'
		],
		'moment-holiday': [
			'libraries/moment-holiday-1.5.1.min',
			'/beta/emuos/assets/js/libraries/moment-holiday-1.5.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/moment-holiday-1.5.1.min'
		],
		'moment-timezone': [
			'libraries/moment-timezone-0.5.33.min',
			'/beta/emuos/assets/js/libraries/moment-timezone-0.5.33.min',
			'//' + location + '/beta/emuos/assets/js/libraries/moment-timezone-0.5.33.min'
		],
		'nosleep.js': [
			'libraries/nosleep-0.12.0.min',
			'/beta/emuos/assets/js/libraries/nosleep-0.12.0.min',
			'//' + location + '/beta/emuos/assets/js/libraries/nosleep-0.12.0.min'
		],
		'octokat': [
			'libraries/octokat-0.10.0',
			'/beta/emuos/assets/js/libraries/octokat-0.10.0',
			'//' + location + '/beta/emuos/assets/js/libraries/octokat-0.10.0'
		],
		'pdfmake': [
			'libraries/pdfmake-0.2.2.min',
			'/beta/emuos/assets/js/libraries/pdfmake-0.2.2.min',
			'//' + location + '/beta/emuos/assets/js/libraries/pdfmake-0.2.2.min'
		],
		'pdfmake-fonts': [
			'libraries/pdfmake-fonts-0.2.2',
			'/beta/emuos/assets/js/libraries/pdfmake-fonts-0.2.2',
			'//' + location + '/beta/emuos/assets/js/libraries/pdfmake-fonts-0.2.2'
		],
		'perfect-scrollbar': [
			'libraries/perfect-scrollbar-1.5.2.min',
			'/beta/emuos/assets/js/libraries/perfect-scrollbar-1.5.2.min',
			'//' + location + '/beta/emuos/assets/js/libraries/perfect-scrollbar-1.5.2.min'
		],
		'phaser': [
			'libraries/phaser-3.55.2.min',
			'/beta/emuos/assets/js/libraries/phaser-3.55.2.min',
			'//' + location + '/beta/emuos/assets/js/libraries/phaser-3.55.2.min'
		],
		'phaser-arcade-physics': [
			'libraries/phaser-arcade-physics-3.55.2.min',
			'/beta/emuos/assets/js/libraries/phaser-arcade-physics-3.55.2.min',
			'//' + location + '/beta/emuos/assets/js/libraries/phaser-arcade-physics-3.55.2.min'
		],
		'popper': [
			'libraries/popper-2.10.2.min',
			'/beta/emuos/assets/js/libraries/popper-2.10.2.min',
			'//' + location + '/beta/emuos/assets/js/libraries/popper-2.10.2.min'
		],
		'promise': [
			'libraries/promise-4.2.8.min',
			'/beta/emuos/assets/js/libraries/promise-4.2.8.min',
			'//' + location + '/beta/emuos/assets/js/libraries/promise-4.2.8.min'
		],
		'promise-auto': [
			'libraries/promise-auto-4.2.8.min',
			'/beta/emuos/assets/js/libraries/promise-auto-4.2.8.min',
			'//' + location + '/beta/emuos/assets/js/libraries/promise-auto-4.2.8.min'
		],
		'purl': [
			'libraries/purl-2.3.1',
			'/beta/emuos/assets/js/libraries/purl-2.3.1',
			'//' + location + '/beta/emuos/assets/js/libraries/purl-2.3.1'
		],
		'requirejs': [
			'libraries/requirejs-2.3.6',
			'/beta/emuos/assets/js/libraries/requirejs-2.3.6',
			'//' + location + '/beta/emuos/assets/js/libraries/requirejs-2.3.6'
		],
		'requirejs-json': [
			'libraries/requirejs-json-1.0.3',
			'/beta/emuos/assets/js/libraries/requirejs-json-1.0.3',
			'//' + location + '/beta/emuos/assets/js/libraries/requirejs-json-1.0.3'
		],
		'requirejs-noext': [
			'libraries/requirejs-noext-1.0.3',
			'/beta/emuos/assets/js/libraries/requirejs-noext-1.0.3',
			'//' + location + '/beta/emuos/assets/js/libraries/requirejs-noext-1.0.3'
		],
		'requirejs-text': [
			'libraries/requirejs-text-2.0.16',
			'/beta/emuos/assets/js/libraries/requirejs-text-2.0.16',
			'//' + location + '/beta/emuos/assets/js/libraries/requirejs-text-2.0.16'
		],
		'seedrandom': [
			'libraries/seedrandom-3.0.5.min',
			'/beta/emuos/assets/js/libraries/seedrandom-3.0.5.min',
			'//' + location + '/beta/emuos/assets/js/libraries/seedrandom-3.0.5.min'
		],
		'select2': [
			'libraries/select2-4.0.13.min',
			'/beta/emuos/assets/js/libraries/select2-4.0.13.min',
			'//' + location + '/beta/emuos/assets/js/libraries/select2-4.0.13.min'
		],
		'simplestorage': [
			'libraries/simplestorage-0.2.1.min',
			'/beta/emuos/assets/js/libraries/simplestorage-0.2.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/simplestorage-0.2.1.min'
		],
		'twemoji': [
			'libraries/twemoji-13.1.0.min',
			'/beta/emuos/assets/js/libraries/twemoji-13.1.0.min',
			'//' + location + '/beta/emuos/assets/js/libraries/twemoji-13.1.0.min'
		],
		'webcomponents': [
			'libraries/webcomponents-2.6.0.min',
			'/beta/emuos/assets/js/libraries/webcomponents-2.6.0.min',
			'//' + location + '/beta/emuos/assets/js/libraries/webcomponents-2.6.0.min'
		],
		'xterm': [
			'libraries/xterm-4.14.1.min',
			'/beta/emuos/assets/js/libraries/xterm-4.14.1.min',
			'//' + location + '/beta/emuos/assets/js/libraries/xterm-4.14.1.min'
		],
		'desktop': [
			'desktop',
			'/beta/emuos/assets/js/desktop',
			'//' + location + '/beta/emuos/assets/js/desktop'
		],
		'emoticons': [
			'emoticons',
			'/beta/emuos/assets/js/emoticons',
			'//' + location + '/beta/emuos/assets/js/emoticons'
		],
		'emuos': [
			'emuos',
			'/beta/emuos/assets/js/emuos',
			'//' + location + '/beta/emuos/assets/js/emuos'
		],
		'router': [
			'router',
			'/beta/emuos/assets/js/router',
			'//' + location + '/beta/emuos/assets/js/router'
		],
		'filesystem': [
			'filesystem',
			'/beta/emuos/assets/js/filesystem',
			'//' + location + '/beta/emuos/assets/js/filesystem'
		],
		'lang-en': [
			'lang-en',
			'/beta/emuos/assets/js/lang-en',
			'//' + location + '/beta/emuos/assets/js/lang-en'
		],
		'taskbar': [
			'taskbar',
			'/beta/emuos/assets/js/taskbar',
			'//' + location + '/beta/emuos/assets/js/taskbar'
		],
		'window': [
			'window',
			'/beta/emuos/assets/js/window',
			'//' + location + '/beta/emuos/assets/js/window'
		],
		'socket': '//ws.' + location + '/server/app/u_socket_es5',
		'network': '//ws.' + location + '/server/app/network_iframe',
		'ga': '//www.google-analytics.com/analytics'
	};

	// endregion
}(this));