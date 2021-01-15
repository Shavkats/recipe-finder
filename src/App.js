import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = '623376c1';
  const APP_KEY = 'b4bfdade63ae8a553f8939ec4663eb52';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('beef');

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await Axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipes(response.data.hits);
  };

  const handleSearch  = e => {
    setSearch(e.target.value);
  };

  const getSearchResults = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearchResults}>
        <input className="search-bar" type='text' value={search} onChange={handleSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index) =>(
          <Recipe key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
