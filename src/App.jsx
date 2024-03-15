import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Recipe from './components/our_recipe/Recipe'
import Cards from './components/our_recipe/Cards'
import Cart from './components/our_recipe/Cart'

function App() {
const handleCook = (card) => {
  console.log(card)
}
  return (
    <div className='mx-10'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipe handleCook={handleCook}></Recipe>
    </div>
  )
}

export default App
