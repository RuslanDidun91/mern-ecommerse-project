const Order = require('../../models/order');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  getOrderHistory,
  deleteFromCart
}

async function deleteFromCart(req, res) {
  try {
    req.body.user = req.user._id;
    const cart = await Order.getCart(req.user._id);
    const itemIndex = cart.lineItems.findIndex(item => item._id == req.body.itemId);
    cart.lineItems.splice(itemIndex, 1);
    cart.save();
    res.json(cart);
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}

async function getOrderHistory(req, res) {
  const orders = await Order.find({ user: req.user._id, isPaid: true }).sort('-updatedAt');
  res.json(orders);
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
  // console.log(req.params.id)
  try {
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    // console.log(cart)
    res.json(cart);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

async function setItemQtyInCart(req, res) {
  // console.log(req.body.itemId, req.body.newQty)
  const cart = await Order.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty);
  res.json(cart);
}

async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}