import logo from "../assets/logoNB.png";
import { Link } from "react-router-dom";
import React,{useState} from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative w-full flex items-center justify-between bg-white text-black py-3 px-2 md:px-12 sticky top-0 shadow-md z-50">
            <title>Atelier Gabriel Santos</title>

            <Link to="/" className="flex items-center">
                <img src={logo} alt="Logo" className="w-12 hover:scale-105 transition-all" onClick={() => setIsMenuOpen(false)} />
            </Link>

            <button
                className="md:hidden text-2xl leading-none p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? "×" : "☰"}
            </button>

            <nav className={`md:hidden absolute left-0 top-full w-full bg-white shadow-md z-50 ${isMenuOpen ? "block" : "hidden"}`}>
                <ul className="flex flex-col items-center space-y-4 py-4 font-medium text-lg">
                    <li><Link to="/" className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>Accueil</Link></li>
                    <li><Link to="/projets" className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>Projets</Link></li>
                    <li><Link to="/services" className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                    <li><Link to="/atelier" className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>L'atelier</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                </ul>
            </nav>

            <nav className="max-md:hidden md:flex items-center gap-10">
                <ul className="flex space-x-10 text-lg font-medium">
                    <li><Link to="/" className="hover:text-gray-700">Accueil</Link></li>
                    <li><Link to="/projets" className="hover:text-gray-700">Projets</Link></li>
                    <li><Link to="/services" className="hover:text-gray-700">Services</Link></li>
                    <li><Link to="/atelier" className="hover:text-gray-700">L'atelier</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-700">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
