import { buildMeta } from "../constants/Seo";
import { content } from "../constants/Content";
import Container from "../components/layout/Container";
import { Link } from "react-router";
import { getProjetDetails, projetsConfig } from "./projets/ProjetsConfig";

const projects = Object.values(projetsConfig).map((projet) => ({
  to: `/projets/${projet.url}`,
  src: projet.cover,
  srcSet: projet.coverSrcset,
  title: projet.content.title,
  color: projet.color,
  details: getProjetDetails(projet),
}));

export const meta = () => buildMeta({
    title: content.meta.projets.title,
    description: content.meta.projets.description,
    path: "/projets",
    breadcrumb: content.projects.title,
});

export default function Projets() {
    return (
        <Container className="min-h-section flex flex-col">
            <h1 className="text-left py-12">
                {content.projects.title}
            </h1>
            <ul className="grid-layout gap-y-8 mb-12 my-auto">
                {projects.map((project) => {
                    const titleId = `titre-${project.to.split("/").pop()}`;
                    return (
                        <li key={project.to} className="md:col-span-4 lg:col-span-6">
                            <article className="group relative">
                                <Link to={project.to} aria-labelledby={titleId} className="relative block overflow-hidden md:aspect-3/2">
                                    <div className={`project-slide absolute inset-y-0 left-0 z-10 w-4 ${project.color} transition-[width] duration-500 ease-in-out md:group-hover:w-full md:group-focus-within:w-full`}></div>
                                    <img className="block w-full h-full object-cover" src={project.src} srcSet={project.srcSet} sizes="(min-width: 48rem) 50vw, 100vw" alt="" />
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