import { content, serviceList, socials } from "./Content";

// Images
import ogImage from "../assets/photosAccueil/backgroundHome.webp?w=1200&h=630&fit=cover&format=jpeg&quality=82";
import logo from "../assets/logoNB.png";

export const websiteUrl = "https://www.ateliergabrielsantos.com";
export const websiteName = "L'atelier Gabriel Santos";

export const absolute = (path) => (path.startsWith("http") ? path : `${websiteUrl}${path}`);

export function breadcrumbJsonLd(items) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [[content.home.title, "/"], ...items].map(([name, path], index) => ({
            "@type": "ListItem",
            position: index + 1,
            name,
            item: absolute(path),
        })),
    };
}

// Titre de page sous 60 caractères (au-delà, Google le coupe)
export function pageTitle(name) {
    const full = `${name} | Atelier Gabriel Santos`;
    return full.length <= 60 ? full : `${name} | Gabriel Santos`;
}

// breadcrumb, cad fil d'Ariane après « Accueil »
export function buildMeta({ title, description, path, image = ogImage, imageAlt = content.home.background_alt, breadcrumb, jsonLd = [] }) {
    const url = absolute(path);
    const imageUrl = absolute(image);
    return [
        { title },
        { name: "description", content: description },
        { tagName: "link", rel: "canonical", href: url },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "fr_FR" },
        { property: "og:site_name", content: websiteName },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:image", content: imageUrl },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: imageAlt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: imageUrl },
        { name: "twitter:image:alt", content: imageAlt },
        ...(breadcrumb ? [breadcrumbJsonLd(Array.isArray(breadcrumb) ? breadcrumb : [[breadcrumb, path]])] : []),
        ...jsonLd,
    ].map((entry) => (entry["@context"] ? { "script:ld+json": entry } : entry));
}

export const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${websiteUrl}/#website`,
    name: websiteName,
    alternateName: ["Atelier Gabriel Santos", "Gabriel Santos Architecte"],
    url: `${websiteUrl}/`,
    inLanguage: "fr-FR",
    publisher: { "@id": `${websiteUrl}/#atelier` },
};

export const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${websiteUrl}/#atelier`,
    name: websiteName,
    description: content.about.text,
    url: `${websiteUrl}/`,
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
        opens: "10:00",
        closes: "17:00",
    },
    sameAs: socials.map((social) => social.url),
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: content.services.title,
        itemListElement: serviceList.map((service) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: service.title, description: service.text, areaServed: "Île-de-France" },
        })),
    },
};

// Données structurées communes à toutes les pages (injectées par root.jsx)
export const siteJsonLd = [websiteJsonLd, businessJsonLd].map((data) => JSON.stringify(data));
