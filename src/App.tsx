// import { useState } from 'react'
import './App.css'
import Home from "./pages/Home/Home"
import { useAppContext } from './context/App.context'

function App() {

  const {list} = useAppContext();

  console.log("list: ", list);
  return (
    <>
     <Home/>
    </>
  )
}

export default App
