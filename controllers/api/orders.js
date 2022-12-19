const Order = require('../../models/order');

module.exports = {
  cart,
  addToCart
}

async function cart(req, res) {
  try {
    // console.log(cart)
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
    res.json(cart);
  } catch (err) {
    res.status(400).json(err);
  }
}