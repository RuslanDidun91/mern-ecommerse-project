import { ItemsList } from '../../components/ItemsList/ItemsList';
import { useState } from 'react';

export default function NewOrderPage({ data, handleAddToOrder }) {
  
  return (
    <main>
      <ItemsList data={data} handleAddToOrder={handleAddToOrder}/>
    </main>
  );
}