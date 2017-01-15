var quickQuote = require('../models/quickQuote');

module.exports = function(app) {
	app
		.post('/api/quickQuote', function(req, res) {
			var newQuickQuote = new quickQuote(req.body);
			newQuickQuote.date = new Date();
			newQuickQuote.save(function(err) {
				if (err) return res.json({error: err});

				quickQuote.populate(newQuickQuote, { path: 'user'}, function(err, newQuickQuote) {
					if (err) return res.json({error: err});

					newQuickQuote.sendEmail();
					res.json(newQuickQuote);
				});
			});
		})
}