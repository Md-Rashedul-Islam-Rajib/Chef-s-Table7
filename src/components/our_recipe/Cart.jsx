import React from "react";

const Cart = () => {
  return (
    <div className="p-6 border-[1px] border-[#2828281A] rounded-2xl">
      <div className="mb-6">
        <h3 className="text-center text-2xl font-semibold text-[#282828] mb-2">Want to cook: 01</h3>
        <hr className="bg-[#28282826] my-5"></hr>
        <div>
          <table className="text-center table-auto">
            <tr className="text font-medium text-[#878787]">
              <th>&nbsp;</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th>&nbsp;</th>
            </tr>
            <tr className="text text-[#282828B2] bg-[#28282808]">
              <td className="text-[#282828CC]">1</td>
              <td>Chicken Caesar Salad</td>
              <td>20 minutes</td>
              <td>400 calories</td>
              <td>
                <button className="bg-[#0BE58A] text-[#150B2B] py-2 px-3 rounded-3xl text-lg font-medium">
                  Preparing
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div>
        <h3 className="text-center text-2xl font-semibold text-[#282828] mb-2">Currently cooking: 02</h3>
        <hr className="bg-[#28282826] my-5"></hr>
        <div>
          <table className="text-center">
            <thead>
            <tr className="text font-medium text-[#878787]">
              <th>&nbsp;</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
            </thead>
            <tbody>
            <tr className="text text-[#282828B2] bg-[#28282808]">
              <td className="text-[#282828CC]">1</td>
              <td>Chicken Caesar Salad</td>
              <td>20 minutes</td>
              <td>400 calories</td>
            </tr>
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
