const mongoose = require("mongoose")

const schema = mongoose.Schema({
	/*make: String,
	model: String,
    price: Number*/
	regNo: String,
	keys: Number,
	company: String,
	comments: String
});

module.exports = mongoose.model("Cars", schema)