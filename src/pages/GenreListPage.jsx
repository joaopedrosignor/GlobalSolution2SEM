import { useEffect, useState } from "react";
import GenreCard from "../components/GenreCard";



export default function GenreListPage() {
    const [genre, setGenre] = useState([]);


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br')
            .then(data => data.json())
            .then(data => {
                setGenre(data.genres);
            })
            .catch(err => console.log(err))
            .finally(() => console.log('Fim'));
            
    }, []);

    return (
        <>
            <h1 className="text-3xl font-bold my-6 text-center">Gêneros</h1>
            <section className="flex flex-wrap justify-center gap-4">
        
                    {genre.map((genre) => (
                        
                            <GenreCard key={genre.id} {...genre}></GenreCard>
                        
                        ))}
                
            </section>
        </>
    );
}