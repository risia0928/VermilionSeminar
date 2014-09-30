var IMG_DIR = 'snapshot/';
var URL 	= 'http://localhost/VermilionSeminar/#/';
var WIDTH 	= 1366;
var HEIGHT 	= 768;
var ZOOM 	= 1.0;
var WAIT 	= 5000;
// 取得したいサイトのURLを指定(URLは適当に変更してください)。
var sites = [
	{ url: URL, image: IMG_DIR+'index.html' },
	{ url: URL+'program', image: IMG_DIR+'program.html' },
	{ url: URL+'entry', image: IMG_DIR+'entry.html' },
	{ url: URL+'guest', image: IMG_DIR+'guest.html' },
	{ url: URL+'venue', image: IMG_DIR+'venue.html' },
];
var captured = 0;

function capture(site) {
	var page = require('webpage').create();
	page.zoomFactor = ZOOM;
	page.viewportSize = {
		width: WIDTH,
		height: HEIGHT
	};
	page.open(site.url, function() {
		window.setTimeout(function () {
			// サイトのスクリーンショットを保存
			page.render(site.image);
			captured++;
			if (captured == sites.length) {
				phantom.exit();
			}else {
				capture(sites[captured]);
			}
		}, WAIT);
	});
}

capture(sites[0]);
