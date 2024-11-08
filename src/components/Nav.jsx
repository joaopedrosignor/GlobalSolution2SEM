import { NavLink } from "react-router-dom";
import { useState } from "react";
import {FaTimes} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"
import { PiFilmSlateDuotone } from "react-icons/pi";


export default function Header(){
    const content = 
        <>
            <div className="lg:hidden block absolute top-full w-full left-0 right-0 bg-purple-900 transition z-50 ">
                <ul className="text-center text-xl p-20">
                    <NavLink spy={true} smooth={true} to='/'><li className="my-4 py-4 border-b border-purple-800 hover:bg-purple-800 hover:rounded">Home</li></NavLink>
                    <NavLink spy={true} smooth={true} to='/movies'><li className="my-4 py-4 border-b border-purple-800 hover:bg-purple-800 hover:rounded">Filmes</li></NavLink>
                    <NavLink spy={true} smooth={true} to='/genre'><li className="my-4 py-4 border-b border-purple-800 hover:bg-purple-800 hover:rounded">Gêneros</li></NavLink>
                    <NavLink spy={true} smooth={true} to='/contato'><li className="my-4 py-4 border-b border-purple-800 hover:bg-purple-800 hover:rounded">Contato</li></NavLink>
                </ul>
            </div>
        </>
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <nav className="relative">
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 bg-purple-900">
                <div className="flex items-center flex-1">
                    <NavLink to='/'>
                        <span className="text-3xl font-bold"><PiFilmSlateDuotone /></span>
                    </NavLink>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <NavLink spy={true} smooth={true} to='/'><li className="hover:text-fuchsia-600 transition border-b-2 border-purple-900 hover:border-fuchsia-600 cursor-pointer">Home</li></NavLink>
                            <NavLink spy={true} smooth={true} to='/movies'><li className="hover:text-fuchsia-600 transition border-b-2 border-purple-900 hover:border-fuchsia-600 cursor-pointer">Filmes</li></NavLink>
                            <NavLink spy={true} smooth={true} to='/genre'><li className="hover:text-fuchsia-600 transition border-b-2 border-purple-900 hover:border-fuchsia-600 cursor-pointer">Gênero</li></NavLink>
                            <NavLink spy={true} smooth={true} to='/contato'><li className="hover:text-fuchsia-600 transition border-b-2 border-purple-900 hover:border-fuchsia-600 cursor-pointer">Contato</li></NavLink>
                        </ul>
                    </div>
                </div>
                <div>
                    {isOpen && content}
                </div>
                <button className="block md:hidden transition" onClick={toggleNavbar}>
                    {isOpen ? <FaTimes/> : <CiMenuFries/>}
                </button>
            </div>
        </nav>
    )
}