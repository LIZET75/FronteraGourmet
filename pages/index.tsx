import Image from "next/image";
import { Inter } from "next/font/google";
import Recipe from "./Recipe";
import React from 'react';
import OrderButton from "./OrderButton";
import IngButton from "./IngButton";
import Order from "./ordercomponent";


const IndexPage: React.FC = () => {

  const ZT= new Recipe("ZuppaToscana", ["SpicySausage", "Bacon", "Cream", "Potatoes", "Pepper", "kale", "Onions", "Garlic", "Olive-Oil","We never use seed-oils", "Italian Dish"]);
  const Mole= new Recipe("Mole", ["Chicken", "Spices", "Chile-Pasilla", "Sesame-Seeds", "Coconut-Oil", "We never use seed-oils", "Mexican Dish"]);
  const CR= new Recipe("Chinesse Rice", ["Rice", "Sessame-Seeds", "Butter", "Egg", "Carrots", "We never use seed-oils", "Chinesse Dish"]);
  const SteakPepper= new Recipe("Steak with Pepper", ["Steak", "Spices", "Chile-California", "Sesame-Seeds", "Coconut-Oil", "We never use seed-oils", "Mexican Dish"]);

  const RecipeList:Recipe[] = [];
  RecipeList.push(ZT);
  RecipeList.push(Mole);
  RecipeList.push(CR);
  RecipeList.push(SteakPepper);

  let buttonLst:any[] = [];

  RecipeList.forEach((r,index )=>{
    buttonLst.push(<span>
      <OrderButton Name={r.Name} Ingredients={r.Ingredients}></OrderButton>
        <IngButton></IngButton>
    </span>)
  })

  return (
    <div className="container">
      <header className="header">Welcome to Frontera Gourmet</header>
      <div className="content">
        <h1>The best place to find delicious and Healthy Recipes</h1>
        <p>We have Italian, Chinesse and Mexican Plates for you to choose from</p>
      </div>
     //Client Requirement Allow Users to select dishes and order from the interface
      //unable to link to css global component
      
      <div style={{textAlign: "left"}}>      
     <Order  name={ZT.Name} order={0}></Order>
     </div>
     <div style={{textAlign: "center"}}>      
     <Order name={Mole.Name} order={0}></Order>
     </div>
     <div style={{textAlign: "left"}}>   
     <Order name={CR.Name} order={0}></Order>
     </div>
     <div style={{textAlign: "center"}}>   
     <Order name={SteakPepper.Name} order={0}></Order>
     </div>
    //wanted each button to show the ingredients upon click didn't work
      {buttonLst}

    </div>
  );
};

export default IndexPage;