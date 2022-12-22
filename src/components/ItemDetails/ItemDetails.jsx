import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Button, Space } from 'antd';
import Rating from '@mui/material/Rating';
import './ItemDetails.css';

export const ItemDetails = ({ data, handleAddToOrder }) => {

  const { itemId } = useParams();
  const navigate = useNavigate();

  const goBackHandle = () => {
    navigate('/orders/new')
  }

  let item = data.find((item) => item.product.item_id === itemId)

  return (
    <div className="details-main-div">
      <div
        className="detail-image-div"
        style={{
          background: `url(${item.product.main_image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}> </div>
      <div className="detail-title">
        <h4>{item.product.title}</h4>
        <ul dangerouslySetInnerHTML={{ __html: item.product.description }}></ul>
        <div className="price">${item.offers.primary.price}</div>
        <Space wrap id="detail-btn">
          <Button type="primary" onClick={() => handleAddToOrder(item.product.item_id)}>Add to cart</Button>
          <Button type="primary" onClick={goBackHandle}>go back </Button>
        </Space>
      </div>
      <span>
        <Rating name="size-large" defaultValue={item.product.rating} precision={0.5} size="large" readOnly />
        <div className='rating-total'>({item.product.ratings_total} reviews)</div>
      </span>

    </div>
  )
}