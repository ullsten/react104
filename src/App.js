
import { NavbarComponent } from "./components/NavBar.js";
import { HomeComponent } from "./components/Home.js";
import { CvComponent } from "./components/Cv.js";
import { SecretComponent } from "./components/Secret.js";
// import {ChangeBg} from './components/ChangeBg.js'
import {GetJson} from "./components/JsonTest"
import {BrowserRouter as Router, HashRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EasterEgg from "./components/ChangeBg.js";
import React, {useState} from "react";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
   const handleBackgroundClick = () => {
     const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

     setBackgroundColor(randomColor);

    document.body.style.backgroundColor = randomColor
   };

  return (
    <div onClick={handleBackgroundClick}
      style={{ backgroundColor, height: '100vh', width: '100vw'}}>
       {(
       <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        </div>)}
        <HashRouter>
    <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/cv" element={<CvComponent/>} />
        <Route path="/jsontest" element={<GetJson/>} />
      </Routes>

  <SecretComponent/>
  </HashRouter>
        </div>


  )
}