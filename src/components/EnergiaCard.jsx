import { Link } from "react-router-dom";

export default function EnergiaCard({ id, nome, imagem }) {
    return (
        <div className="shadow-md rounded-lg overflow-hidden ">
            <Link to={`/energias/${id}`}>
                <div className="w-full h-[187.5px] object-cover flex justify-center items-center" 
                    style={{
                        backgroundImage: `url(${imagem})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                > 
                <h1 className="  [text-shadow:2px_2px_0_black]">{nome}</h1>
                    
                </div>
                
            </Link>
            {/* <p className="text-center text-gray-800 font-semibold p-2">{nome}</p> */}
        </div>
    );
}