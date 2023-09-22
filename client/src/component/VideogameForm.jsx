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
    <>
    <div className=" flex justify-center">
    <form onSubmit={handleSubmit}>
      <h1 className=" text-2xl font-semibold py-4 bg-gradient-to-r from-purple-400 to-pink-600 px-5 rounded-xl mb-6 mt-7 ">Add Videogame Fields:</h1>
      <div className="flex-col ml-11">
      <div>
      <h3 className=" py-2 font-semibold text-xl">Videogame Title</h3>
      <input
      placeholder="es: Super Mario"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="ml-3"
      />
      </div>
      <div>
      <h3 className=" py-2 font-semibold text-xl">Add videogame platfrom:</h3>
      <input
      placeholder="es: PS5 , Nintendo Switch"
        type="text"
        onChange={(e) => setPlatform(e.target.value)}
        value={platform}
        className="ml-3"
      />
      </div>
     <div>
      <h3 className=" py-2 font-semibold text-xl">Add PEGI age:</h3>
      <input
        placeholder="es: 18"
        type="number"
        onChange={(e) => setPEGI(e.target.value)}
        value={PEGI}
        className="ml-3"
      />
      </div>
      <div>
      <h3 className=" py-2 font-semibold text-xl">Add videogame Price:</h3>
      <input
        placeholder="es : 69,99€"
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        className="ml-3"
      />
      </div>
      <div>
      <h3 className=" py-2 font-semibold text-xl">Add % of Discount</h3>
      <input
        placeholder="es: 20%"
        type="number"
        onChange={(e) => setDiscount(e.target.value)}
        value={discount}
        className="ml-3"
      />
      </div>
       <div>
      <h3 className=" py-2 font-semibold text-xl">Add Videogame Genere</h3>
      <input
      placeholder="es : RPG , Action, FPS, TPS"
        type="text"
        onChange={(e) => setGenere(e.target.value)}
        value={genere}
        className="ml-3"
      />
      </div>
       <div>
      <h3 className=" py-2 font-semibold text-xl">Videogame Description</h3>
      <input
      placeholder="es : Super Mario is a platform game series ecc.. "
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="ml-3"
      />
      </div>
      </div>
      <div>
      <button className="py-3 ml-20 my-6 rounded-full font-semibold px-4 bg text-xl  bg-purple-500">Submit</button>
      {error && <div className="error">{error}</div> }
      </div>
    </form>
    </div>
    </>
  );
};

export default VideogameForm