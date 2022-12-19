import { ItemDetails } from "../../components/ItemDetails/ItemDetails"

export default function ItemDetailPage({ data, handleAddToOrder }) {
  return (
    <div className='itemlist-div'>
      <ItemDetails data={data} handleAddToOrder={handleAddToOrder}/>
    </div>
  )
}