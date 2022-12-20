import CartItem from '../../components/CartItem/CartItem';
import './CartPage.css';
import * as ordersAPI from '../../utilities/order-api';
import { useNavigate } from 'react-router-dom';




export default function CartPage({ cart, handleChangeQty, handleDeleteItem }) {

  const navigate = useNavigate();

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  console.log(cart)

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
        {/* <span>Your total is: </span>
          <span className='price'><strong>${cart.orderTotal.toFixed(2)}</strong> </span>
          <button>Checkout</button> */}

        {cart.lineItems.length ?
          <>
            <section className="total">
              {cart.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!cart.lineItems.length}
                >CHECKOUT</button>
              }
              <span>{cart.totalQty}</span>
              <span className='price'>${cart.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="empty-cart">Your cart is empty</div>
        }
      </div>
    </main>
  )
}