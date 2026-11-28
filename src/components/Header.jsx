import { content, socials } from "../constants/Content";
import { Link, NavLink } from "react-router";
import { useEffect, useRef, useState } from "react";
import Container from "./layout/Container";
import ExternalLink from "./ExternalLink";
import LegalLinks from "./LegalLinks";

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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const buttonRef = useRef(null);
    const firstLinkRef = useRef(null);

    useEffect(() => {
        if (!isMenuOpen) return;
        firstLinkRef.current?.focus();

        const background = [document.querySelector('body > a[href="#contenu"]'), document.getElementById("contenu"), document.querySelector("body > footer")].filter(Boolean);
        background.forEach((el) => { 
            el.inert = true; 
        });
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
        <header className="sticky top-0 z-50 bg-greige-100 shadow-md">
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

            <div id="menu-mobile" className={`fixed inset-x-0 top-header bottom-0 flex-col overflow-y-auto bg-cream md:hidden ${isMenuOpen ? "flex" : "hidden"}`}>
                <nav aria-label="Navigation mobile" className="shrink-0">
                    <ul className="flex flex-col items-center gap-[min(2rem,4svh)] py-[min(3rem,4svh)]">
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

                <nav aria-labelledby="menu-mobile-reseaux" className="mx-4 shrink-0 py-[min(2rem,3svh)]">
                    <h2 id="menu-mobile-reseaux" className="text-eyebrow mb-[min(1rem,2svh)] text-center">
                        {content.social_media.title}
                    </h2>
                    <ul className="flex flex-col items-center gap-[min(1rem,2svh)]">
                        {socials.map((social) => (
                            <li key={social.url}>
                                <ExternalLink href={social.url} className={linkClass}>
                                    {social.title}
                                </ExternalLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Pas de footer en mobile : les liens légaux sont en bas du menu */}
                <LegalLinks className="mx-4 mt-auto shrink-0 pb-4" linkClassName={`inline-flex min-h-6 items-center ${linkClass}`} onNavigate={close} />
            </div>
        </header>
    );
}
