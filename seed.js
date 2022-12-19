require('dotenv').config();
require('./config/database');

const fetch = require('node-fetch');
const API_KEY = process.env.API_KEY;

const Item = require('./models/item');
const itemSchema = require('./models/itemSchema');

async function getQuestions(req, res, next) {
    const data = await fetch(`https://api.bluecartapi.com/request?api_key=${API_KEY}&search_term=headphones&type=search`);
    const items = await data.json();
    for (item of items.search_results) {
        const exists = await Item.exists({ item_id: item.product.item_id })
        if (!exists) {
            await Item.create({
                title: item.product.title,
                main_image: item.product.main_image,
                rating: item.product.rating,
                description: item.product.description,
                price: item.product.price,
                item_id: item.product.item_id,
                // ratings_total: item.product.ratings_total
            })
        }
        // console.log(item);
    }
}

getQuestions();