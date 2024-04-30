
import React from 'react';
import { IngredientsList } from "@/components/IngredientsList";


const IngredientsPage: React.FC = () => {
    return (
        <div className="container">
            <header className="header">Ingredients List</header>
            <IngredientsList></IngredientsList>
        </div>
    );
};

export default IngredientsPage;