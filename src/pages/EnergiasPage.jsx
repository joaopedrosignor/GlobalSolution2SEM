import { useEffect, useState } from "react";
import EnergiaCard from "../components/EnergiaCard";
import BeneficioCard from "../components/BeneficioCard";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';



export default function EnergiasPage() {
    const [energias, setEnergias] = useState([])
    const [beneficios, setBeneficios] = useState([])

    useEffect(() => {
        fetch('https://6735efd15995834c8a94b57e.mockapi.io/spc/energias')
            .then(data => data.json())
            .then(data => setEnergias(data))
            .catch(err => console.log(err))
        fetch('https://6735efd15995834c8a94b57e.mockapi.io/spc/beneficios')
            .then(data => data.json())
            .then(data => setBeneficios(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <section className="py-10 flex flex-col justify-center items-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center w-[80%] mx-auto py-10">Energias Sustentáveis: Benefícios para um Futuro Melhor</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%]">
                    {
                        beneficios.map(beneficio => (
                            <BeneficioCard key={beneficio.id} {...beneficio} />
                        ))
                    }
                </div>
            </section>
            <section className="py-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left w-[60%] ml-4 sm:ml-10 lg:ml-16 py-10">Fontes de Energia</h1>
                <div className="flex ml-4 sm:ml-10 lg:ml-16">
                    <Swiper
                        spaceBetween={30}
                        breakpoints={{
                            // Define os números de slides por visualização em diferentes tamanhos de tela
                            0: {
                                slidesPerView: 1, // Telas pequenas (largura mínima: 0px)
                            },
                            410: {
                                slidesPerView: 2, // Continua mostrando 2 slides nessa faixa
                            },
                            768: {
                                slidesPerView: 3, // Telas médias (largura mínima: 768px)
                            },
                            1024: {
                                slidesPerView: 4, // Telas grandes (largura mínima: 1024px)
                            },
                        }}
                    >

                    {
                        energias.map(energia => (
                            <SwiperSlide>
                                <EnergiaCard key={energia.id} {...energia} />
                            </SwiperSlide>

                        ))
                    }
                    </Swiper>
                </div>
            </section>
        </>
    )
}
