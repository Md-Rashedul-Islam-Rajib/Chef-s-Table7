/* eslint-disable react/prop-types */
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Card = ({ card, setCarts,carts,setPrepareItem,prepareItem,handleAddToCart }) => {
  const { cover, title, description, ingredients, cooking_time, calories } = card;
  return (
    <div className="p-6 border-[1px] border-[#2828281A] rounded-2xl">
      <img className="rounded-2xl" src={cover} alt="" />
      <h3 className="my-3 text-xl font-semibold text-[#282828]">{title}</h3>
      <p className="my-1 text text-[#878787] leading-7">{description}</p>
      <hr />
      <p className="my-4 text-xl font-medium text-[#282828]">
        Ingredients : {ingredients.length}
      </p>
      <ul className="list-disc pl-8 text text-lg text-[#878787] my-3">
        {
            ingredients.slice(0,6).map((ingredient,idx) => <li key={idx}>{ingredient}</li>)
        }
      </ul>
      <hr />
      <div className="flex gap-6 my-4">
        <div className="flex items-center gap-2 text text-[#282828CC]">
          <CiClock2 /> {cooking_time} Minutes
        </div>
        <div className="flex items-center gap-2 text text-[#282828CC]">
          <AiOutlineFire /> {calories} Calories
        </div>
      </div>
      <button onClick={()=>{
        handleAddToCart(card)
        // setCarts([...carts,card])
      }} className="bg-[#0BE58A] hover:bg-[#35F3A3]  text-[#150B2B] py-2 px-3 rounded-3xl text-lg font-medium">
        Want To Cook
      </button>
    </div>
  );
};

export default Card;
