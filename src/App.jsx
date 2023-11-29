// import { useState } from 'react'
import './App.css'
import GenreMovieList from './Components/GenreMovieList'
import Header from './Components/Header'
import ProductionHouse from './Components/ProductionHouse'
import Slider from './Components/Slider'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>

    <Slider/>

    <ProductionHouse/>

    <GenreMovieList/>
    </>

      
  )
}

export default App
