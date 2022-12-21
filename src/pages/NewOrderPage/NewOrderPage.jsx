import { ItemsList } from '../../components/ItemsList/ItemsList';


export default function NewOrderPage({ data, handleAddToOrder }) {
  
  return (
    <main>
      <ItemsList data={data} handleAddToOrder={handleAddToOrder}/>
    </main>
  );
}