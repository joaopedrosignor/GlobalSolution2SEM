import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroSection from "../components/HeroSection";


export default function EnergiaDetailPage() {
    const { id } = useParams();
    const [energia, setEnergia] = useState({});

    useEffect(() => {
        fetch(`https://6735efd15995834c8a94b57e.mockapi.io/spc/energias/${id}`)
            .then(data => data.json())
            .then(data => setEnergia(data))
            .catch(err => console.log(err))       
    }, [id]);

    return (
        <>
            <HeroSection 
                titulo={`${energia.nome}`}
                url={`${energia.imagem}`}
            />
            <div className="p-8">
                
                <h1 className="text-3xl mt-4">Descrição:</h1>
                <p className=" text-slate-200 mt-4">{energia.descricao}</p>
                <h1 className="text-3xl mt-4">Tecnologias:</h1>
                <p className=" text-slate-200 mt-4">{energia.tecnologias}</p>
                <h1 className="text-3xl mt-4">Desafios:</h1>
                <p className=" text-slate-200 mt-4">{energia.desafios}</p>
                <h1 className="text-3xl mt-4">Benefícios:</h1>
                <p className=" text-slate-200 mt-4">{energia.beneficios}</p>

            </div>
        </>
    );
}
