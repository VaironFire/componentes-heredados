import React,{useState,useEffect} from 'react'
import{Routes, Route, Link} from "react-router-dom"

import Pokemon from "./components/Pokemon"

const App=()=>{
  return (
      <Routes>
          <Route path='/' element={<Pokemon />}/>
          <Route path='/pokedex' element={<Pokemon />}/>
      </Routes>
  );
}

export default App;
