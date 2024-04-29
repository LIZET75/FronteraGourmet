import Recipe from "@/classes/Recipe"
import React from "react";
const zt= new Recipe("ZuppaToscana", ["SpicySausage", "Bacon", "Cream", "Potatoes", "Pepper", "kale", "Onions", "Garlic", "Olive-Oil","We never use seed-oils", "Italian Dish"]);
export function ingredientspage (zt:Recipe)  {
    return(
       <div>
{zt.ingredients}.forEach(function (ingredient) {
  ingredient.
}); 
</div>    
    )
 
}

let num = [7, 8, 9];
num.forEach(function (value) {
  console.log(value);
}); 
