import { useEffect, useState } from "react"

export default function GenreListPage(){
    const [genre, setGenre] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
            .then( data => data.json())
            .then( data => {
                setGenre(data.genres)
            })
            .catch(err => console.log(err))
            .finally(() => console.log('Fim'))
    }, [])
    return(
        <>
        <h1>Genre Page</h1>
        <section className="flex flex-wrap justify-between gap-4">
            {
                genre.map(genre => (
                  <p>{genre.name}</p>
              ))
            }
        </section>
        </>
    )
}