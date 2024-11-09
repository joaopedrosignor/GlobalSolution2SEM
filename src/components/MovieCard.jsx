import { Link } from "react-router-dom";

export default function MovieCard({id, title, backdrop_path, poster_path, vote_average}) {
    return(
        <div className="">
            <Link to={`/movies/${id}`}><img className="rounded-md " src={`https://image.tmdb.org/t/p/w185${poster_path}`}/></Link>
            
        </div>
    )

}