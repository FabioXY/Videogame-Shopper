import React from "react";
import { useEffect, useState } from "react";
import VideogameDetails from "../component/VideogameDetails"

function Shop() {
  const [videogames, setVideogames] = useState(null);

  useEffect(() => {
    const fetchVideogames = async () => {
      const response = await fetch("/api/shop");
      const json = await response.json();
      if (response.ok) {
        setVideogames(json);
      }
    };
    fetchVideogames();
  }, []);

  return (
    <div className="videogames">
      {videogames &&
        videogames.map((videogame) => (
          <p>
            <VideogameDetails key={videogame._id} videogame={videogame} / >
          </p>
        ))}
    </div>
  );
}

export default Shop;
