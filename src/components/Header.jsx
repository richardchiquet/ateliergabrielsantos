import { content } from "../constants/Content";
import { Link } from "react-router-dom";
import { useState } from "react";

// Images
import logo from "../assets/logoNB.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className=" w-full flex items-center justify-between bg-white text-black py-3 px-2 md:px-12 sticky top-0 shadow-md z-50">
            <title>
              {content.title}
            </title>

            {/* Mobile */}
            <Link to={{ pathname: "/" , hash: "#top" }} className="flex items-center">
                <button onClick={() => setIsMenuOpen(false)}>
                    <img className="w-12 hover:scale-105 transition-all" src={logo} alt={content.logo_alt} />
                </button>
            </Link>
            <button
                type="button"
                className="md:hidden leading-none p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? "×" : "☰"}
            </button>
            <nav className={`md:hidden absolute left-0 top-full w-full h-screen bg-white shadow-md z-50 ${isMenuOpen ? "block" : "hidden"}`}>
                <ul className="burger-menu flex flex-col items-center space-y-15 py-4 mt-60">
                    <li>
                        <Link to={{ pathname: "/", hash: "#top" }} className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>
                            {content.home.title}
                        </Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/projets", hash: "#top" }} className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>
                            {content.projects.title}
                        </Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/services", hash: "#top" }} className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>
                            {content.services.title}
                        </Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/atelier", hash: "#top" }} className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>
                            {content.atelier.title}
                        </Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/contact", hash: "#top" }} className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>
                            {content.contact.title}
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Desktop */}
            <nav className="max-md:hidden md:flex items-center gap-10">
                <ul className="flex space-x-10">
                    <li>
                        <Link to={{ pathname: "/"}} className="hover:text-gray-700">
                            {content.home.title}
                        </Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/projets"}} className="hover:text-gray-700">
                            {content.projects.title}
                        </Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/services"}} className="hover:text-gray-700">
                            {content.services.title}
                        </Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/atelier"}} className="hover:text-gray-700">
                            {content.atelier.title}
                        </Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/contact"}} className="hover:text-gray-700">
                            {content.contact.title}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
