import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import ProductDetails from "./pages/ProductDetails";
import Contacts from "./pages/Contacts";
import Cart from "./component/Cart";
import Login from "./component/Login";
import Signup from "./component/SignUp";
import Header from "./component/Header";
import Shop from "./pages/Shop";

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adminPanel" element={<AdminPanel />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </BrowserRouter>
    </section>
  );
}

export default App;
