import React, {useEffect, useState} from 'react';
import Recipe from './Recipe'; 
import './App.css';

const App = () => {
  const APP_ID = '03d93cf5'; 
  const APP_KEY = '9948c5638b7f38a81cc4f0132b996751'

  // set that state and setState
  const [recipes, setRecipes] = useState([]); 
  const [search, setSearch] = useState('');
  
  // query after we set the search 
  const [query, setQuery] = useState('chicken'); 

  useEffect(() => {
    getRecipes(); 
  }, [query]); 

  const getRecipes = async () => {
    const response = await fetch(  
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json(); 
    setRecipes(data.hits); 
    console.log(data.hits); 
  }

  // update the event search value when user enters an item
  const updateSearch = e => {
    setSearch(e.target.value); 
  }

  // when when submit the getsearch, we get the the query afterwards
  const getSearch = e => {
    e.preventDefault(); 
    setQuery(search);
  }

  return (
    <div className='App'>
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type="text" value={search} onChange={updateSearch} />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  ); 
}; 

export default App; 
 