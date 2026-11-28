import { buildMeta } from "../constants/Seo";
import { content } from "../constants/Content";
import { Link } from "react-router";
import Container from "../components/layout/Container";

// Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Pagination, Navigation } from "swiper/modules";

// Images
import backgroundHome from "../assets/photosAccueil/backgroundHome.webp";
import backgroundHomeSrcset from "../assets/photosAccueil/backgroundHome.webp?w=960;1600&format=webp&as=srcset";
import logo from "../assets/logoNB.png";
import matiereArgile from "../assets/photosAccueil/matiereArgile.webp";
import matiereBois from "../assets/photosAccueil/matiereBois.webp";
import matierePaille from "../assets/photosAccueil/matierePaille.webp";
import projet1 from "../assets/photosProjets/projet1/001-1-MICRO HABITAT 01-Vue EXT 01.webp";
import projet1Srcset from "../assets/photosProjets/projet1/001-1-MICRO HABITAT 01-Vue EXT 01.webp?w=960;1600&format=webp&as=srcset";
import projet2 from "../assets/photosProjets/projet2/002-1-FAMILY HOUSE 01-Vue EXT 01.webp";
import projet2Srcset from "../assets/photosProjets/projet2/002-1-FAMILY HOUSE 01-Vue EXT 01.webp?w=960;1600&format=webp&as=srcset";
import projet3 from "../assets/photosProjets/projet3/004-1-MICRO HABITAT 02-Vue EXT 01.webp";
import projet3Srcset from "../assets/photosProjets/projet3/004-1-MICRO HABITAT 02-Vue EXT 01.webp?w=960;1600&format=webp&as=srcset";
import serviceConstructionNeuve from "../assets/photosServices/constructionNeuve.webp";
import serviceRenovation from "../assets/photosServices/renovation.webp";
import serviceEquipementPublic from "../assets/photosServices/equipementPublic.webp";
import serviceExtension from "../assets/photosServices/extension.webp";
import serviceAmenagementInterieur from "../assets/photosServices/amenagementInterieur.webp";
import serviceMobilier from "../assets/photosServices/mobilier.webp";

const services = [
    { 
        src: serviceConstructionNeuve, 
        alt: content.services.new_construction.alt, 
        description: content.services.new_construction.title, 
        hash: "#construction-neuve" 
    },
    { 
        src: serviceRenovation, 
        alt: content.services.renovation.alt, 
        description: content.services.renovation.title, 
        hash: "#renovation" 
    },
    { 
        src: serviceExtension, 
        alt: content.services.extension.alt, 
        description: content.services.extension.title, 
        hash: "#extension" 
    },
    { 
        src: serviceAmenagementInterieur, 
        alt: content.services.interior_design.alt, 
        description: content.services.interior_design.title, 
        hash: "#amenagement-interieur-et-mobilier" 
    },
    { 
        src: serviceMobilier, 
        alt: content.services.furniture.alt, 
        description: content.services.furniture.title, 
        hash: "#amenagement-interieur-et-mobilier" 
    },
    { 
        src: serviceEquipementPublic, 
        alt: content.services.public_facilities.alt, 
        description: content.services.public_facilities.title, 
        hash: "#equipement-public" 
    },
];

// Seule la diapositive affichée reste accessible au clavier et aux lecteurs d'écran
function updateInertSlides(swiper) {
    swiper.slides.forEach((slide, index) => {
        slide.inert = index !== swiper.activeIndex;
    });
}

export const meta = () => buildMeta({
    title: content.meta.accueil.title,
    description: content.meta.accueil.description,
    path: "/",
});

