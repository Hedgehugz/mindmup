var MM = MM || {},
	cookies = {},
	_gaq = _gaq || [],
	skeleton = new MM.DeferredSkeleton(window, window),
  config = {
    googleClientId: '693114381294.apps.googleusercontent.com',
    googleShortenerApiKey: 'AIzaSyD7EYsWhygTPrZaYSVH4N8HyXOujmAjiyM',
    networkTimeoutMillis: 60000
  };
window.gdrive = new MM.GoogleDriveAdapter(config.googleClientId, config.googleShortenerApiKey, config.networkTimeoutMillis, 'application/json');

Object.defineProperty(document, 'cookie', {
	get: function () {
		'use strict';
		var result = [];
		for (var cookie in cookies) {
			result.push(cookie + '=' + cookies[cookie]);
		}
		return result.join('; ');
	},
	set: function (value) {
		'use strict';
		if (value.indexOf(';') < 0) {
			return;
		}
		var cookieName = value.substring(0, value.indexOf('=')),
			cookieValue = value.substring(cookieName.length + 1, value.indexOf(';'));
		cookies[cookieName] = cookieValue;
	}
});

Object.defineProperty(history, 'length', {get: function () {
	'use strict';
	return 0;
}});
