import React, { useEffect, useState } from "react";
import axios from "axios";

const VideogameDetails = ({ videogame }) => {
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

  const handleDelete = async (gameId) => {
    try {
      if (!gameId) {
        console.error("Invalid gameId");
        return;
      }
      const response = await axios.delete(`http://localhost:5174/${gameId}`);
      if (response.status === 200) {
        setData((prevData) => prevData.filter((game) => game._id !== gameId));
      } else {
        console.error("Failed to delete videogame.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <h1 className=" text-3xl mb-6 w-full bg-gradient-to-r from-purple-500 to-pink-600 py-4 flex justify-center font-semibold ">
          Manage Videogames:
        </h1>
        <div className="">
          {data.length > 0 ? (
            data.map((videogame) => (
              <div key={videogame._id}>
                <div className=" w-full bg-purple-400 pl-4 py-2">
                  <h1 className=" text-3xl font-semibold py-2">
                    {videogame.title}
                  </h1>
                  <div className="flex gap-2 ">
                    <h3 className=" text-2xl ">Platform:</h3>
                    <h2 className=" text-2xl font-semibold p1-2">
                      {videogame.platform}
                    </h2>
                  </div>
                  <div className="flex gap-2 ">
                    <h3 className=" text-2xl " >PEGI:</h3>
                    <h2 className=" text-2xl font-semibold p1-2">
                      {videogame.PEGI}
                    </h2>
                  </div>
                  <div className="flex gap-2 ">
                  <h3 className=" text-2xl ">Price in €:</h3>
                    <h2 className=" text-2xl font-semibold p1-2">
                      {videogame.price}
                    </h2>
                  </div>
                  <div className="flex gap-2 ">
                  <h3 className=" text-2xl ">Amount of discount:</h3>
                    <h2 className=" text-2xl font-semibold p1-2">
                      {videogame.discount}
                    </h2>
                  </div>
                  <div className="flex gap-2 ">
                  <h3 className=" text-2xl">Genere:</h3>
                    <h2 className=" text-2xl font-semibold p1-2">
                      {videogame.genere}
                    </h2>
                  </div>
                  <div className="flex gap-2 ">
                  <h3 className=" text-2xl">cover</h3>
                    <h2 className=" text-2xl font-semibold p1-2">
                      {videogame.image}
                    </h2>
                  </div>
                  <div className="flex gap-2 ">
                  <h3 className=" text-2xl ">Description:</h3>
                    <h2 className=" text-2xl font-semibold p1-2">
                      {videogame.description}
                    </h2>
                  </div>
                </div>
                <button
                  className=" bg-red-700 font-semibold my-3 py-4 px-4 text-2xl text-white rounded-full ml-3"
                  onClick={() => handleDelete(videogame._id)}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <div className=" text-2xl font-semibold text-red-700">
              No videogames found
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VideogameDetails;
