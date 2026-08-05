import logo from "../assets/logoNB.png";
import { content } from "../constants/Content";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="w-full flex bg-white justify-center md:justify-between items-center text-black py-3 px-2 md:px-12 sticky top-0 shadow-md z-50">
            <title>
                {content.title}
            </title>
            <Link to="/">
                <img src={logo} alt="Logo" className="w-12 hover:scale-105 transition-all" />
            </Link>
            <nav>
                <ul className="flex max-md:ml-10  md:space-x-10 space-x-4 md:text-lg font-medium">
                    <li>
                        <Link to="/" className="hover:text-gray-700">
                            {content.home.title}
                        </Link>
                    </li>
                    <li>
                        <Link to="/projets" className="hover:text-gray-700">
                            {content.projects.title}
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className="hover:text-gray-700">
                            {content.services.title}
                        </Link>
                    </li>
                    <li>
                        <Link to="/atelier" className="hover:text-gray-700">
                            {content.atelier.title}
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-700">
                            {content.contact.title}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
