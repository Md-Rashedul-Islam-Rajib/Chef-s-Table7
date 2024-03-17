import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Recipe from './components/our_recipe/Recipe'
import Cards from './components/our_recipe/Cards'
import Cart from './components/our_recipe/Cart'
import { useState } from 'react'

function App() {
  
  const [carts,setCarts] =useState([])
//  const f = carts.find((c)=> console.log(c.id))
  return (
    <div className='mx-10'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipe setCarts={setCarts} carts={carts}></Recipe>
    </div>
  )
}

export default App
