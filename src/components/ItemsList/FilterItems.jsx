import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useEffect } from 'react';

export default function FilterItems({ data, setData }) {
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    const sorted = [...data].sort((a, b) => {
      if (filter === 'lowPrice') {
        return a.offers.primary.price - b.offers.primary.price;
      } else if (filter === 'highPrice') {
        return b.offers.primary.price - a.offers.primary.price;
      } else if (filter === 'topRated') {
        return b.product.rating - a.product.rating
      } else return [...data]
    })
    setData(sorted)
  }, [filter]);

  return (
    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
      <InputLabel id="demo-select-small">sort by</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={filter}
        label="types"
        onChange={handleChange}>
        <MenuItem value=""></MenuItem>
        <MenuItem value={'lowPrice'}
          onChange={(e) => setFilter(e.target.value)}>Price: Low to High</MenuItem>
        <MenuItem value={'highPrice'}
          onChange={(e) => setFilter(e.target.value)}>Price: High to Low</MenuItem>
        <MenuItem value={'topRated'}
          onChange={(e) => setFilter(e.target.value)}>Top Rated</MenuItem>
      </Select>
    </FormControl>
  );
}