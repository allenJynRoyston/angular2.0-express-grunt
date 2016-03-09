var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var app = express();
  res.render('index', {
		title: 'Allen Royston - Fullstack Developer',
		enviroment: app.get('env')
	});
});

module.exports = router;
