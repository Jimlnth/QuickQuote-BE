var user = require('../models/user');

module.exports = function(app) {
	app
		.get('/api/user/:id', function(req, res) {
			user.findById(req.params.id, function(err, specificUser) {
			    if (err) return res.json({error: err});
			    if (!specificUser) return res.json([]);
			    
			  	res.json(specificUser);
			});
		})
		.post('/api/user/email', function(req, res) {
			user.findOne({ email: req.body.email }, function(err, specificUser) {
				if (err) return res.json({error: err});
				if (!specificUser) return res.json([]);

				res.json([specificUser]);
			})
		})
		.post('/api/user', function(req, res) {
			var newUser = new user(req.body);
			newUser.save(function(err) {
				if (err) return res.json({error: err});

				res.json(newUser);
			});
		})
		.post('/api/user/login', function(req, res) {
			user.findOne({ email: req.body.email }, function(err, loggedUser) {
				if (err) return res.json({error: err});
				if (!loggedUser || !req.body.password) return res.json([]);
				if (loggedUser.password.toString() !== req.body.password.toString()) return res.json([]);

				res.json([loggedUser]);
			})
		})
}