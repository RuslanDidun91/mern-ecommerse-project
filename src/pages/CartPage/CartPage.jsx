import CartItem from '../../components/CartItem/CartItem';
import './CartPage.css';
import * as ordersAPI from '../../utilities/orders-api';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '@mui/material/Button';



export default function CartPage({ cart, handleChangeQty, setCart }) {

  const navigate = useNavigate();

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
    setCart(cart)
    // console.log(cart)
  }

  useEffect(function () {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
    console.log(cart)
  }, []);

  const handleDeleteItem = async (item_id) => {
    const updatedCart = await ordersAPI.deleteItemFromCart(item_id);
    setCart(updatedCart);
  }

  return (
    <main className='cart-main'>
      {cart.lineItems && cart.lineItems.length === 0
        ? ''
        : cart.lineItems && cart.lineItems.map((item) => (
          <CartItem lineItem={item}
            key={item.id}
            handleChangeQty={handleChangeQty}
            handleDeleteItem={handleDeleteItem} />

        ))}
      <div className='checkout-div'>
        {cart.lineItems.length ?
          <>
            <div className="total">
              <div className='cart-total-items'>You have <strong>{cart.orderQty}</strong> items</div>
              <span className='price'>${cart.orderTotal.toFixed(2)}</span>
              <Button
                id='checkout-btn'
                variant="contained"
                size='small'
                onClick={handleCheckout}
                disabled={!cart.lineItems.length}>Checkout</Button>
            </div>
          </>
          :
          <div className="empty-cart">Your cart is empty</div>
        }
      </div>
    </main>
  )
}