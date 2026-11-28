import { content } from "../constants/Content";
import { Link } from "react-router";
import Container from "./layout/Container";
import { legal } from "../constants/Legal";

const socials = [
    content.social_media.linkedin,
    content.social_media.instagram,
    content.social_media.architectes_pour_tous,
];

const services = [
    { 
        hash: "#construction-neuve", 
        service: content.services.new_construction 
    },
    { 
        hash: "#renovation", 
        service: content.services.renovation 
    },
    { 
        hash: "#extension", 
        service: content.services.extension 
    },
    { 
        hash: "#amenagement-interieur", 
        service: content.services.interior_design 
    },
    { 
        hash: "#mobilier", 
        service: content.services.furniture 
    },
    { 
        hash: "#equipement-public", 
        service: content.services.public_facilities 
    },
];

const linkClass = "underline-offset-4 hover:underline";

export default function Footer() {
    return (
        <footer className="py-12 max-md:hidden">
            <Container className="grid-layout gap-y-8">
                <div className="md:col-span-4 lg:col-span-3">
                    <h2 className="text-subtitle mb-4">
                        {content.about.title}
                    </h2>
                    <p className="text-formatting">
                        {content.about.text}
                    </p>
                </div>
                
                <nav aria-labelledby="footer-services" className="md:col-span-4 lg:col-span-3">
                    <h2 id="footer-services" className="text-subtitle mb-4">
                        {content.services.title}
                    </h2>
                    <ul className="flex flex-col gap-2">
                        {services.map(({ hash, service }) => (
                            <li key={service.title}>
                                <Link to={{ pathname: "/services", hash }} className={linkClass}>
                                    {service.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav aria-labelledby="footer-social" className="md:col-span-4 lg:col-span-3">
                    <h2 id="footer-social" className="text-subtitle mb-4">
                        {content.social_media.title}
                    </h2>
                    <ul className="flex flex-col gap-2">
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

                <address className="not-italic md:col-span-4 lg:col-span-3">
                    <h2 className="text-subtitle mb-4">
                        {content.contact.title}
                    </h2>
                    <p className="mt-2">
                        {content.contact.address.title} :{" "}
                        <a href={content.contact.address.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                            {content.contact.address.text}
                        </a>
                    </p>
                    <p className="mt-2">
                        {content.contact.phone.title} :{" "}
                        <a href={`tel:${content.contact.phone.url}`} className={linkClass}>
                            {content.contact.phone.text}
                        </a>
                    </p>
                    <p className="mt-2">
                        {content.contact.email.title} :{" "}
                        <a href={`mailto:${content.contact.email.text}`} className={`break-all ${linkClass}`}>
                            {content.contact.email.text}
                        </a>
                    </p>
                </address>

                <nav aria-label={legal.links_label} className="col-span-full">
                    <ul className="flex items-center justify-center gap-x-4 [&>li]:text-xs [&>li]:leading-4 [&>li+li]:relative [&>li+li]:pl-4 [&>li+li]:before:absolute [&>li+li]:before:left-0 [&>li+li]:before:top-1/2 [&>li+li]:before:h-3 [&>li+li]:before:-translate-y-1/2 [&>li+li]:before:border-l [&>li+li]:before:border-ink/40 [&>li+li]:before:content-['']">
                        <li>
                            <Link to={legal.notice.url} className={linkClass}>
                                {legal.notice.title}
                            </Link>
                        </li>
                        <li>
                            <Link to={legal.privacy.url} className={linkClass}>
                                {legal.privacy.title}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Container>
        </footer>
    );
}
