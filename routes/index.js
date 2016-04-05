var express = require('express');
var fs = require('fs');
var router = express.Router();
var response={};

var auth=require('../controllers/auth');

router.route('/')
	.get(function(req, res) {
			res.redirect('/api/view/home');		
});

//login page	
router.route('/login')
	.get(function(req, res) {
		response={};
		if(req.session.user_id===undefined)
			res.render('login',{response:response});
		else
			res.redirect('/api/view/home');
});


//registering a user
router.route('/register')
	.get(function(req, res) {
		response={};

		res.render('register',{response:response});
});

//forgot password
router.route('/forgot')
	.get(function(req, res) {
		response={};

		res.render('forgot',{response:response});
});

//editing user info
router.route('/edit')
	.get(function(req, res) {
		res.json({msg:"User can change his info here"});
        res.end();
});

//publish an advertisement page	
router.route('/publish')
	.get(auth.loggedIn,function(req, res) {
		response={};
		response.user_info=req.session;
		res.render('publish',{response:response});
});

//viewing an advertisement page
router.route('/view')
	.get(function(req, res) {
		res.json({msg:"Advertisement will be published here"});
        res.end();
});

//edit details of a product
router.route('/edit')
	.post(function(req, res) {
		res.json({msg:"USer can change Advertisement detail here!!"});
        res.end();
});

module.exports = router;
