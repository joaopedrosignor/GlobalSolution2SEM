import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { NavLink } from "react-router-dom";


export default function Nav() {
    const content =
        <>
            <div className="lg:hidden block absolute top-full w-full h-screen left-0 right-0 bg-black transition z-50 ">
                <ul className="text-center text-xl p-20">
                    <NavLink to='/' onClick={() => toggleNavbar()}><li className="my-4 py-4 border-b border-green-600 hover:bg-green-600 hover:rounded">Home</li></NavLink>
                    <NavLink to='/energias' onClick={() => toggleNavbar()}><li className="my-4 py-4 border-b border-green-600 hover:bg-green-600 hover:rounded">Energias</li></NavLink>
                    <NavLink to='/contato' onClick={() => toggleNavbar()}><li className="my-4 py-4 border-b border-green-600 hover:bg-green-600 hover:rounded">Contato</li></NavLink>
                </ul>
            </div>
        </>

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 ${isOpen ? 'bg-black' : 'bg-transparent'}`}>
            <div className="h-10vh flex justify-between px-5 md:px-20 py-4 ">
                <div className="flex items-center flex-1">
                    <NavLink to='/'>
                        <span className="text-3xl font-bold"><MdOutlineEnergySavingsLeaf className="text-green-500"/></span>
                    </NavLink>
                </div>
                <div className="lg:flex md:flex flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8  text-[18px]">
                            <NavLink to='/'><li className="text-slate-50 hover:text-green-500 transition cursor-pointer">Home</li></NavLink>
                            <NavLink to='/energias'><li className="text-slate-50 hover:text-green-500 transition cursor-pointer">Energias</li></NavLink>
                            <NavLink to='/contato'><li className="text-slate-50 hover:text-green-500 transition cursor-pointer">Contato</li></NavLink>
                        </ul>
                    </div>
                </div>
                <div>
                    {isOpen && content}
                </div>
                <button className="block md:hidden transition" onClick={toggleNavbar}>
                    {isOpen ? <FaTimes /> : <CiMenuFries />}
                </button>
            </div>
        </nav>
    )
}