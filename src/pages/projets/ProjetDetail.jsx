import { absolute, buildMeta, pageTitle, websiteUrl } from "../../constants/Seo";
import { content } from "../../constants/Content";
import Container from "../../components/layout/Container";
import { useParams, Link } from "react-router";
import { useState } from "react";

// Projects
import "./projet.css";
import { getProjetByUrl, getProjetDetails } from "./ProjetsConfig";
import NotFound, { meta as notFoundMeta } from "../NotFound";

// Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, FreeMode, Keyboard, Navigation, Thumbs } from "swiper/modules";

const a11y = {
  prevSlideMessage: "Image précédente",
  nextSlideMessage: "Image suivante",
  firstSlideMessage: "Première image",
  lastSlideMessage: "Dernière image",
  slideLabelMessage: "Image {{index}} sur {{slidesLength}}",
};

export const meta = ({ params }) => {
  const projet = getProjetByUrl(params.projetId);

  if (!projet) return notFoundMeta();

  const { title, description } = projet.content;
  const path = `/projets/${params.projetId}`;

  return buildMeta({
    title: pageTitle(title),
    description: projet.content.meta_description,
    path,
    image: projet.coverOg,
    imageAlt: `${title}, projet de l'atelier Gabriel Santos`,
    breadcrumb: [
      [
        content.projects.title, 
        "/projets"
      ], 
      [
        title, 
        path
      ]
    ],
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: title,
        description: description.replace(/\s+/g, " ").trim(),
        url: absolute(path),
        image: absolute(projet.cover),
        creator: { "@id": `${websiteUrl}/#atelier` },
        inLanguage: "fr-FR",
        ...(projet.category && { genre: projet.category }),
        ...(projet.location && { locationCreated: { "@type": "Place", name: projet.location } }),
        ...(projet.year && { dateCreated: projet.year }),
      },
    ],
  });
};

// Réglages des carrousels
const mainKeyboard = { enabled: true, onlyInViewport: true };
const mainModules = [A11y, Keyboard, Navigation, Thumbs];
const thumbsModules = [FreeMode, Thumbs];

export default function ProjetDetail() {
  const { projetId } = useParams();
  const projet = getProjetByUrl(projetId);

  if (!projet) return <NotFound />;

  // key permet de forcer le rechargement du composant ProjetPage si l'URL change (ex. navigation entre projets)
  return <ProjetPage key={projetId} projet={projet} />;
}

function ProjetPage({ projet }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { color, content: projetContent, images } = projet;
  const details = getProjetDetails(projet);

  return (
    <div className={`w-full min-h-section ${color}`}>
      <Container className="grid-layout place-items-start content-start relative min-h-section">
        <Link to="/projets" className="inline-flex min-h-11 items-center gap-2 underline-offset-4 hover:underline">
          {content.projects.back}
        </Link>
        <div className="mb-6">
          <h1>
            {projetContent.title}
          </h1>
          {/* Informations compactes sous le titre */}
          {details.length > 0 && (
            <dl className="text-small mt-2 grid grid-cols-2 gap-x-(--grid-gutter) gap-y-1 md:flex md:flex-wrap md:gap-x-6">
              {details.map(([label, value]) => (
                <div key={label} className="flex gap-1">
                  <dt>{label} :</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        {/* Carrousel sur toute la largeur du contenu */}
        <div className="w-full">
          <Swiper
            rewind
            lazyPreloadPrevNext={1}
            keyboard={mainKeyboard}
            a11y={a11y}
            spaceBetween={10}
            navigation
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={mainModules}
            className="mySwiper2"
          >
            {images.map((image, index) => (
              <SwiperSlide key={image.src}>
                <img
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes="(min-width: 69rem) 69rem, 100vw"
                  alt={`${projetContent.title} – ${image.label}`}
                  // Première image : affichée tout de suite et chargée en priorité (LCP)
                  {...(index === 0 ? { fetchPriority: "high" } : { loading: "lazy" })}
                  decoding="async"
                  className={image.isDrawing ? "is-drawing" : undefined}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="max-md:hidden mt-3">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={Math.min(9, images.length)}
              freeMode
              watchSlidesProgress
              modules={thumbsModules}
              className="mySwiper"
            >
              {images.map((image) => (
                <SwiperSlide key={image.src}>
                  <img src={image.src} srcSet={image.srcSet} sizes="10rem" alt="" loading="lazy" decoding="async" className={image.isDrawing ? "is-drawing" : undefined} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="mt-20 mb-20 md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-8">
          <div className="lg:mx-auto lg:max-w-[75ch]">
            <p className="text-formatting">
              {projetContent.description}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}