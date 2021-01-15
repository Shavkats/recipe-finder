import React from "react";

const Ingredients = ({ ingredients }) => {
  return ingredients.map((ingredient, index) => {
    return (
      <span key={index} className="ingredient-list">
        <i className="ingredient-text">{ingredient.text}</i>
      </span>
    );
  });
};

export default Ingredients;
