import React from 'react';
import Cards from './Cards';
import Cart from './Cart';
const Recipe = ({handleCook}) => {
    return (
        <div className='mt-10'>
            <h3 className='text-[#150B2B] text-4xl font-semibold text-center'>Our Recipes</h3>
            <p className='my-8 text-[#150B2B99] text-center'>Savor authentic Italian flavors at Recipe Calories, where Nonna Rosa's family recipes come alive. <br />Fresh seasonal ingredients dance on your plate, creating a warm and inviting atmosphere perfect for a memorable meal</p>
            <div className='grid grid-cols-10 gap-4'>
                <div className='col-span-6'>
                    <Cards handleCook={handleCook}></Cards>
                </div>
                <div className='col-span-4'>
                <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Recipe;