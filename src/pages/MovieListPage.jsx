import { useState, useEffect } from "react"
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard"


export default function MovieListPage() {
    const [search, setSearch] = useState("")
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br')
            .then( data => data.json())
            .then( data => setFilmes(data.results))
            .catch(err => console.log(err))
            .finally(() => console.log('Fim'))
    }, [])
    
    const handleSearch = (event) => {
        setSearch((event.target.value))
    }
    const filmesFiltrados = filmes.filter(filme => filme.title.
        toLowerCase().includes(search.toLowerCase()))
    return (
        <>
            <h2>Veja o catálogo completo de filmes</h2>
            <input
                className="text-black"
                type="text"
                id="search"
                value={search}
                onChange={handleSearch}
            />
            <section className="">

                {
                    filmesFiltrados.length > 0 ?
                    filmesFiltrados.map(filme => (
                        <div>
                        <h1>{filme.title}</h1>
                        <p>{filme.vote_average}</p>
                        <img src={`https://image.tmdb.org/t/p/w1280${filme.backdrop_path}`}/>
                        <img src={`https://image.tmdb.org/t/p/w185${filme.poster_path}`}/>
                        </div>
                    ))
                    :
                    <p>Filme não encontrado</p>
                }
            </section>
        </>
    )
}
