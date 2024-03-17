/* eslint-disable react/prop-types */

import { useState } from "react";
import Cartitem1 from "./Cartitem1";
import Cartitem2 from "./Cartitem2";


const Cart = ({carts,prepareItem,setCarts,setPrepareItem}) => {

 console.log(prepareItem)
  return (
    <div className="p-6 border-[1px] border-[#2828281A] rounded-2xl">
      <div className="mb-6">
        <h3 className="text-center text-2xl font-semibold text-[#282828] mb-2">Want to cook: 01</h3>
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
            {
              carts.map((item,idx)=><Cartitem1 
              setPrepareItem={setPrepareItem} 
              carts={carts}
               item={item}
                idx={idx} 
                key={idx}
                prepareItem={prepareItem}
                setCarts={setCarts}
                ></Cartitem1>)
            }
           </tbody>
            
          </table>
          </div> 
      </div>
      <div>
        <h3 className="text-center text-2xl font-semibold text-[#282828] mb-2">Currently cooking: 02</h3>
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
              {
                prepareItem.map((item,idx)=><Cartitem2
                item={item}
                idx={idx}
                key={idx}
                ></Cartitem2>)
              }
            {/* <tr className="text text-[#282828B2] bg-[#28282808]">
              <td className="text-[#282828CC]">1</td>
              <td>Chicken Caesar Salad</td>
              <td>20 minutes</td>
              <td>400 calories</td>
            </tr> */}
            <tr className="text-[#282828CC] font-medium">
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>Total Time = 45 minutes</td>
              <td>Total Calories = 1050 calories</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
