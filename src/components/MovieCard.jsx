import { Link } from "react-router-dom";

export default function MovieCard({id, title, backdrop_path, poster_path, vote_average}) {
    return(
        <div className="">
            <h2>{title}</h2>
            {/* <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}/> */}
            <img src={`https://image.tmdb.org/t/p/w185${poster_path}`}/>
            <p>{vote_average}</p>
            <Link to={`/movies/${id}`}>Saber mais</Link>
        </div>
    )

}