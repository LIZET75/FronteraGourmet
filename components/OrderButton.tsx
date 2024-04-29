import React from 'react';
import Recipe from '../classes/Recipe';




// import React, { FC } from 'react';

const OrderButton: React.FC<Recipe> = ({name,ingredients}) => {
    return (
      <button  style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
        {name}
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