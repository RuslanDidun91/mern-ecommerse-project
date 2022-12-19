import './ItemsList.css'
import { Item } from '../../components/Item/Item'


export const ItemsList = ({ data, handleAddToOrder }) => {
  return (
    <div className='itemlist-div'>
      {data&&data.length === 0
        ? 'loading'
        : data&&data.map((item) => (
          <Item item={item}
                key={item.id}
                handleAddToOrder={handleAddToOrder} />
        ))}
    </div>
  )
}