import { Link } from "react-router-dom";

export default function EnergiaCard({ id, nome, imagem }) {
    return (
        <div className="shadow-md rounded-lg overflow-hidden">
            <Link to={`/energias/${id}`}>
                <img
                    className="w-full h-[187.5px] object-cover" // 4:3 ratio (250px width / 187.5px height)
                    src={imagem}
                    alt={nome}
                />
            </Link>
            {/* <p className="text-center text-gray-800 font-semibold p-2">{nome}</p> */}
        </div>
    );
}