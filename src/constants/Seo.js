import { content } from "./Content";
import ogImage from "../assets/photosAccueil/backgroundHome.jpg";
import logo from "../assets/logoNB.png";

export const SITE_URL = "https://www.ateliergabrielsantos.com";
export const SITE_NAME = "L'atelier Gabriel Santos";

const absolute = (path) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

export function buildMeta({ title, description, path, image = ogImage }) {
    const url = absolute(path);
    const imageUrl = absolute(image);
    return [
        { title },
        { name: "description", content: description },
        { tagName: "link", rel: "canonical", href: url },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "fr_FR" },
        { property: "og:site_name", content: SITE_NAME },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:image", content: imageUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: imageUrl },
    ];
}

export const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#atelier`,
    name: SITE_NAME,
    description: content.about.text,
    url: `${SITE_URL}/`,
    logo: absolute(logo),
    image: absolute(ogImage),
    telephone: content.contact.phone.text,
    email: content.contact.email.text,
    founder: {
        "@type": "Person",
        name: content.name,
        jobTitle: "Architecte HMONP",
    },
    address: {
        "@type": "PostalAddress",
        streetAddress: "3 Place du Marché",
        addressLocality: "Couilly-Pont-aux-Dames",
        postalCode: "77860",
        addressRegion: "Île-de-France",
        addressCountry: "FR",
    },
    areaServed: [
        { "@type": "AdministrativeArea", name: "Île-de-France" },
        { "@type": "AdministrativeArea", name: "Seine-et-Marne" },
    ],
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
    },
    sameAs: [content.social_media.linkedin.url, content.social_media.instagram.url],
};
