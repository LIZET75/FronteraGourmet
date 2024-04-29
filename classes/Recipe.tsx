import React from 'react';

class Recipe {
  name: string;
  ingredients:string[];
  

constructor(NameInput:string, IngredientsInput:string[])
{
this.name= NameInput;
this.ingredients=IngredientsInput;

};
}

export default Recipe;
