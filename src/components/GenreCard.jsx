import { Link } from "react-router-dom";


export default function GenreCard({ id, name }) {
    return (
        <Link to={`/genre/${id}`}>
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex items-center justify-center bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center">
                    {name}
                </p>
            </div>
        </Link>
    );
}
