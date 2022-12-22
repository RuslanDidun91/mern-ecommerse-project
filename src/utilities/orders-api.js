import sendRequest from './send-request';
const BASE_URL = '/api/orders';

//get unpaid cart for logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

//add item
export function addItemToCart(itemId) {
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}

export function setItemQtyInCart(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty })
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

// Fetches all orders for the logged in user
export function getOrderHistory() {
  return sendRequest(`${BASE_URL}`);
}

export function deleteItemFromCart(itemId) {
  return sendRequest(`${BASE_URL}/delete/${itemId}`, 'DELETE')
}
