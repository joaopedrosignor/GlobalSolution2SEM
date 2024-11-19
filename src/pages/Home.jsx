import HeroSection from "../components/HeroSection";
import Sobre from "../components/Sobre";



export default function Home(){
    return(
        <>
            <HeroSection 
            titulo="Energia Sustentável: O Caminho para um Planeta Mais Verde"
            url="/energia-eolica.jpg"
            />
            <Sobre/>

        </>
    )
}