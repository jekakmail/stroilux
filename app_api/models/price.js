var mongoose = require('mongoose');

var priceLineSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    unit: Boolean //true - quantity, false - footage
});


var partPriceSchema = new mongoose.Schema({
    partName: {type: String, required: true},
    createdOn: {type: Date, "default": Date.now},
    lines: [priceLineSchema]
});

var priceSchema = new mongoose.Schema({
    blockName: {type: String, required: true},
    createdOn: {type: Date, "default": Date.now},
    parts: [partPriceSchema]
})


mongoose.model('Price', priceSchema);