var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var app = express();
	var ua = req.header('user-agent');

		// detect mobile
		if(/mobile/i.test(ua)) {
				isMobile = true;
		} else {
				isMobile = false;
		}

		// detect iPhone
		if(/iPhone/i.test(ua)) {
				isIphone = true;
		} else {
				isIphone = false;
		}

		// detect iPhone
		if(/iPad/i.test(ua)) {
				isIpad = true;
		} else {
				isIpad = false;
		}

		// detect Android
		if(/Android/i.test(ua)) {
				isAndroid = true;
		} else {
				isAndroid = false;
		}

		//
	  res.render('index', {
			title: 'Angular2/Express/SemanticUI/Grunt Template',
			enviroment: app.get('env'),
			isMobile: isMobile,
			isIphone: isIphone,
			isIpad: isIpad,
			isAndroid: isAndroid,
			userAgent: ua
		});

});

module.exports = router;
