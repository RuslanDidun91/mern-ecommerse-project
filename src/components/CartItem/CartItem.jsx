import './CartItem.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


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
        <div id="price-div" className="price">${item.item.price}</div>
        <span className='delete-qty'>

          <IconButton aria-label="delete" size="large">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
          <span className="quantity">{item.qty}</span>

        </span>
          </div>
    </div>
  )
}