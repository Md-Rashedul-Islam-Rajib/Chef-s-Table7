import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Recipe from './components/our_recipe/Recipe'
import Cards from './components/our_recipe/Cards'
import Cart from './components/our_recipe/Cart'
import { useState } from 'react'

function App() {
  
  const [carts,setCarts] =useState([]);
const [totalTime,setTotalTime] =useState(0);
const [totalCalories,setTotalCalories] =useState(0);



  return (
    <div className='mx-10'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipe 
      setCarts={setCarts} 
       carts={carts}
        totalTime={totalTime} 
         setTotalTime={setTotalTime}
         totalCalories={totalCalories}
          setTotalCalories={setTotalCalories}
   
       ></Recipe>
    </div>
  )
}

export default App
