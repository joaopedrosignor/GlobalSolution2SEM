import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetailPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [cast, setCast] = useState([]);
    const [trailer, setTrailer] = useState("");

    useEffect(() => {
        // Fetch movie details
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
            .then(data => data.json())
            .then(data => setMovie(data))
            .catch(err => console.log(err));

        // Fetch movie cast
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
            .then(data => data.json())
            .then(data => {
                setCast(data.cast.slice(0, 5)); // Limita aos primeiros 5 membros do elenco
            })
            .catch(err => console.log(err));

        // Fetch movie trailer
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
            .then(data => data.json())
            .then(data => {
                const trailerData = data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
                if (trailerData) {
                    setTrailer(`https://www.youtube.com/embed/${trailerData.key}`);
                }
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <>
            <div className="w-full flex justify-center items-center flex-col my-0 py-0" 
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/w1280${movie.backdrop_path}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    aspectRatio: "16/9"
                }}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">{movie.title}</h1>
            </div>
            <div className="p-8">
                <h1 className="text-2xl">Sinopse</h1>
                <p className="text-lg mt-4">{movie.overview}</p>
                <h1 className="text-2xl mt-4">Data de Lançamento: {movie.release_date}</h1>
                <h1 className="text-xl mt-4">Nota: {movie.vote_average}</h1>
                
                <h2 className="text-2xl mt-8">Elenco Principal</h2>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-4">
                    {cast.map(actor => (
                        <li key={actor.id} className="text-center">
                            {actor.profile_path ? (
                                <img 
                                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} 
                                    alt={actor.name} 
                                    className="rounded-lg w-full mb-2"
                                />
                            ) : (
                                <div className="w-full h-[200px] flex items-center justify-center bg-gray-300 rounded-lg mb-2">
                                    <span className="text-sm">Foto não disponível</span>
                                </div>
                            )}
                            <h3 className="text-lg font-semibold">{actor.name}</h3>
                            <p className="text-sm text-gray-500">{actor.character}</p>
                        </li>
                    ))}
                </ul>

                {/* Trailer Section */}
                {trailer && (
                    <div className="mt-8">
                        <h2 className="text-2xl mb-4">Trailer</h2>
                        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                            <iframe 
                                src={trailer} 
                                title="Trailer do Filme"
                                className="absolute top-0 left-0 w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
