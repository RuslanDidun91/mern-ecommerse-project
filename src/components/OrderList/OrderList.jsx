import OrderListItem from '../OrderListItem/OrderListItem';
import './OrderList.css';

export default function OrderList({ orders, activeOrder, setActiveOrder }) {

  const orderList = orders.map(order => <OrderListItem
    order={order}
    key={order.id}
    activeOrder={activeOrder}
    setActiveOrder={setActiveOrder}
  />)


  return (
    <main className={`OrderList ${orders.length ? '' : 'no-orders'}`}>
      {orderList}
    </main>
  )
}