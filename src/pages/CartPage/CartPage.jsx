import CartItem from '../../components/CartItem/CartItem';

export default function CartPage({ cart }) {



  console.log(cart)
  return (
    <main>
      {cart.lineItems && cart.lineItems.length === 0
        ? 'your cart is empty...'
        : cart.lineItems && cart.lineItems.map((item) => (
          <CartItem item={item}
            key={item} />
        ))}
    </main>
  )
}