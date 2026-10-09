import Header from "../components/Header"
import { buildMeta } from "../constants/Seo";
import Footer from "../components/Footer";
import { content } from "../constants/Content";

import { Link } from "react-router";
import { projetsConfig } from "./projets/ProjetsConfig";


const projects = Object.entries(projetsConfig).map(([id, projet]) => ({
  to: `/projets/${id}`,
  src: projet.cover,
  title: projet.content.title,
  color: projet.color,
  description: projet.category,
  status: "",
}));

export const meta = () => buildMeta({
    title: content.meta.title,
    description: content.meta.description,
    path: "/projets",
});

export default function Projets() {
    return (
        <div id="top" className="min-h-screen bg-white scroll-mt-100">
            <Header />
            <h1 className="mb-6 text-left px-10 md:px-10 ml-45 py-10">
                Projets
            </h1>

            {/* Desktop */}
            <div className="grid grid-cols-31 gap-7 px-10 mb-10 max-md:hidden">
                {projects.map((project,index) => (
                    <div key={project.to} className={"col-span-12 h-110 " + (index % 2 === 0 ? "col-start-4" : "col-start-17")}>
                        <Link to={project.to} className="group relative block overflow-hidden h-full">
                            <div className={`absolute inset-y-0 left-0 ${project.color} w-[3%] transition-all duration-500 ease-in-out group-hover:w-full z-10`}>
                                <div className="m-5 absolute inset-0 flex items-end justify-start text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <div className="flex flex-col">
                                        <h2 className="text-4xl font-medium">
                                            {project.title}
                                        </h2>
                                        <p>
                                            {project.description}
                                        </p>
                                        <p>
                                            {project.status}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <img src={project.src} alt={project.title} className="block w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"/>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Mobile */}
            <div className="flex flex-col md:hidden">
                {projects.map((project) => (
                    <div key={project.to} className="w-full h-[50%] mb-5 flex flex-col items-start justify-start">
                        <Link to={project.to} className="group relative block overflow-hidden h-full w-full">
                            <div className={`absolute inset-y-0 left-0 ${project.color} w-[5%] z-10`}></div>
                            <img src={project.src}
                                 alt={project.title}
                                 className="block w-full h-full object-cover"/>
                        </Link>
                        <div className="pt-2 pl-10 pb-10">
                            <h2 className="text-4xl font-medium">
                                {project.title}
                            </h2>
                            <p>
                                {project.description}
                            </p>
                            <p>
                                {project.status}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
        )
    }