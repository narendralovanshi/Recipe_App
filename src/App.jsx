  import React from 'react'
  import Home from './Components/Home'
  import './App.css'
  import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
  import RecipeId from './Components/RecipeId'
  import Catagory from './Components/Catagory'
  import SearchElement from './Components/SearchElement'

  const App = () => {
    return (
      <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/:idMeal' element={ <RecipeId/>}/>
          <Route path='/catagory/:name'element={ <Catagory/>}/>
          <Route path='/search/:searchTerm'element={ <SearchElement/>}/>
          
        </Routes>
      </Router>
    
      
      </>
    )
  }

  export default App