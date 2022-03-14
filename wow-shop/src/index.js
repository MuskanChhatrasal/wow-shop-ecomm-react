import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../src/Components/Home/home';
import Products from '../src/Components/Products/products'
import Wishlist from "./Components/Wishlist/wishlist";
import Cart from "./Components/Cart/cart";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="products" element={<Products />} />
     <Route path="wishlist" element={<Wishlist />} />
     <Route path="cart" element={<Cart />} />
   </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
