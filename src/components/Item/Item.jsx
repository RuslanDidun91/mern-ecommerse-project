import { Link } from 'react-router-dom';
import './Item.css';
import Rating from '@mui/material/Rating';
import { Button, Space } from 'antd';

export const Item = ({ item, handleAddToOrder }) => {

  return (
    <div className='item-main'>
      <Link to={`/items/${item.product.item_id}`} className="item-link">
        <div
          className="image-div"
          style={{
            background: `url(${item.product.main_image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }}>
        </div>
        <div className="title">
          <div className='price'> <strong>$ {item.offers.primary.price}</strong></div>
          <h4 className='crop'>{item.product.title}</h4>
          <span>
            <Rating name="half-rating" defaultValue={item.product.rating} precision={0.5} readOnly />
            <span className='rating-total'>({item.product.ratings_total}reviews)</span>
          </span>
        </div>
      </Link>
      <Space wrap>
        <Button type="primary" onClick={() => handleAddToOrder(item.product.item_id)}>Add to cart</Button>
      </Space>
    </div>
  )
}