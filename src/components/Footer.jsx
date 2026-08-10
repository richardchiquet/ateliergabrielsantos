import { content } from "../constants/Content";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-primary-50 text-black py-6 px-4 flex space-between flex-wrap justify-around max-md:hidden">
            <div>
                <h3 className="mb-4">
                    {content.about.title}
                </h3>
                <p className="text-formatting max-w-xs">
                    {content.about.text}
                </p>
            </div>
            <div>
                <h3 className="mb-4">
                    {content.navigation.title}
                </h3>
                <nav>
                    <ul className="space-y-1 list-style">
                        <li>
                            <Link to="/" className="hover:text-blue-400">
                                {content.home.title}
                            </Link>
                        </li>
                        <li>
                            <Link to="/projets" className="hover:text-blue-400">
                                {content.projects.title}
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:text-blue-400">
                                {content.services.title}
                            </Link>
                        </li>
                        <li>
                            <Link to="/atelier" className="hover:text-blue-400">
                                {content.atelier.title}
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-blue-400">
                                {content.contact.title}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <h3 className="mb-4">
                    {content.social_media.title}
                </h3>
                <nav>
                    <ul className="space-y-1">
                        <li>
                            <a href={content.social_media.linkedin.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">{content.social_media.linkedin.title}</a>
                        </li>
                        <li>
                            <a href={content.social_media.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">{content.social_media.instagram.title}</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <h3 className="mb-4">
                    {content.contact.title}
                </h3>
                <p>
                    {content.contact.address.title} : {content.contact.address.text}
                </p>
                <p className="mt-1">
                    {content.contact.phone.title} : <a href={`tel:${content.contact.phone.url}`} className="hover:text-blue-400">
                        {content.contact.phone.text}
                    </a>
                </p>
                <p className="mt-1">
                    {content.contact.email.title} : <a href={`mailto:${content.contact.email.text}`} className="hover:text-blue-400">
                        {content.contact.email.text}
                    </a>
                </p>
            </div>
        </footer>
    )
}
