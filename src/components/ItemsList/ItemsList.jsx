import './ItemsList.css';
import { Item } from '../../components/Item/Item';
import Grid from '@mui/material/Grid';
import FilterItems from './FilterItems';

export const ItemsList = ({ data, handleAddToOrder, setData }) => {
  return (
    <>
      <FilterItems data={data} setData={setData}/>
      <Grid container spaacing={2} className="itemlist-div">
        {data && data.length === 0
          ? ''
          :
          data && data.map((item) => (
            <Grid item xs={12} sm={4}>
              <Item item={item}
                key={item.id}
                handleAddToOrder={handleAddToOrder} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}