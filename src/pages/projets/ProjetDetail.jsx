
import { buildMeta } from "../../constants/Seo";
import { content } from "../../constants/Content";
import Container from "../../components/layout/Container";
import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";

// Projects
import "./projet.css";
import { projetsConfig } from "./ProjetsConfig";
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
  const projet = projetsConfig[params.projetId];

  if (!projet) return notFoundMeta();

  const { title, description } = projet.content;

  return buildMeta({
    title: `${title} | Projet d'architecture | L'atelier Gabriel Santos`,
    description: description.replace(/\s+/g, " ").trim().slice(0, 155).replace(/\s\S*$/, "") + "…",
    path: `/projets/${params.projetId}`,
    image: projet.cover,
  });
};

export default function ProjetDetail() {
  const { projetId } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [images, setImages] = useState([]);
  const projet = projetsConfig[projetId];

  useEffect(() => {
    setImages([]);
    setThumbsSwiper(null);

    if (!projet) return;
    let isMounted = true;

    const entries = projet.getImageLoader();
    Promise.all(entries.map((entry) => entry.load()))
      .then((modules) => {
        if (isMounted) {
          setImages(modules.map((m, i) => ({ src: m.default, label: entries[i].label, isDrawing: entries[i].isDrawing })));
        }
      })
      .catch((error) => {
        console.error("Error loading images:", error);
      });

    return () => {
      isMounted = false;
    };
  }, [projet, projetId]);
  
  if (!projet) return <NotFound />;

  const { color, content: projetContent, category, status, location, year } = projet;

  // Seules les informations renseignées sont affichées (pas de « non défini »)
  const details = [
    [
      content.projects.category.name, 
      category
    ],
    [
      content.projects.status.name, 
      status
    ],
    [
      content.projects.location.name, 
      location
    ],
    [
      content.projects.year.name, 
      year
    ],
  ].filter(([, value]) => value);

  return (
    <div className={`w-full min-h-section ${color}`}>
      <Container className="grid-layout place-items-start content-start relative min-h-section">
        <Link to="/projets" className="inline-flex min-h-11 items-center gap-2 underline-offset-4 hover:underline">
          {content.projects.back}
        </Link>
        <div className="mb-6">
          <h1>{projetContent.title}</h1>
          {/* Informations compactes sous le titre, en petite taille (14px).
              Mobile : 2 par ligne, chacune sur 2 colonnes de la grille (même gouttière, alignées sur les colonnes 1 et 3).
              Dès md : toutes sur une ligne (retour à la ligne si besoin). */}
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
        {/* Carrousel sur toute la largeur du contenu (12 colonnes en bureau) */}
        <div className="w-full">
          {images.length === 0 ? (
            <img src={projet.cover} alt={projetContent.title} fetchPriority="high" className="aspect-video w-full object-cover" />
          ) : (
          <>
          <Swiper
            key={`${projetId}-main`}
            // Après la dernière image, retour à la toute première (rewind) au lieu d'une boucle infinie.
            // La boucle (loop) fonctionne mal avec les miniatures ; rewind les garde synchronisées.
            rewind
            initialSlide={0}
            // Précharge l'image précédente et la suivante
            lazyPreloadPrevNext={1}
            keyboard={{ enabled: true, onlyInViewport: true }}
            a11y={a11y}
            spaceBetween={10}
            navigation
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[A11y, Keyboard, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {images.map((image, index) => (
              <SwiperSlide key={`${image.src}-${index}`}>
                <img src={image.src} alt={`${projetContent.title} – ${image.label}`} loading={index === 0 ? "eager" : "lazy"} decoding="async" className={image.isDrawing ? "is-drawing" : undefined} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="max-md:hidden mt-3">
            <Swiper
              key={`${projetId}-thumbs`}
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={Math.min(9, images.length || 1)}
              freeMode
              watchSlidesProgress
              modules={[FreeMode, Thumbs]}
              className="mySwiper"
            >
              {images.map((image, index) => (
                <SwiperSlide key={`${image.src}-${index}`}>
                  <img src={image.src} alt="" loading="lazy" decoding="async" className={image.isDrawing ? "is-drawing" : undefined} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          </>
          )}
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