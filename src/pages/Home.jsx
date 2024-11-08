import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import {Swiper, SwiperSlide} from "swiper/react";

export default function Home(){
    const [filmesPopulares, setFilmesPopulares] = useState([])
    const [filmesAvaliados, setFilmesAvaliados] = useState([])
    const [filmesNaoLancados, setFilmesNaoLancados] = useState([])
    const [slidePerView, setSlidePerView] = useState(5)
    
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br')
            .then( data => data.json())
            .then( data => setFilmesPopulares(data.results))
            .catch(err => console.log(err))
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br')
            .then( data => data.json())
            .then( data => setFilmesAvaliados(data.results))
            .catch(err => console.log(err))
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br')
            .then( data => data.json())
            .then( data => setFilmesNaoLancados(data.results))
            .catch(err => console.log(err))
        function handleResize(){
            if (window.innerWidth < 580){
                setSlidePerView(3);
            }else{
                setSlidePerView(5);
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize)
        return() => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return(
        <>
            <CardContainer titulo="Filmes Populares">
                <Swiper
                    slidesPerView={slidePerView}
                >
                    {
                        filmesPopulares.map(filme => (
                            <SwiperSlide>
                                <MovieCard key={filme.id} {...filme}/>
                            </SwiperSlide>
                            
                        ))
                    }
                </Swiper>
            </CardContainer>
            <CardContainer titulo="Melhor Avaliação">
                <Swiper
                    slidesPerView={slidePerView}
                >
                    {
                        filmesAvaliados.map(filme => (
                            <SwiperSlide>
                                <MovieCard key={filme.id} {...filme}/>
                            </SwiperSlide>
                            
                        ))
                    }
                </Swiper>
            </CardContainer>
            <CardContainer titulo="Para lançar">
                <Swiper
                    slidesPerView={slidePerView}
                >
                    {
                        filmesNaoLancados.map(filme => (
                            <SwiperSlide>
                                <MovieCard key={filme.id} {...filme}/>
                            </SwiperSlide>
                            
                        ))
                    }
                </Swiper>
            </CardContainer>
        </>
    )
}