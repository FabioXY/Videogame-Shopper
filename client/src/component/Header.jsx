import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <div className=" text-3xl bg-gradient-to-r from-purple-400 to-pink-500 pt-3">
        <div className=" flex ">
          <img
            src="./images/logo.png"
            className="w-28 h-20 mx-3 my-3"
            alt="logoVGS"
          />
          <div className="mx-4">
            <h1 className=" flex px-5 py-2 font-semibold text-purple-900">
              Videogame Shopper
            </h1>
            <p className=" text-lg px-8 text-purple-800 font-semibold">
              {" "}
              "consigliato da 11 videogiocatori su 10"
            </p>
          </div>
          <div className=" flex space-x-24 ml-20">
            <img src="./images/ryu.png" alt="ryu" className="h-28 flex justify-end"/>
            <img src="./images/fireball.png" className=" h-14 mt-2 w-24" alt="fireball" />
            <img src="./images/lee.png" className="h-28" alt="lee" />
            <img src="./images/link.png" className="h-28 pr-3" alt="link" />
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
}

export default Header;
