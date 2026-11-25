import { buildMeta } from "../../constants/Seo";
import { content } from "../../constants/Content";
import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import { projetsConfig } from "./ProjetsConfig";
import NotFound, { meta as notFoundMeta } from "../NotFound";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import Picture from "../../components/Picture";
import ContactCta from "../../components/ContactCta";

const projetIds = Object.keys(projetsConfig);

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

const navLinkClass = "inline-flex min-h-11 items-center underline-offset-4 hover:underline";

export default function ProjetDetail() {
  const { projetId } = useParams();
  const [images, setImages] = useState([]);
  const projet = projetsConfig[projetId];

  useEffect(() => {
    if (!projet) return;
    let isMounted = true;
    const entries = projet.getImages();

    Promise.all(entries.map((entry) => entry.load()))
      .then((modules) => {
        if (isMounted) {
          setImages(entries.map((entry, index) => ({ ...entry, src: modules[index].default })));
        }
      })
      .catch((error) => {
        console.error("Error loading images:", error);
      });

    return () => {
      isMounted = false;
      setImages([]);
    };
  }, [projet]);

  if (!projet) return <NotFound />;

  const { color, content: projetContent, category, status, location, year } = projet;
  const index = projetIds.indexOf(projetId);
  const previousId = projetIds[(index - 1 + projetIds.length) % projetIds.length];
  const nextId = projetIds[(index + 1) % projetIds.length];

  const details = [
    [content.projects.location, location],
    [content.projects.year, year],
    [content.projects.category.name, category],
    [content.projects.status.name, status],
  ].filter(([, value]) => value);

  return (
    <>
      <Section labelledBy="projet-title">
        <Link to="/projets" className={navLinkClass}>
          <span aria-hidden="true">{content.projects.icon_back}&nbsp;</span>
          {content.projects.back}
        </Link>

        <div className={`mt-6 h-2 w-12 ${color}`} aria-hidden="true" />
        <h1 id="projet-title" className="mt-4">{projetContent.title}</h1>
        {details.length > 0 && (
          <dl className="text-small mt-4 flex flex-wrap gap-x-8 gap-y-2">
            {details.map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <dt>{label} :</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-12">
          <Picture src={projet.cover} alt={`${projetContent.title} – vue principale`} ratio="wide" priority />
        </div>

        <p className="text-formatting mt-12">{projetContent.description}</p>
      </Section>

      {images.length > 0 && (
        <Section labelledBy="gallery-title" className="pt-0 lg:pt-0">
          <h2 id="gallery-title">{content.projects.gallery}</h2>
          <ul className="grid-12 mt-12 gap-y-8">
            {images.map((image) => (
              <li key={image.src} className="md:col-span-6 lg:col-span-4">
                <a href={image.src} target="_blank" rel="noopener noreferrer" className="block">
                  <Picture
                    src={image.src}
                    alt={`${projetContent.title} – ${image.label}`}
                    ratio="landscape"
                    fit={image.isDrawing ? "contain" : "cover"}
                  />
                  <span className="sr-only"> ({content.projects.enlarge})</span>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <nav aria-label="Navigation entre projets" className="pb-20 lg:pb-30">
        <Container className="flex flex-wrap justify-between gap-4">
          <Link to={`/projets/${previousId}`} className={navLinkClass}>
            <span aria-hidden="true">←&nbsp;</span>
            {content.projects.previous} : {projetsConfig[previousId].content.title}
          </Link>
          <Link to={`/projets/${nextId}`} className={navLinkClass}>
            {content.projects.next} : {projetsConfig[nextId].content.title}
            <span aria-hidden="true">&nbsp;→</span>
          </Link>
        </Container>
      </nav>

      <ContactCta />
    </>
  );
}
