import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { _id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchVideogames() {
      try {
        const response = await axios.get(`http://localhost:5174/${videogame._id}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchVideogames();
  }, [_id]);

  return (
    <div>
      {data.length > 0 ? (
        data.map((videogame) => (
          <div key={videogame._id}>
            <div className="w-full bg-purple-400 pl-4 py-2">
              <h1 className="text-3xl font-semibold py-2">
                {videogame.title}
              </h1>
              <div className="flex gap-2">
                <h3 className="text-2xl">Platform:</h3>
                <h2 className="text-2xl font-semibold p1-2">
                  {videogame.platform}
                </h2>
              </div>
              <div className="flex gap-2">
                <h3 className="text-2xl">PEGI:</h3>
                <h2 className="text-2xl font-semibold p1-2">
                  {videogame.PEGI}
                </h2>
              </div>
              <div className="flex gap-2">
                <h3 className="text-2xl">Price in €:</h3>
                <h2 className="text-2xl font-semibold p1-2">
                  {videogame.price}
                </h2>
              </div>
              <div className="flex gap-2">
                <h3 className="text-2xl">Amount of discount:</h3>
                <h2 className="text-2xl font-semibold p1-2">
                  {videogame.discount}
                </h2>
              </div>
              <div className="flex gap-2">
                <h3 className="text-2xl">Genere:</h3>
                <h2 className="text-2xl font-semibold p1-2">
                  {videogame.genere}
                </h2>
              </div>
              <div className="flex gap-2">
                <h3 className="text-2xl">Description:</h3>
                <h2 className="text-2xl font-semibold p1-2">
                  {videogame.description}
                </h2>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-2xl font-semibold text-red-700">
          No videogames found
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
