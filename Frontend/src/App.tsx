// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Landing } from "./screens/Landing";
import { Game } from "./screens/Game";

function App() {

  return (
    <div className="min-h-screen min-w-full bg-slate-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} /> 
          <Route path="/game" element={<Game/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
