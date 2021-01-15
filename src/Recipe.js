import React, {useState} from 'react';
import Ingredients from "./Ingredients";

const Recipe = ({ recipe }) => {
    const [view, setView] = useState(false);
    const { label, image, calories, ingredients } = recipe.recipe;

    const formatCalories = (cal) =>{
        return Number(cal.toFixed(2)).toLocaleString() + "";
    }
  
    return (
      <div className="recipe">
        <img src={image} alt={label} />
        <h3>{label}</h3>
        <p>Calories: {formatCalories(calories)} kcal</p>
        <button onClick={() => setView(!view)}>Ingredients</button>
        {view && <Ingredients ingredients={ingredients} />}
      </div>
    );
  };
  
  export default Recipe;