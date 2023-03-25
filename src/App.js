import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css"

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
