import { content } from "../constants/Content";
import { Link } from "react-router";
import Container from "./layout/Container";

const SOCIALS = [
    content.social_media.linkedin,
    content.social_media.instagram,
    content.social_media.architectes_pour_tous,
];

const linkClass = "underline-offset-4 hover:underline";

export default function Footer() {
    return (
        <footer className="py-12">
            <Container className="grid-12 gap-y-8">
                <div className="md:col-span-6 lg:col-span-3">
                    <h2 className="text-subtitle mb-4">{content.about.title}</h2>
                    <p className="text-formatting">{content.about.text}</p>
                </div>

                <nav aria-labelledby="footer-nav" className="md:col-span-6 lg:col-span-3">
                    <h2 id="footer-nav" className="text-subtitle mb-4">{content.navigation.title}</h2>
                    <ul className="flex flex-col gap-2">
                        <li><Link to="/" className={linkClass}>{content.home.title}</Link></li>
                        <li><Link to="/projets" className={linkClass}>{content.projects.title}</Link></li>
                        <li><Link to="/services" className={linkClass}>{content.services.title}</Link></li>
                        <li><Link to="/atelier" className={linkClass}>{content.atelier.title}</Link></li>
                        <li><Link to="/contact" className={linkClass}>{content.contact.title}</Link></li>
                    </ul>
                </nav>

                <nav aria-labelledby="footer-social" className="md:col-span-6 lg:col-span-3">
                    <h2 id="footer-social" className="text-subtitle mb-4">{content.social_media.title}</h2>
                    <ul className="flex flex-col gap-2">
                        {SOCIALS.map((social) => (
                            <li key={social.url}>
                                <a href={social.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                    {social.title}
                                    <span className="sr-only"> (nouvel onglet)</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <address className="not-italic md:col-span-6 lg:col-span-3">
                    <h2 className="text-subtitle mb-4">{content.contact.title}</h2>
                    <p>{content.contact.address.title} : {content.contact.address.text}</p>
                    <p className="mt-2">
                        {content.contact.phone.title} :{" "}
                        <a href={`tel:${content.contact.phone.url}`} className={linkClass}>{content.contact.phone.text}</a>
                    </p>
                    <p className="mt-2">
                        {content.contact.email.title} :{" "}
                        <a href={`mailto:${content.contact.email.text}`} className={`break-all ${linkClass}`}>{content.contact.email.text}</a>
                    </p>
                </address>
            </Container>
        </footer>
    );
}
