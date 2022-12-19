import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import {NavBar} from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import ItemDetailsPage from '../../pages/ItemDetailsPage/ItemDetailsPage';
import CartPage from '../CartPage/CartPage';
import * as ordersAPI from '../../utilities/order-api';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(null);


  useEffect(function () {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);


  const handleAddToOrder = async (item_id) => {
    const updatedCart = await ordersAPI.addItemToCart(item_id);
    setCart(updatedCart);
    console.log(updatedCart)
  }

  return (
    <main className="App">
      {user ?
        <>
          <Header user={user} setUser={setUser} setData={setData} />
          <NavBar setUser={setUser}/>
          <Routes>
            {/* Route components in here */}
            <Route path="/orders/new" element={<NewOrderPage data={data}
              handleAddToOrder={handleAddToOrder} />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/items/:itemId" element={<ItemDetailsPage data={data}
              handleAddToOrder={handleAddToOrder} />} />
            <Route path="/cart" element={<CartPage cart={cart} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}