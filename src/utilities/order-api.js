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