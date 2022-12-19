const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose (for populating Menu Item queries)
const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);

// const Schema = require('mongoose').Schema;
// const mongoose = require('mongoose');


// const itemSchema = new Schema({
//   title: { type: String, required: true },
//   main_image: { type: String, required: true },
//   rating: {type: Number},
//   description: {type: String },
//   price: {type: Number},
//   item_id: {type: String}
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model('Item', itemSchema);