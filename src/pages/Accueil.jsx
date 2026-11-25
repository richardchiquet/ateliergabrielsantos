import { buildMeta } from "../constants/Seo";
import { content } from "../constants/Content";
import { projetsConfig } from "./projets/ProjetsConfig";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import MediaText from "../components/MediaText";
import Card from "../components/Card";
import Picture from "../components/Picture";
import Button from "../components/Button";
import ContactCta from "../components/ContactCta";

// Images
import backgroundHome from "../assets/photosAccueil/backgroundHome.webp";
import logo from "../assets/logoNB.png";
import matiereArgile from "../assets/photosAccueil/matiereArgile.webp";
import matiereBois from "../assets/photosAccueil/matiereBois.webp";
import matierePaille from "../assets/photosAccueil/matierePaille.webp";
import serviceConstructionNeuve from "../assets/photosServices/constructionNeuve.webp";
import serviceRenovation from "../assets/photosServices/renovation.webp";
import serviceEquipementPublic from "../assets/photosServices/equipementPublic.webp";
import serviceExtension from "../assets/photosServices/extension.webp";
import serviceAmenagementInterieur from "../assets/photosServices/amenagementInterieur.webp";
import serviceMobilier from "../assets/photosServices/mobilier.webp";

const services = [
    { src: serviceConstructionNeuve, title: content.services.new_construction.title, hash: "#construction-neuve" },
    { src: serviceRenovation, title: content.services.renovation.title, hash: "#renovation" },
    { src: serviceAmenagementInterieur, title: content.services.interior_design.title, hash: "#amenagement-interieur-et-mobilier" },
    { src: serviceMobilier, title: content.services.furniture.title, hash: "#amenagement-interieur-et-mobilier" },
    { src: serviceEquipementPublic, title: content.services.public_facilities.title, hash: "#equipement-public-et-extension" },
    { src: serviceExtension, title: content.services.extension.title, hash: "#equipement-public-et-extension" },
];

const featuredProjects = Object.entries(projetsConfig).slice(0, 3);

const materials = [
    { src: matiereArgile, alt: content.home.materials.clay.description },
    { src: matiereBois, alt: content.home.materials.wood.description },
    { src: matierePaille, alt: content.home.materials.straw.description },
];

export const meta = () => buildMeta({
    title: content.meta.accueil.title,
    description: content.meta.accueil.description,
    path: "/",
});

export default function AccueilPage() {
    return (
        <>
            {/* Héros */}
            <section aria-labelledby="hero-title" className="relative isolate flex min-h-[calc(100svh-var(--spacing-header))] items-center overflow-hidden">
                <img
                    src={backgroundHome}
                    alt={content.home.background_alt}
                    width="1600"
                    height="900"
                    fetchPriority="high"
                    decoding="async"
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                {/* Voile : 60 % d'ink partout (contraste ≥ 4.5:1 même sur une zone blanche), renforcé à gauche dès md */}
                <div className="absolute inset-0 -z-10 bg-ink/60 md:bg-linear-to-r md:from-ink/80 md:via-ink/60 md:to-ink/40" aria-hidden="true" />
                <Container className="flex items-center gap-12 py-20">
                    <img src={logo} alt="" width="192" height="192" className="hidden h-48 w-48 invert lg:block" />
                    <div className="text-chrome-50">
                        <h1 id="hero-title">{content.home.subtitle}</h1>
                        <p className="text-formatting text-subtitle mt-4">{content.home.second_title}</p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Button to="/contact" variant="primary">{content.home.cta.contact}</Button>
                            <Button to="/projets" variant="secondary">{content.home.cta.projects}</Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Matériaux */}
            <Section labelledBy="materials-title">
                <MediaText
                    imageSide="left"
                    media={
                        <div className="flex gap-4">
                            {materials.map((material) => (
                                <div key={material.src} className="flex-1">
                                    <Picture src={material.src} alt={material.alt} ratio="portrait" />
                                </div>
                            ))}
                        </div>
                    }
                >
                    <h2 id="materials-title">{content.home.materials.title}</h2>
                    <p className="text-formatting mt-6">{content.home.materials.text}</p>
                </MediaText>
            </Section>

            {/* Projets */}
            <Section bg="teal" labelledBy="projects-title">
                <h2 id="projects-title">{content.projects.title}</h2>
                <div className="grid-12 mt-12 gap-y-12">
                    {featuredProjects.map(([id, projet]) => (
                        <div key={id} className="md:col-span-6 lg:col-span-4">
                            <Card
                                to={`/projets/${id}`}
                                image={projet.cover}
                                title={projet.content.title}
                                meta={[projet.location, projet.year, projet.category].filter(Boolean).join(" · ")}
                            />
                        </div>
                    ))}
                </div>
                <div className="mt-12">
                    <Button to="/projets" variant="secondary">{content.home.cta.allProjects}</Button>
                </div>
            </Section>

            {/* Services */}
            <Section labelledBy="services-title">
                <h2 id="services-title">{content.services.title}</h2>
                <div className="grid-12 mt-12 gap-y-12">
                    {services.map((service) => (
                        <div key={service.title} className="md:col-span-6 lg:col-span-4">
                            <Card to={`/services${service.hash}`} image={service.src} title={service.title} />
                        </div>
                    ))}
                </div>
            </Section>

            <ContactCta />
        </>
    );
}
