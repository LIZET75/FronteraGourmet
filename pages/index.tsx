import Image from "next/image";
import { Inter } from "next/font/google";
import Recipe from "../classes/Recipe";
import React from 'react';
import OrderButton from "../components/OrderButton";
import IngButton from "../components/IngButton";
import Order from "../components/ordercomponent";


const IndexPage: React.FC = () => {

  const zt= new Recipe("ZuppaToscana", ["SpicySausage", "Bacon", "Cream", "Potatoes", "Pepper", "kale", "Onions", "Garlic", "Olive-Oil","We never use seed-oils", "Italian Dish"]);
  const mole= new Recipe("Mole", ["Chicken", "Spices", "Chile-Pasilla", "Sesame-Seeds", "Coconut-Oil", "We never use seed-oils", "Mexican Dish"]);
  const cr= new Recipe("Chinesse Rice", ["Rice", "Sessame-Seeds", "Butter", "Egg", "Carrots", "We never use seed-oils", "Chinesse Dish"]);
  const steakpepper= new Recipe("Steak with Pepper", ["Steak", "Spices", "Chile-California", "Sesame-Seeds", "Coconut-Oil", "We never use seed-oils", "Mexican Dish"]);

  // const RecipeList:Recipe[] = [];
  // RecipeList.push(zt);
  // RecipeList.push(mole);
  // RecipeList.push(cr);
  // RecipeList.push(steakpepper);

  // let buttonLst:any[] = [];

  // RecipeList.forEach((r,index )=>{
  //   buttonLst.push(<span>
  //     <OrderButton name={r.name} ingredients={r.ingredients}></OrderButton>
  //       <IngButton></IngButton>
  //   </span>)
  // })

  return (
    <div className="container">
      <header className="header">Welcome to Frontera Gourmet</header>
      <div className="content">
        <h1>The best place to find delicious and Healthy Recipes</h1>
        <p>We have Italian, Chinesse and Mexican Plates for you to choose from</p>
      </div>
     {/* Client Requirement Allow Users to select dishes and order from the interface
     unable to link to css global component */}
      
      <div style={{textAlign: "left"}}>      
     <Order  name={zt.name} order={0}></Order>

     </div>
     <div style={{textAlign: "center"}}>      
     <Order name={mole.name} order={0}></Order>
     </div>
     <div style={{textAlign: "left"}}>   
     <Order name={cr.name} order={0}></Order>
     </div>
     <div style={{textAlign: "center"}}>   
     <Order name={steakpepper.name} order={0}></Order>
     </div>
    {/* wanted each button to show the ingredients upon click didn't work */}
      {/* {buttonLst} */}
     {zt.ingredients}{zt.name}
    </div>
  );
};

export default IndexPage;