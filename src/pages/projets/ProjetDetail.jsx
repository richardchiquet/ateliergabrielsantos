import { buildMeta, breadcrumbJsonLd, websiteUrl } from "../../constants/Seo";
import { content } from "../../constants/Content";
import Container from "../../components/layout/Container";
import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";

// Projects
import "./projet.css";
import { getProjetByUrl } from "./ProjetsConfig";
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
    title: `${title} | Atelier Gabriel Santos`.length <= 60 ? `${title} | Atelier Gabriel Santos` : `${title} | Gabriel Santos`,
    description: projet.content.meta_description,
    path,
    image: projet.coverOg,
    imageAlt: `${title}, projet de l'atelier Gabriel Santos`,
    jsonLd: [
      breadcrumbJsonLd([[content.projects.title, "/projets"], [title, path]]),
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: title,
        description: description.replace(/\s+/g, " ").trim(),
        url: `${websiteUrl}${path}`,
        image: `${websiteUrl}${projet.cover}`,
        creator: { "@id": `${websiteUrl}/#atelier` },
        inLanguage: "fr-FR",
        ...(projet.category && { genre: projet.category }),
        ...(projet.location && { locationCreated: { "@type": "Place", name: projet.location } }),
        ...(projet.year && { dateCreated: projet.year }),
      },
    ],
  });
};

export default function ProjetDetail() {
  const { projetId } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [images, setImages] = useState([]);
  const projet = getProjetByUrl(projetId);

  useEffect(() => {
    setImages([]);
    setThumbsSwiper(null);

    if (!projet) return;
    let isMounted = true;

    const entries = projet.getImageLoader();
    Promise.all(entries.map((entry) => Promise.all([entry.load(), entry.loadSrcset()])))
      .then((modules) => {
        if (isMounted) {
          setImages(modules.map(([m, srcset], i) => ({ src: m.default, srcSet: `${srcset}, ${m.default} 2560w`, label: entries[i].label, isDrawing: entries[i].isDrawing })));
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
          {images.length === 0 
            ? (
              <img src={projet.cover} alt={projetContent.title} fetchPriority="high" className="aspect-video w-full object-cover" />
            ) 
            : (
              <>
              <Swiper
                key={`${projetId}-main`}
                rewind
                initialSlide={0}
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
                    <img src={image.src} srcSet={image.srcSet} sizes="(min-width: 69rem) 69rem, 100vw" alt={`${projetContent.title} – ${image.label}`} loading={index === 0 ? "eager" : "lazy"} decoding="async" className={image.isDrawing ? "is-drawing" : undefined} />
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
                      <img src={image.src} srcSet={image.srcSet} sizes="10rem" alt="" loading="lazy" decoding="async" className={image.isDrawing ? "is-drawing" : undefined} />
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