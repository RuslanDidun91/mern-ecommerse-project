const Order = require('../../models/order');
const Item = require('../../models/item');

module.exports = {
  cart,
  addToCart
}

async function cart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    res.json(cart)
  } catch (err) {
    res.status(400).json(err);
  }
}

async function addToCart(req, res) {
  console.log(req.params.id)
  try {
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    console.log(cart)
    res.json(cart);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}