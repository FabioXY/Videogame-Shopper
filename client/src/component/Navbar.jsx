import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section>
      <div className="flex text-2xl gap-2 w-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-purple-900 shadow-xl pl-4">
        <div className=" flex gap-5 py-1">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/adminPanel">Admin Panel</Link>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
