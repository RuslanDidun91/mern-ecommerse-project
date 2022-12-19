import './SearchBar.css'
import { useState } from "react";
import * as itemsAPI from '../../utilities/items-api'
import {useNavigate} from 'react-router-dom'

export default function SearchBar({setData}) {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();


  async function fetchDataHandler() {
    let searchResult = await itemsAPI.searchItems(search)
    if (searchResult) {
      navigate('/orders/new')
    }
    setData(searchResult.search_results) 
    console.log(searchResult.search_results);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchDataHandler();
    setSearch('')
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} id="search-form">
        <input type="text"
          placeholder='What are you looking for..?'
          value={search}
          onChange={(event) => setSearch(event.target.value)} />
        <button type="submit"></button>
      </form>
    </div>
  );
}