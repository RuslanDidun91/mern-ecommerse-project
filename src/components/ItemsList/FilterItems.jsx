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
      } else if (filter === 'lowRating') {
        return a.product.rating - b.product.rating
      } else if (filter === 'highRating') {
        return b.product.rating - a.product.rating
      } else return a[filter].localeCompare(b[filter])
    })
    setData(sorted)
  }, [filter])


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
        <MenuItem value={'lowPrice'} onChange={(e) => setFilter(e.target.value)}>lowPrice</MenuItem>
        <MenuItem value={'highPrice'} onChange={(e) => setFilter(e.target.value)}>highPrice</MenuItem>
        <MenuItem value={'lowRating'} onChange={(e) => setFilter(e.target.value)}>lowRating</MenuItem>
        <MenuItem value={'highRating'} onChange={(e) => setFilter(e.target.value)}>highRating</MenuItem>
      </Select>
    </FormControl>
  );
}