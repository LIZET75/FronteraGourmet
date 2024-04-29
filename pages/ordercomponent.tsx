"use client"
import React, { useState } from "react";
// import styles from global.css

//component to order dishes and increments the number starting from 0
function Order(props: { name: string; order:number}) {
    // Use useState to manage the order state
    const [order, setOrder] = useState(props.order);
  
  
    // Function to handle the click  & incmt the order
    const handleOrder = () => {
        setOrder(prevOrder => prevOrder + 1);
    };
  
  // function order(props: any) {
    return (
      <div>
      <h1> Your Order </h1>
      <h1>{props.name}</h1>
      <h1>{order}</h1>
      <button onClick={handleOrder}>YourDishOrder</button>
      </div>
    );
  } 
  
// export default function ZupTos()  {
//     return <Order name="ZuppaToscana" order={0} />; // This passes the initial order as a prop
//        }
export default Order;

