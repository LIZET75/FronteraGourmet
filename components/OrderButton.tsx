import IngredientsPage from '@/pages/ingredientspage';
import React from 'react';



// import React, { FC } from 'react';

const OrderButton: React.FC = () => {

  function navigateToPage(){
    // IngredientsPage()
    // TODO: Implement navigation
    // or Use Link 
  }
    return (
      <button onClick={navigateToPage()} style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
        Order
      </button>

    );
  };
  
  export default OrderButton;


// const IngButton: React.FC = () => {
//     return (
//       <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
//         "Ingredients Button"
//       </button>
//     );
//   };
  
//  export default IngButton;