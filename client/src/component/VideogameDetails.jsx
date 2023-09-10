const VideogameDetails = ({ videogame}) => {
    return (
        <div className="VideogameDetails">
           <h1> {videogame.title}</h1>
           <h2>{videogame.platform}</h2>
           <h2>{videogame.PEGI}</h2>
           <h2>{videogame.price}</h2>
        </div>
    )
}

export default VideogameDetails