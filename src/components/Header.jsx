import { content } from "../constants/Content";
import { Link, NavLink } from "react-router";
import { useEffect, useRef, useState } from "react";
import Container from "./layout/Container";

// Images
import logo from "../assets/logoNB.png";

const links = [
    { 
        to: "/", 
        label: content.home.title, 
        end: true 
    },
    { 
        to: "/projets", 
        label: content.projects.title 
    },
    { 
        to: "/services", 
        label: content.services.title 
    },
    { 
        to: "/atelier", 
        label: content.atelier.title 
    },
    { 
        to: "/contact", 
        label: content.contact.title 
    },
];

const socials = [
    content.social_media.linkedin,
    content.social_media.instagram,
    content.social_media.architectes_pour_tous,
];

// NavLink ajoute aria-current="page" au lien actif ; on le signale aussi visuellement.
const linkClass = "underline-offset-8 decoration-2 hover:underline aria-[current=page]:underline";

function MenuIcon({ open }) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
            ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
            )}
        </svg>
    );
}

export default function Header() {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const buttonRef = useRef(null);
    const firstLinkRef = useRef(null);

    useEffect(() => {
        if (!isMenuOpen) return;
        firstLinkRef.current?.focus();

        // Tant que le menu est ouvert : le contenu derrière n'est plus atteignable (clavier, lecteurs d'écran)
        // et la page ne défile plus
        const background = [document.querySelector('body > a[href="#contenu"]'), document.getElementById("contenu"), document.querySelector("body > footer")].filter(Boolean);
        background.forEach((el) => { el.inert = true; });
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
                buttonRef.current?.focus();
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            background.forEach((el) => { el.inert = false; });
            document.body.style.overflow = previousOverflow;
        };
    }, [isMenuOpen]);

    const close = () => setIsMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 shadow-md">
            <Container className="flex h-header items-center justify-between">
                <Link to="/" onClick={close} className="flex items-center">
                    <img src={logo} alt={content.home.logo_alt} width="48" height="48" className="h-12 w-12" />
                </Link>

                {/* Desktop */}
                <nav aria-label="Navigation principale" className="max-md:hidden">
                    <ul className="flex gap-8">
                        {links.map((link) => (
                            <li key={link.to}>
                                <NavLink to={link.to} end={link.end} className={linkClass}>
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile */}
                <button
                    ref={buttonRef}
                    type="button"
                    className="flex h-11 w-11 items-center justify-center md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="menu-mobile"
                >
                    <MenuIcon open={isMenuOpen} />
                </button>
            </Container>

            <div
                id="menu-mobile"
                className={`fixed inset-x-0 top-header bottom-0 overflow-y-auto bg-cream md:hidden ${isMenuOpen ? "block" : "hidden"}`}
            >
                <nav aria-label="Navigation mobile">
                    <ul className="flex flex-col items-center gap-8 py-12">
                        {links.map((link, index) => (
                            <li key={link.to}>
                                <NavLink
                                    ref={index === 0 ? firstLinkRef : undefined}
                                    to={link.to}
                                    end={link.end}
                                    onClick={close}
                                    className={`text-subtitle ${linkClass}`}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav aria-labelledby="menu-mobile-reseaux" className="mx-4 py-8">
                    <h2 id="menu-mobile-reseaux" className="text-eyebrow mb-4 text-center">
                        {content.social_media.title}
                    </h2>
                    <ul className="flex flex-col items-center gap-4">
                        {socials.map((social) => (
                            <li key={social.url}>
                                <a href={social.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                    {social.title}
                                    <span className="sr-only"> (nouvel onglet)</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
