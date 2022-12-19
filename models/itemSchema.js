const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  title: { type: String, required: true },
  main_image: { type: String, required: true },
  rating: {type: Number},
  description: {type: String, },
  price: {type: Number},
  item_id: {type: String},
  ratings_total: {type: Number}
}, {
  timestamps: true
});

module.exports = itemSchema;