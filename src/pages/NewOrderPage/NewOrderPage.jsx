import { ItemsList } from '../../components/ItemsList/ItemsList';

export default function NewOrderPage({ data, handleAddToOrder, setData }) {

  return (
    <main>
      {data &&
        <ItemsList data={data}
          handleAddToOrder={handleAddToOrder}
          setData={setData} />
      }
    </main>
  );
}