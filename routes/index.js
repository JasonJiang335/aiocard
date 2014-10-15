
/*
 * GET home page.
 */
var data = require('../sponsors.json');

exports.view = function(req, res){
	//console.log(data);
	res.render('index', data);
};