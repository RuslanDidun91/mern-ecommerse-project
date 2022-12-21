import { useNavigate } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import { useEffect, useState } from 'react';
import OrderList from '../../components/OrderList/OrderList'
import './OrderHistoryPage.css'


export default function OrderHistoryPage() {

  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);


  useEffect(function () {
    async function getOrders() {
      const orders = await ordersAPI.getOrderHistory();
      setActiveOrder(orders[0] || null);
      setOrders(orders);
    }
    getOrders();
  }, []);

  return (
    <main className='OrderHistoryPage'>
      <OrderList orders={orders}
        activeOrder={activeOrder}
        setActiveOrder={setActiveOrder} />
    </main>
  );
}