import './SearchBar.css';
import { useState } from "react";
import * as itemsAPI from '../../utilities/items-api';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function SearchBar({ setData }) {

  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function fetchDataHandler() {
    setIsLoading(true);
    let searchResult = await itemsAPI.searchItems(search);
    if (searchResult) {
      navigate('/orders/new');
    }
    setData(searchResult.search_results);
    setIsLoading(false);
    console.log(searchResult.search_results);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchDataHandler();
    setSearch('');
  };

  return (
    <div className="container">
      {isLoading
        ?
        <Box sx={{ display: 'flex' }}>
          <CircularProgress color='secondary' />
        </Box>
        :
        <form onSubmit={handleSubmit} id="search-form">
          <input type="text"
            placeholder='What are you looking for..?'
            value={search}
            onChange={(event) => setSearch(event.target.value)} />
          <button type="submit"
            disabled={isLoading}></button>
        </form>
      }
    </div>
  );
}