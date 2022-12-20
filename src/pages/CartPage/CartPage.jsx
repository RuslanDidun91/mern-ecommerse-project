import CartItem from '../../components/CartItem/CartItem';


export default function CartPage({ cart, handleChangeQty }) {



  console.log(cart)

  return (
    <main>
      {cart.lineItems && cart.lineItems.length === 0
        ? 'your cart is empty...'
        : cart.lineItems && cart.lineItems.map((item) => (
          <CartItem lineItem={item}
                    key={item.id}
                    handleChangeQty={handleChangeQty} />
        ))}
        <div>
          <span>{cart.orderQty}</span><br />
          <span>Your total is:</span>
          <span className='price'><strong>${cart.orderTotal.toFixed(2)}</strong> </span>
          <button>Checkout</button>
        </div>
    </main>
  )
}