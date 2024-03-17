/* eslint-disable react/prop-types */

import Cards from "./Cards";
import Cart from "./Cart";
import { useState } from "react";
const Recipe = ({
  setCarts,
  carts,
  totalTime,
  setTotalTime,
  totalCalories,
  setTotalCalories,
  handleAddToCart,
}) => {
  const [prepareItem, setPrepareItem] = useState([]);
  return (
    <div className="mt-10">
      <h3 className="text-[#150B2B] text-4xl font-semibold text-center">
        Our Recipes
      </h3>
      <p className="my-8 text-[#150B2B99] text-center">
        Savor authentic Italian flavors at Recipe Calories, where Nonna Rosa's
        family recipes come alive. <br />
        Fresh seasonal ingredients dance on your plate, creating a warm and
        inviting atmosphere perfect for a memorable meal
      </p>
      <div className="grid lg:grid-cols-10 gap-4">
        <div className="lg:col-span-6">
          <Cards
            setCarts={setCarts}
            carts={carts}
            prepareItem={prepareItem}
            setPrepareItem={setPrepareItem}
            handleAddToCart={handleAddToCart}
          ></Cards>
        </div>
        <div className="lg:col-span-4">
          <Cart
            carts={carts}
            prepareItem={prepareItem}
            setCarts={setCarts}
            setPrepareItem={setPrepareItem}
            totalTime={totalTime}
            setTotalTime={setTotalTime}
            totalCalories={totalCalories}
            setTotalCalories={setTotalCalories}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
