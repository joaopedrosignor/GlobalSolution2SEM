import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export default function MovieDetailPage(){
    const {id} = useParams()
    const [movie, setMovie] = useState({})
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
            .then( data => data.json())
            .then( data => {
                setMovie(data)
            })
            .catch(err => console.log(err))
            .finally(() => console.log('Fim'))
    }, [])
    return(
        <>
        <div className="h-[500px] flex justify-center items-center flex-col" style={{
            backgroundImage:`url("https://image.tmdb.org/t/p/w1280${movie.backdrop_path}")`
        }}>
            <h1 className="text-7xl">{movie.title}</h1>
        </div>
        </>
    )
}