export default function AccueilPage() {
    
    return (
        <div>
            <div className="w-full h-full">

                {/* Section d'accueil */}
                <section aria-labelledby="hero-title" className="relative isolate h-section">
                    <img
                        src={backgroundHome}
                        // Versions réduites pour les petits écrans ; en portrait, l'image couvre la hauteur (≈ 178 % de la hauteur en largeur)
                        srcSet={`${backgroundHomeSrcset}, ${backgroundHome} 2560w`}
                        sizes="(max-aspect-ratio: 16/9) 178vh, 100vw"
                        alt={content.home.background_alt}
                        width="1600"
                        height="900"
                        fetchPriority="high"
                        decoding="async"
                        className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    {/* Voile de contraste */}
                    <div className="h-full w-full bg-ink/60 md:bg-transparent md:bg-linear-to-r md:from-ink/30 md:via-ink/60 md:via-40% md:to-ink/70">
                    <Container className="flex flex-row justify-center items-center h-full">
                        {/* Logo */}
                        <img className="h-100 w-auto invert max-md:hidden" src={logo} alt="" width="400" height="400" />
                        <div className="flex flex-col justify-start items-start">
                            <h1 id="hero-title" className="text-7xl text-chrome-50 text-left mb-5">
                                {content.home.subtitle}
                            </h1>
                            {/* Accroche */}
                            <p className="text-formatting text-subtitle text-chrome-50 text-left mb-5">
                                {content.home.second_title}
                            </p>
                            <div className="py-2 space-x-5">
                                <Link to={{ pathname: "/contact" }} className="cta-button orange-primary">
                                    {content.home.cta.contact}
                                </Link>
                                <Link to={{ pathname: "/projets"}} className="cta-button orange-secondary">
                                    {content.home.cta.projects}
                                </Link>
                            </div>
                        </div>
                    </Container>
                    </div>
                </section>

                {/* Matériaux + En savoir plus */}
                <Container className="min-h-section flex flex-col justify-center py-6 md:py-0">
                    <h2 className="pb-6 text-left w-full md:py-20">
                        {content.home.materials.title}
                    </h2>
                    <div className="grid-layout gap-y-6 w-full md:gap-y-4 md:pb-20">
                        <p className="text-formatting md:col-start-5 md:col-span-4 md:row-start-1 md:row-span-3 md:self-center lg:col-start-9 lg:col-span-4">
                            {content.home.materials.text}
                        </p>
                        <div className="col-start-3 col-span-1 row-start-2 h-20 overflow-hidden md:col-start-1 md:col-span-4 md:row-start-1 lg:col-start-1 lg:col-span-6">
                            <img className="object-cover w-full h-full" src={matiereArgile} alt={content.home.materials.clay.description} loading="lazy" decoding="async" />
                        </div>
                        <div className="col-start-1 col-span-2 row-start-2 h-20 overflow-hidden relative @container-[size] md:col-start-1 md:col-span-4 md:row-start-2 lg:col-start-1 lg:col-span-6">
                            <img className="object-cover w-full h-full md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rotate-90 md:w-[100cqh] md:h-[100cqw]" src={matiereBois} alt={content.home.materials.wood.description} loading="lazy" decoding="async" />
                        </div>
                        <div className="col-start-4 col-span-1 row-start-2 h-20 overflow-hidden md:col-start-1 md:col-span-4 md:row-start-3 lg:col-start-1 lg:col-span-6">
                            <img className="object-cover w-full h-full" src={matierePaille} alt={content.home.materials.straw.description} loading="lazy" decoding="async" />
                        </div>
                    </div>

                    {/* En savoir plus (mobile uniquement) */}
                    <nav aria-labelledby="more-title" className="mt-12 md:hidden">
                        <h2 id="more-title" className="text-left mb-4">
                            {content.home.more.title}
                        </h2>
                        <ul className="flex flex-wrap gap-x-6 gap-y-2">
                            <li>
                                <Link to="/projets" className="text-subtitle underline underline-offset-4">
                                    {content.projects.title}
                                </Link>
                            </li>
                            <li>
                                <Link to={{ pathname: "/services", hash: "#construction-neuve" }} className="text-subtitle underline underline-offset-4">
                                    {content.services.title}
                                </Link>
                            </li>
                            <li>
                                <Link to="/atelier" className="text-subtitle underline underline-offset-4">
                                    {content.atelier.title}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </Container>

                {/* Section de Projets */}
                <div className="bg-walnut-700 min-h-section flex flex-col items-center justify-center py-12 max-md:hidden">
                    <Container>
                        <h2 className="w-full text-chrome-50 text-left pb-8">
                            {content.projects.title}
                        </h2>
                    </Container>
                    <div className="grid-page w-full">
                        <div>
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': 'var(--color-cream)',
                                    '--swiper-pagination-color': 'var(--color-chrome-50)',
                                    '--swiper-pagination-bullet-inactive-color': 'var(--color-chrome-50)',
                                }}
                                slidesPerView={1}
                                onInit={updateInertSlides}
                                onSlideChange={updateInertSlides}
                                onLoopFix={updateInertSlides}
                                lazyPreloadPrevNext={1}
                                keyboard={{ enabled: true, onlyInViewport: true }}
                                a11y={{
                                    prevSlideMessage: "Projet précédent",
                                    nextSlideMessage: "Projet suivant",
                                    paginationBulletMessage: "Aller au projet {{index}}",
                                    slideLabelMessage: "Projet {{index}} sur {{slidesLength}}",
                                }}
                                spaceBetween={10}
                                pagination={{ clickable: true }}
                                loop={true}
                                navigation={true}
                                modules={[A11y, Keyboard, Pagination, Navigation]}
                                className="mx-auto aspect-video w-[min(100%,calc((100svh-var(--spacing-header)-16rem)*16/9))]"
                            >
                                <SwiperSlide>
                                    <Link to={`/projets/${content.projects.project_1.url}`} className="group relative block h-full w-full overflow-hidden">
                                        <img loading="lazy" decoding="async" src={projet1} srcSet={`${projet1Srcset}, ${projet1} 2560w`} sizes="(min-width: 69rem) 69rem, 100vw" alt="" className="h-full w-full object-cover" />
                                        {/* Dégradé sous le titre */}
                                        <div className="absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-ink/80 via-ink/60 to-transparent px-6 pt-20 pb-10 text-center">
                                            <h3 className="text-4xl text-chrome-50 underline-offset-4 group-hover:underline">
                                                {content.projects.project_1.title}
                                            </h3>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={`/projets/${content.projects.project_2.url}`} className="group relative block h-full w-full overflow-hidden">
                                        <img loading="lazy" decoding="async" src={projet2} srcSet={`${projet2Srcset}, ${projet2} 2560w`} sizes="(min-width: 69rem) 69rem, 100vw" alt="" className="h-full w-full object-cover" />
                                        {/* Dégradé sous le titre */}
                                        <div className="absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-ink/80 via-ink/60 to-transparent px-6 pt-20 pb-10 text-center">
                                            <h3 className="text-4xl text-chrome-50 underline-offset-4 group-hover:underline">
                                                {content.projects.project_2.title}
                                            </h3>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={`/projets/${content.projects.project_3.url}`} className="group relative block h-full w-full overflow-hidden">
                                        <img loading="lazy" decoding="async" src={projet3} srcSet={`${projet3Srcset}, ${projet3} 2560w`} sizes="(min-width: 69rem) 69rem, 100vw" alt="" className="h-full w-full object-cover" />
                                        {/* Dégradé sous le titre */}
                                        <div className="absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-ink/80 via-ink/60 to-transparent px-6 pt-20 pb-10 text-center">
                                            <h3 className="text-4xl text-chrome-50 underline-offset-4 group-hover:underline">
                                                {content.projects.project_3.title}
                                            </h3>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <Link to={{ pathname: "/projets" }} className="cta-button walnut-secondary mt-6">
                        {content.home.cta.projects}
                    </Link>
                </div>

                {/* Section de Services */}
                <Container className="min-h-section flex flex-col justify-center py-20 max-md:hidden">
                    <h2 id="services-title" className="text-left w-full">
                        {content.services.title}
                    </h2>
                    <ul className="grid-layout gap-y-12 mt-12">
                        {services.map((service) => (
                            <li key={service.description} className="md:col-span-4">
                                <article className="group relative">
                                    <div className="overflow-hidden">
                                        <img
                                            className="aspect-3/2 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            src={service.src}
                                            alt=""
                                            width="1200"
                                            height="800"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    <h3 className="mt-4">
                                        <Link to={{ pathname: "/services", hash: service.hash }} className="underline-offset-4 after:absolute after:inset-0 group-hover:underline">
                                            {service.description}
                                        </Link>
                                    </h3>
                                </article>
                            </li>
                        ))}
                    </ul>
                </Container>

                {/* Section de Contact */}
                <div className="bg-orange-600 min-h-section text-black items-center justify-center flex flex-col">
                    <Container>
                        <div className="flex flex-row items-center justify-center max-md:flex-col">
                            <h2>
                                {content.home.contact.title}
                            </h2>
                        </div>
                        <p className="text-formatting text-xl text-left mt-12 mx-auto">
                            {content.home.contact.text}
                        </p>
                        <div className="py-2 justify-center items-center gap-6 mt-12 flex flex-row max-md:flex-col">
                            <a href={`tel:${content.contact.phone.url}`} className="cta-button orange-tertiary">
                                {content.contact.phone.text}
                            </a>
                            <a href={`mailto:${content.contact.email.text}`} className="cta-button orange-secondary">
                                {content.contact.email.text}
                            </a>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}       