import Header from "../components/Header"
import Footer from "../components/Footer";

import { Link } from "react-router-dom";
import { projetsConfig } from "./projets/ProjetsConfig";

// Images
import p1 from "../assets/photosProjets/projet1/001-1-MICRO HABITAT 01-Vue EXT 01.jpg";
import p2 from "../assets/photosProjets/projet2/002-1-FAMILY HOUSE 01-Vue EXT 01.jpg";
import p3 from "../assets/photosProjets/projet3/004-1-MICRO HABITAT 02-Vue EXT 01.jpg";
import p4 from "../assets/photosProjets/projet4/003-1-RENOVATION INTERIEUR 01-Vue INT 01.jpg";
import p5 from "../assets/photosProjets/projet5/006-1-CABANON 01-Vue EXT 01.jpg";

const thumbnails = { Projet1: p1, Projet2: p2, Projet3: p3, Projet4: p4, Projet5: p5 };

const projects = Object.entries(projetsConfig).map(([id, projet]) => ({
  to: `/projets/${id}`,
  src: thumbnails[id],
  title: projet.content.title,
  color: projet.color,
  description: projet.category,
  status: "",
}));

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
                                        <h1>
                                            {project.title}
                                        </h1>
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
                            <h1>
                                {project.title}
                            </h1>
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