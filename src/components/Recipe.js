import React from 'react';
import style from '../recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {

  const roundCalories = Math.round(calories);
  return(
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt=""/>
      <div className={style.content}>
        <ol>
          {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
        <p>Calories:{roundCalories}</p>
      </div>
      
    </div>
  );
};

export default Recipe;