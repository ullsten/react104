
import { NavbarComponent } from "./components/NavBar.js";
import { HomeComponent } from "./components/Home.js";
import { CvComponent } from "./components/Cv.js";
import { Secrets } from "./components/Secrets.js";
import {BrowserRouter as Router, HashRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <HashRouter>
    {/* <Router> */}
    <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/cv" element={<CvComponent/>} />
        <Route path="/secrets" element={<Secrets/>} />
      </Routes>
  {/* </Router> */}
  </HashRouter>
  )
}