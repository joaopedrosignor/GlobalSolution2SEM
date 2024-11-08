import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

export default function MoviesByGenrePage() {
    const { id } = useParams();
    const [genre, setGenre] = useState({});
    const [filmes, setFilmes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch genre name
        fetch(`https://api.themoviedb.org/3/genre/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
            .then(response => response.json())
            .then(data => setGenre(data))
            .catch(err => console.error("Erro ao buscar o gênero:", err));

        // Fetch movies by genre
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7c572a9f5b3ba776080330d23bb76e1e&with_genres=${id}&language=pt-br`)
            .then(response => response.json())
            .then(data => {
                setFilmes(data.results);
                setIsLoading(false);
            })
            .catch(err => console.error("Erro ao buscar filmes por gênero:", err));
    }, [id]);

    return (
        <>
            <h1 className="text-center text-3xl font-bold my-4">{genre.name || "Gênero"}</h1>
            
            {isLoading ? (
                <p>Carregando filmes...</p>
            ) : (
                <section className="flex flex-wrap justify-center gap-4">
                    {filmes.map(filme => (
                        <MovieCard key={filme.id} {...filme}></MovieCard>
                    ))}
                </section>
            )}
        </>
    );
}
