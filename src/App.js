
import { NavbarComponent } from "./components/NavBar.js";
import { HomeComponent } from "./components/Home.js";
import { CvComponent } from "./components/Cv.js";
import { SecretComponent } from "./components/Secret.js";
// import {ChangeBg} from './components/ChangeBg.js'
import {GetJson} from "./components/JsonTest"
import {BrowserRouter as Router, HashRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



export default function App() {
  return (
    <HashRouter>
    <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/cv" element={<CvComponent/>} />
        <Route path="/jsontest" element={<GetJson/>} />
      </Routes>
  <SecretComponent/>
  </HashRouter>
  )
}