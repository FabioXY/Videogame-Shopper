import { useState } from "react";
import { useVideogamesContext } from "../hooks/useVideogamesContext";

const VideogameForm = () => {
  const {dispatch} = useVideogamesContext()
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [PEGI, setPEGI] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [genere, setGenere] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const urlBe = 'http://localhost:5174/'

  const handleSubmit = async (e) => {
    e.preventDefault()

    const videogame = {title, platform, PEGI, price, discount, genere, description}

    const response = await fetch(urlBe + 'adminPanel' , {
        method: 'POST',
        body: JSON.stringify(videogame),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
   const json = await response.json()

    if(!response.ok){
      setError(json.error)
    } 
    if (response.ok){
        setDescription("")
        setDiscount("")
        setPEGI("")
        setGenere("")
        setPrice("")
        setTitle("")
        setError(null)
        console.log('new videogame added', json)
        dispatch({type: 'CREATE_VIDEOGAME', payload: json})
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new Videogame</h1>
      <h3>Videogame Title</h3>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <h3>Add videogame platfrom:</h3>
      <input
        type="text"
        onChange={(e) => setPlatform(e.target.value)}
        value={platform}
      />

      <h3>Add PEGI age:</h3>
      <input
        type="number"
        onChange={(e) => setPEGI(e.target.value)}
        value={PEGI}
      />

      <h3>Add videogame Price:</h3>
      <input
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />

      <h3>Add % of Discount</h3>
      <input
        type="number"
        onChange={(e) => setDiscount(e.target.value)}
        value={discount}
      />

      <h3>Add Videogame Genere</h3>
      <input
        type="text"
        onChange={(e) => setGenere(e.target.value)}
        value={genere}
      />

      <h3>Videogame Description</h3>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button>Add Videogame</button>
      {error && <div className="error">{error}</div> }
    </form>
  );
};

export default VideogameForm