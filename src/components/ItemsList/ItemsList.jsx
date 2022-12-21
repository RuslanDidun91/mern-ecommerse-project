import './ItemsList.css';
import { Item } from '../../components/Item/Item';
import Grid from '@mui/material/Grid';



export const ItemsList = ({ data, handleAddToOrder }) => {
  return (
    // <div className='itemlist-div'>
    //   {data&&data.length === 0
    //     ? ''
    //     : data&&data.map((item) => (
    //       <Item item={item}
    //             key={item.id}
    //             handleAddToOrder={handleAddToOrder} />
    //     ))}
    // </div>
    <Grid container spaacing={2} className="itemlist-div">
      {data&&data.length === 0
      ? ''
      : data&&data.map((item) => (
      <Grid xs={12} sm={4}>
        <Item item={item}
          key={item.id}
          handleAddToOrder={handleAddToOrder} />
      </Grid>
      ))}
    </Grid>
  )
}