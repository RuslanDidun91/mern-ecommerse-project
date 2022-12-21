import './CartItem.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from 'antd';


export default function CartItem({ lineItem, handleChangeQty, handleDeleteItem }) {

  return (
    <div className="cart-main-div">
      <div className="image-div"
        style={{
          background: `url(${lineItem.item.main_image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}></div>
      <div>
        <h4 className="cart-title">{lineItem.item.title}</h4>
        <div id="price-div" className="price"><strong>${lineItem.item.price}</strong></div>
        <span className='delete-qty'>


          {/* delete button */}
          <IconButton aria-label="delete"
            size="large"
            id="delete-btn"
            onClick={() => handleDeleteItem(lineItem._id)}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>

          
          <span>
            {!lineItem.item.isPaid &&
              <Button
                type="primary"
                shape="circle"
                onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}><strong>-</strong></Button>
            }
            <span className="quantity"><strong>{lineItem.qty}</strong></span>
            {!lineItem.item.isPaid &&
              <Button
                type="primary"
                shape="circle"
                onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}><strong>+</strong></Button>
            }
          </span>
        </span>
      </div>
    </div>
  )
}