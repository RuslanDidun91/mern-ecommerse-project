import sendRequest from "./send-request";
const BASE_URL = '/api/items';


export function searchItems(search) {
  return sendRequest(`${BASE_URL}/search?q=${search}`)
}


export function getItemDetail(id) {
  return sendRequest(`${BASE_URL}/detail?q=${id}`)
}