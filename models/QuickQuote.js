var mongoose = require('mongoose');

var quickQuoteSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
		required: true
	},
    date: {
        type: Date,
        required: true
    },
    familyName: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

quickQuoteSchema.methods.sendEmail = function() {
    //setup smtp and send email to populated user
}

var quickQuote = mongoose.model('quickQuote', quickQuoteSchema);
module.exports = quickQuote;