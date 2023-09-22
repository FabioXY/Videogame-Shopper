import React from "react";

function Home() {
  return (
    <div className="relative h-screen bg-homeBg bg-cover bg-no-repeat">
      <div className="relative h-full">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="flex flex-col justify-center items-center h-full text-white relative">
          <h1 className="font-bold px-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)] text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-retroFont relative z-10">
            Videogame Shopper
          </h1>
          <div className="flex mt-24 gap-28">
            <button className="text-3xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 py-4 px-7 rounded-2xl font-semibold text-purple-200">
              Shop
            </button>
            <button className="text-3xl text-purple-200 font-semibold py-7 bg-gradient-to-r from-fuchsia-600 to-pink-600 px-7 rounded-2xl">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
