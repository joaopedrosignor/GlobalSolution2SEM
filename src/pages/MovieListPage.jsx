import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";


export default function MovieListPage() {
    const [search, setSearch] = useState("")
    const [filmes, setFilmes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br')
            .then(data => data.json())
            .then(data => setFilmes(data.results))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }, [])

    const handleSearch = (event) => {
        setSearch((event.target.value))
    }
    const filmesFiltrados = filmes.filter(filme => filme.title.
        toLowerCase().includes(search.toLowerCase()))
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center my-4">

                <h2 className="text-center mb-4">Veja o catálogo completo de filmes</h2>
                <input
                    className="text-black p-1 rounded-md border border-gray-300 focus:outline-none"
                    type="text"
                    id="search"
                    value={search}
                    onChange={handleSearch}
                />
            </div>
            <section className="flex flex-wrap justify-center gap-4">
                {
                    isLoading ? (
                        <p>Carregando...</p>
                    ) : filmesFiltrados.length > 0 ? (

                        filmesFiltrados.map(filme => (
                            <MovieCard key={filme.id} {...filme} />
                        ))

                    ) : (
                        <div className="w-full flex items-center justify-center text-center py-8">
                            <p>Filme não encontrado</p>
                        </div>
                    )
                }
            </section>

        </>
    )
}
