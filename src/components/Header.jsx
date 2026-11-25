import { content } from "../constants/Content";
import { Link } from "react-router";
import { useState } from "react";
import Scroll from "../helpers/Scroll";

// Images
import logo from "../assets/logoNB.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full flex items-center justify-between py-3 px-2 md:px-12 sticky top-0 shadow-md z-50">
            <Scroll />
            {/* Mobile */}
            <Link to={{ pathname: "/" }} className="flex items-center">
                <input type="image" src={logo} alt={content.home.logo_alt} className="w-12 h-auto hover:scale-105 transition-all" aria-label={content.home.logo_alt} onClick={() => setIsMenuOpen(false)} />
            </Link>
            <button
                type="button"
                className="leading-none p-2 md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? "×" : "☰"}
            </button>
            <nav className={`bg-greige-50 absolute left-0 top-full w-full h-screen md:hidden ${isMenuOpen ? "block" : "hidden"}`} aria-label="Mobile Navigation">
                <ul className="burger-menu flex flex-col items-center space-y-15 m-25">
                    <li>
                        <Link to={{ pathname: "/" }} className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>
                            {content.home.title}
                        </Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/projets" }} className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>
                            {content.projects.title}
                        </Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/services" }} className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>
                            {content.services.title}
                        </Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/atelier" }} className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>
                            {content.atelier.title}
                        </Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/contact" }} className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>
                            {content.contact.title}
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Desktop */}
            <nav className="items-center gap-10 md:flex max-md:hidden" aria-label="Desktop Navigation">
                <ul className="flex space-x-10">
                    <li>
                        <Link to={{ pathname: "/" }} className="hover:text-gray-700">
                            {content.home.title}
                        </Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/projets" }} className="hover:text-gray-700">
                            {content.projects.title}
                        </Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/services" }} className="hover:text-gray-700">
                            {content.services.title}
                        </Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/atelier" }} className="hover:text-gray-700">
                            {content.atelier.title}
                        </Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/contact" }} className="hover:text-gray-700">
                            {content.contact.title}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
