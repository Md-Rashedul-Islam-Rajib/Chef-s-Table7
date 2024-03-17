/* eslint-disable react/prop-types */

import { useState } from "react";
import Cartitem1 from "./Cartitem1";
import Cartitem2 from "./Cartitem2";

const Cart = ({carts,prepareItem,setCarts,setPrepareItem,totalTime,setTotalTime,totalCalories,setTotalCalories}) => {
  return (
    <div className="p-6 border-[1px] border-[#2828281A] rounded-2xl">
      <div className="mb-6">
        <h3 className="text-center text-2xl font-semibold text-[#282828] mb-2">
          Want to cook: {carts.length}
        </h3>
        <hr className="bg-[#28282826] my-5"></hr>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text font-medium text-[#878787]">
                <th>&nbsp;</th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((item, idx) => (
                <Cartitem1
                  setPrepareItem={setPrepareItem}
                  carts={carts}
                  item={item}
                  idx={idx}
                  key={idx}
                  prepareItem={prepareItem}
                  setCarts={setCarts}
                  totalTime={totalTime}
                  setTotalTime={setTotalTime}
                  totalCalories={totalCalories}
                  setTotalCalories={setTotalCalories}
                ></Cartitem1>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="text-center text-2xl font-semibold text-[#282828] mb-2">
          Currently cooking: {prepareItem.length}
        </h3>
        <hr className="bg-[#28282826] my-5"></hr>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text font-medium text-[#878787]">
                <th>&nbsp;</th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {prepareItem.map((item, idx) => (
                <Cartitem2 item={item} idx={idx} key={idx}></Cartitem2>
              ))}
              <tr className="text-[#282828CC] font-medium">
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>Total Time = {totalTime} minutes</td>
                <td>Total Calories = {totalCalories} calories</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
