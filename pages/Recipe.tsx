import React from 'react';

class Recipe {
  Name: string;
  Ingredients:string[];
  

constructor(NameInput:string, IngredientsInput:string[])
{
this.Name= NameInput;
this.Ingredients=IngredientsInput;

};
}

const ZT= new Recipe("ZuppaToscana", ["SpicySausage", "Bacon", "Cream", "Potatoes", "Pepper", "kale", "Onions", "Garlic", "Olive-Oil","We never use seed-oils", "Italian Dish"]);
const Mole= new Recipe("Mole", ["Chicken", "Spices", "Chile-Pasilla", "Sesame-Seeds", "Coconut-Oil", "We never use seed-oils", "Mexican Dish"]);
const CR= new Recipe("Chinesse Rice", ["Rice", "Sessame-Seeds", "Butter", "Egg", "Carrots", "We never use seed-oils", "Chinesse Dish"]);
const SteakPepper= new Recipe("Steak with Pepper", ["Steak", "Spices", "Chile-California", "Sesame-Seeds", "Coconut-Oil", "We never use seed-oils", "Mexican Dish"]);



export default Recipe;
