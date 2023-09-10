import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section>
      <div className="flex text-xl gap-2 bg-slate-500">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/adminPanel">Admin Panel</Link>
      </div>
    </section>
  );
}

export default Navbar;
