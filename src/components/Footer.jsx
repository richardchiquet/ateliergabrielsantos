import { content, contactLinks, serviceList, socials } from "../constants/Content";
import { Link } from "react-router";
import Container from "./layout/Container";
import ExternalLink from "./ExternalLink";
import LegalLinks from "./LegalLinks";

const linkClass = "underline-offset-4 hover:underline";

export default function Footer() {
    return (
        <footer className="bg-greige-100 py-12 max-md:hidden">
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
                        {serviceList.map((service) => (
                            <li key={service.id}>
                                <Link to={{ pathname: "/services", hash: `#${service.id}` }} className={linkClass}>
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
                                <ExternalLink href={social.url} className={linkClass}>
                                    {social.title}
                                </ExternalLink>
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
                        <ExternalLink href={contactLinks.address.href} className={linkClass}>
                            {contactLinks.address.label}
                        </ExternalLink>
                    </p>
                    <p className="mt-2">
                        {content.contact.phone.title} :{" "}
                        <a href={contactLinks.phone.href} className={linkClass}>
                            {contactLinks.phone.label}
                        </a>
                    </p>
                    <p className="mt-2">
                        {content.contact.email.title} :{" "}
                        <a href={contactLinks.email.href} className={`break-all ${linkClass}`}>
                            {contactLinks.email.label}
                        </a>
                    </p>
                </address>

                <LegalLinks className="col-span-full" linkClassName={linkClass} />
            </Container>
        </footer>
    );
}
