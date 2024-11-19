import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Sobre(){
    return(
        <div className="flex justify-center items-center flex-col lg:flex-row lg:justify-between lg:px-10 m-0 py-10">
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center w-[80%] lg:w-[40%]">O Futuro é Verde:  <span className="text-green-600">Energias Limpas</span> para um Planeta Sustentável</h1>
                <div className="flex flex-col justify-center items-center lg:w-[40%]">
                    <p className="text-slate-200 w-[90%] text-center pt-7 ">A energia sustentável representa o compromisso com um planeta mais saudável e equilibrado. Ao utilizar fontes como o sol, o vento, a água e a biomassa, transformamos recursos naturais em energia renovável e limpa, reduzindo emissões de gases poluentes e preservando o meio ambiente.</p>
                    <p className="text-slate-200 w-[90%] text-center pt-7 ">Além de proteger o planeta, a energia sustentável impulsiona a inovação tecnológica, promove a independência energética e gera empregos verdes, fortalecendo economias locais e globais. É uma escolha inteligente e necessária para enfrentar os desafios das mudanças climáticas e construir um futuro onde progresso e sustentabilidade caminham juntos.</p>
                    
                <Link to='/energias'>
                <button className="flex items-center justify-between  h-[50px] bg-white hover:bg-slate-200 rounded-full shadow-lg mt-7 px-3">
                    <span className="text-black font-medium ">Saiba mais</span>
                    <div className="w-[40px] h-[40px] bg-green-600 rounded-full flex items-center justify-center ml-3">
                        <span className="text-black text-lg"><FaArrowRight/></span>
                    </div>
                </button>
                </Link>

                </div>
            </div>
    )
}