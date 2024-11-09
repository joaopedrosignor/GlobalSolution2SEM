import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import {Swiper, SwiperSlide} from "swiper/react";

export default function Home(){
    const [filmesPopulares, setFilmesPopulares] = useState([])
    const [filmesAvaliados, setFilmesAvaliados] = useState([])
    const [filmesNaoLancados, setFilmesNaoLancados] = useState([])
    const [slidePerView, setSlidePerView] = useState(5)
    const [favorito, setFavorito] = useState([])
    const [verDepois, setVerDepois] = useState([])
    const [visto, setVisto] = useState([])

   
    
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

        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
        setFavorito(favoritos)
        let verDepois = JSON.parse(localStorage.getItem("verdepois")) || []
        setVerDepois(verDepois)
        let visto = JSON.parse(localStorage.getItem("vistos")) || []
        setVisto(visto)


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
            <CardContainer titulo="Minha Lista">
                
                    {
                       favorito.length > 0 ?
                       
                       <Swiper
                       slidesPerView={favorito.length < 5 ? favorito.length: slidePerView}>
                        
                        {favorito.map(filme => (

                            <SwiperSlide>
                                <MovieCard key={filme.id} {...filme}/>
                             </SwiperSlide>
                            
                        ))}
                        </Swiper>
                        :
                        <p className="text-white">Sua lista ainda está vazia
                        </p>
                    } 
                
            </CardContainer>
            <CardContainer titulo="Ver Depois">
                
                    {
                       verDepois.length > 0 ?
                       
                       <Swiper
                       slidesPerView={verDepois.length < 5 ? verDepois.length: slidePerView}>
                        
                        {verDepois.map(filme => (

                            <SwiperSlide>
                                <MovieCard key={filme.id} {...filme}/>
                             </SwiperSlide>
                            
                        ))}
                        </Swiper>
                        :
                        <p className="text-white">Sua lista ainda está vazia
                        </p>
                    } 
                
            </CardContainer>
            <CardContainer titulo="Já Assistidos">
                
                    {
                       visto.length > 0 ?
                       
                       <Swiper
                       slidesPerView={visto.length < 5 ? visto.length: slidePerView}>
                        
                        {visto.map(filme => (

                            <SwiperSlide>
                                <MovieCard key={filme.id} {...filme}/>
                             </SwiperSlide>
                            
                        ))}
                        </Swiper>
                        :
                        <p className="text-white">Sua lista ainda está vazia
                        </p>
                    } 
                
            </CardContainer>
            
        </>
    )
}