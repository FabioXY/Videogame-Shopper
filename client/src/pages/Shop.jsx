import React from "react";
import { useEffect, useState } from "react";

function Shop() {
  const [videogames, setVideogames] = useState(null);

  useEffect(() => {
    const fetchVideogames = async () => {
      const response = await fetch("http://localhost:5173/shop");
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
            {" "}
            key={videogame._id}
            {videogame.title}
          </p>
        ))}
    </div>
  );
}

export default Shop;
