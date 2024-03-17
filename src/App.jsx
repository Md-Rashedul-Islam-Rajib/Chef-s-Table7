import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Recipe from "./components/our_recipe/Recipe";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function App() {
  const [carts, setCarts] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleAddToCart = (card) => {
    const ifExist = carts.find(item => item.id==card.id)
    if(!ifExist){
      setCarts([...carts,card]);
      toast.success("Recipe successfully added for cook")
    }else{
      toast.error("Recipe already added for cook")
    }
  };

  return (
    <div className="mx-2 md:mx-10 mb-12">
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipe
        setCarts={setCarts}
        carts={carts}
        totalTime={totalTime}
        setTotalTime={setTotalTime}
        totalCalories={totalCalories}
        setTotalCalories={setTotalCalories}
        handleAddToCart={handleAddToCart}
      ></Recipe>
      <ToastContainer />
    </div>
  );
}

export default App;
