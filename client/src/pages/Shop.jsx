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

  return (
    <div>
      {data.length > 0 ? (
        data.map((videogame) => (
          <div key={videogame._id}>
            <div className=" ">
            <h1 className=" text-3xl font-semibold text-white">{videogame.title}</h1>
            <h2>{videogame.platform}</h2>
            <h2>{videogame.PEGI}</h2>
            <h2>{videogame.price}</h2>
            <h2>{videogame.discount}</h2>
            <h2>{videogame.genere}</h2>
            <h2>{videogame.description}</h2>
            </div>
            <button onClick={() => handleDelete(videogame._id)}>Delete</button>
          </div>
        ))
      ) : (
        <div className=" text-3xl font-semibold text-red-600">No videogames found</div>
      )}
    </div>
  );
};

export default VideogameDetails;
