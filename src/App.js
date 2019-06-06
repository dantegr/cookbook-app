import React, {useEffect, useState} from 'react';
import Recipe from './components/Recipe';
import Header from './components/Header';
import './App.css';
import { css } from '@emotion/core';
import { HashLoader } from 'react-spinners';


const App = () => {

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

  // EDAMAM API KEYS
  const APP_ID = '4223c089';
  const APP_KEY = "be0ba7cbcc7558fef43714bc302e8230";

  const [recipes, setRecipes ] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState ('');
  const [isLoading, setIsLoading] = useState(false);


  useEffect(()=> {
   getRecipes();
  }, [query]);



  const getRecipes = async () => {
    setIsLoading(true);
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    setIsLoading(false);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };



  return (
    <div className="App">
      <div className="container">
        <Header  subtitle='Type an ingredient to find a recipe with it.'/>
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">Search</button>
        </form>
        {isLoading ? (
          <div className='sweet-loading'>
          <HashLoader
            css={override}
            sizeUnit={"px"}
            size={150}
            color={'#006400'}
          />
        </div> 
        ) : (
          <div className="recipes">
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label} 
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories} 
              image ={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
          </div>
          )}
      </div>
      
    </div> 
  );
}

export default App;
