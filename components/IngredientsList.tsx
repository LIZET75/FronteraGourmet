import Recipe from "@/classes/Recipe"
import React from "react";

export const IngredientsList: React.FC = () => {
  const zt = new Recipe("ZuppaToscana", ["SpicySausage", "Bacon", "Cream", "Potatoes", "Pepper", "kale", "Onions", "Garlic", "Olive-Oil", "We never use seed-oils", "Italian Dish"]);

  const ingredientsList: JSX.Element[] = [];

  // Use forEach to push each ingredient into the ingredientsList array
  zt.ingredients.forEach(ingredient => {
    ingredientsList.push(<li key={ingredient}>{ingredient}</li>);
  });

  return (
    <div>
      <h2> {zt.name} </h2>

      <ul>{ingredientsList}</ul>

    </div>
  );

}