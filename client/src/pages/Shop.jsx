import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Shop = ({ videogame }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchVideogames() {
      try {
        const response = await axios.get("http://localhost:5174/");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchVideogames();
  }, []);

  return (
    <div className=" relative bg-shopBg bg-cover bg-opacity-50 flex-col justify-center">
      {data.length > 0 ? (
        data.map((videogame) => (
          <div key={videogame._id} className="flex justify-center py-6">
            <div className=" flex items-center bg-gradient-to-l from-purple-800 via-violet-800 to-purple-700 flex-col py-4 px-8 rounded-2xl">
              <h1 className=" text-3xl font-semibold text-white mb-3 py-2">
              <Link to={`/productDetails/${videogame._id}`}>
                {videogame.title}
                </Link >
              </h1>
              <img src="https://picsum.photos/201/300" className="w-40 h-50 rounded-xl" alt="img" />
              <h2 className=" text-purple-200 font-semibold">{videogame.platform}</h2>
              <div className="flex gap-2">
              <h2 className=" text-purple-200 font-semibold ">{videogame.price}</h2>
              <p className=" text-white" >€</p>
              </div>
              <h2 className=" text-purple-200 ">{videogame.description}</h2>
            </div>
          </div>
        ))
      ) : (
        <div className=" text-3xl font-semibold text-red-600">
          No videogames found
        </div>
      )}
    </div>
  );
};

export default Shop;