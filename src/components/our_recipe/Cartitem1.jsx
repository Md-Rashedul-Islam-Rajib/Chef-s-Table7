/* eslint-disable react/prop-types */

const Cartitem1 = ({item,idx,setPrepareItem,carts,setCarts,prepareItem,totalTime,setTotalTime,totalCalories,setTotalCalories}) => {
  const { title, cooking_time, calories } = item;

  return (
    <tr className="text text-[#282828B2] bg-[#28282808] rounded-2xl">
      <td className="text-[#282828CC]">{idx + 1}</td>
      <td>{title}</td>
      <td>{cooking_time} minutes</td>
      <td>{calories}</td>
      <td>
        <button
          onClick={() => {
            setPrepareItem([...prepareItem, item]);
            setCarts(carts.filter((single) => single.id !== item.id));
            setTotalTime(totalTime + cooking_time);
            setTotalCalories(totalCalories + calories);
          }}
          className="bg-[#0BE58A] hover:bg-[#35F3A3] text-[#150B2B] py-2 px-3 rounded-3xl text-lg font-medium"
        >
          Preparing
        </button>
      </td>
    </tr>
  );
};

export default Cartitem1;
