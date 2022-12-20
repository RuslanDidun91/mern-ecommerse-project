import './CartItem.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from 'antd';
import {Checkout} from './Checkout';


export default function CartItem({ item }) {
  return (
    <div className="cart-main-div">
      <div className="image-div"
        style={{
          background: `url(${item.item.main_image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}></div>
      <div>
        <h4 className="cart-title">{item.item.title}</h4>
        <div id="price-div" className="price"><strong>${item.item.price}</strong></div>
        <span className='delete-qty'>
          <IconButton aria-label="delete" size="large" id="delete-btn">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
          <span>
            <Button type="primary" shape="circle"><strong>-</strong></Button>
            <span className="quantity"><strong>{item.qty}</strong></span>
            <Button type="primary" shape="circle"><strong>+</strong></Button>
          </span>
        </span>
      </div>
      <Checkout isPaid={isPaid} item={item}/>
    </div>
  )
}