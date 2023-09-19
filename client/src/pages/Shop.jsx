import React, { useEffect } from "react";
import VideogameDetails from "../component/VideogameDetails";
import { useVideogamesContext } from "../hooks/useVideogamesContext";

function Shop() {
  const {videogames, dispatch} = useVideogamesContext()

  useEffect(() => {
    const fetchVideogames = async () => {
        const response = await fetch("http://localhost:5174/");
        const json = await response.json();
        if (response.ok) {
          dispatch({type: 'SET_VIDEOGAMES', payload: json})
        }}
    fetchVideogames();
  }, []);

  return (
    <div className="videogames">
      {videogames &&
        videogames.map((videogame) => (
          <VideogameDetails key={videogame._id} videogame={videogame} />
        ))}
    </div>
  );
}

export default Shop;
