import CartItem from '../../components/CartItem/CartItem';


export default function CartPage({ cart, handleChangeQty, handleDeleteItem }) {



  console.log(cart)

  return (
    <main>
      {cart.lineItems && cart.lineItems.length === 0
        ? 'your cart is empty...'
        : cart.lineItems && cart.lineItems.map((item) => (
          <CartItem lineItem={item}
                    key={item.id}
                    handleChangeQty={handleChangeQty}
                    handleDeleteItem={handleDeleteItem} />
        ))}
        <div>
          <span>Your total is: </span>
          <span className='price'><strong>${cart.orderTotal.toFixed(2)}</strong> </span>
          <button>Checkout</button>
        </div>
    </main>
  )
}