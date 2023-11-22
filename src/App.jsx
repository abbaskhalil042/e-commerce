import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Order from "../src/pages/order/Order";
import Dashboard from "../src/pages/admin/dashboard/Dashboard";
import Cart from "../src/pages/cart/Cart";
import Nopage from "../src/pages/nopage/NoPage";
import Login from "./pages/registration/Login";
import SignUp from "./pages/registration/SignUp";
import ProductInfoPage from "./pages/productInfoPage/ProductInfoPage";
import AddProduct from "./pages/admin/AddProduct"
import UpdateProduct from "./pages/admin/UpdateProduct"

function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productinfopage/:id" element={<ProductInfoPage/>} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/updateproduct" element={<UpdateProduct />} />
        <Route path="/*" element={<Nopage />} />

      </Routes>
   
  );
}

export default App;
