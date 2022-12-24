import { useState } from "react";
import logo from "./logo.svg";

import Login from "./components/Login/Login";
import {Helmet} from 'react-helmet';
import Product from "./components/Product/Product";

import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css"
import Location from "./components/Location/Location";

function App() {
  // const [state, setState] = useState(false)

  return (
    <div className="App">
    
      <Navbar />

      <Routes>
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/product" element={<Product />} />
           <Route exact path="/location" element={<Location/>} />
      </Routes>
    </div>
  );
}

export default App;
