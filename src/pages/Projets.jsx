import { buildMeta } from "../constants/Seo";
import { content } from "../constants/Content";
import Container from "../components/layout/Container";
import { Link } from "react-router";
import { projetsConfig } from "./projets/ProjetsConfig";

const projects = Object.entries(projetsConfig).map(([id, projet]) => ({
  to: `/projets/${id}`,
  src: projet.cover,
  title: projet.content.title,
  color: projet.color,
  // Informations renseignées uniquement, dans l'ordre : catégorie, statut, lieu, année
  details: [
    [
        content.projects.category.name, 
        projet.category
    ],
    [
        content.projects.status.name, 
        projet.status
    ],
    [
        content.projects.location.name, 
        projet.location
    ],
    [
        content.projects.year.name, 
        projet.year
    ],
  ].filter(([, value]) => value),
}));

export const meta = () => buildMeta({
    title: content.meta.projets.title,
    description: content.meta.projets.description,
    path: "/projets",
});

export default function Projets() {
    return (
        <Container className="min-h-section flex flex-col">
            <h1 className="text-left py-12">
                {content.projects.title}
            </h1>

            {/* Un seul bloc pour mobile et bureau.
                Mobile : bande de couleur à gauche, titre sous l'image.
                Bureau : la bande s'étend au survol (ou au focus clavier) et le titre apparaît sur l'image. */}
            {/* Titre de page en haut à gauche ; la grille de projets est centrée dans l'espace restant (my-auto) */}
            <ul className="grid-layout gap-y-8 mb-12 my-auto">
                {projects.map((project) => {
                    const titleId = `titre-${project.to.split("/").pop()}`;
                    return (
                        <li key={project.to} className="md:col-span-4 lg:col-span-6">
                            <article className="group relative">
                                <Link to={project.to} aria-labelledby={titleId} className="relative block overflow-hidden md:aspect-3/2">
                                    {/* Bureau / tablette : au survol (ou au focus clavier), la bande de couleur glisse de gauche à droite
                                        jusqu'à couvrir l'image (animation du site en ligne), sans zoom de l'image */}
                                    <div className={`project-slide absolute inset-y-0 left-0 z-10 w-4 ${project.color} transition-[width] duration-500 ease-in-out md:group-hover:w-full md:group-focus-within:w-full`}></div>
                                    <img className="block w-full h-full object-cover" src={project.src} alt="" />
                                </Link>
                                <div className="project-caption pt-2 pl-8 pb-12 md:pointer-events-none md:absolute md:inset-x-0 md:bottom-0 md:z-20 md:m-6 md:p-0 md:text-chrome-950 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100 md:group-hover:delay-200 md:group-focus-within:opacity-100 md:group-focus-within:delay-200">
                                    <h2 id={titleId}>
                                        {project.title}
                                    </h2>
                                    {/* Valeurs séparées par un point ; les libellés restent lisibles par les lecteurs d'écran */}
                                    <dl className="flex flex-wrap gap-x-2">
                                        {project.details.map(([label, value], index) => (
                                            <div key={label} className={index > 0 ? "flex gap-2 before:content-['·']" : "flex"}>
                                                <dt className="sr-only">{label}</dt>
                                                <dd>{value}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </article>
                        </li>
                    );
                })}
            </ul>
        </Container>
        )
    }