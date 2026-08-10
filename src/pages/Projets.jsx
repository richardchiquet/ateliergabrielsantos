import Header from "../components/Header"
import Footer from "../components/Footer";
//import { content } from "../constants/Content";
import { Link } from "react-router-dom";

// Images
import p001 from "../../assets/photosProjets/projet1/001-MICRO HABITAT 01-Vue EXT 01.jpg";
import p002 from "../../assets/photosProjets/projet2/002-FAMILY HOUSE 01-Vue EXT 01.jpg";
import p003 from "../../assets/photosProjets/projet3/004-MICRO HABITAT 02-Vue EXT 01.jpg";
import p004 from "../../assets/photosProjets/projet4/003-1-RENOVATION INTERIEUR 01-Vue INT 01.jpg";
import p005 from "../../assets/photosProjets/projet5/005-CABANON 01-Vue EXT 01.jpg";

const projects = [
    { 
        to: "/projets/Projet1", 
        src: p001, 
        alt: "Micro Habitat 1", 
        color: "bg-chrome-400", 
        description: "Ebauche",
        status: "" 
    },
    { 
        to: "/projets/Projet2", 
        src: p002, 
        alt: "Family House", 
        color: "bg-greige-400", 
        description: "Ebauche",
        status: "" 
    },
    { 
        to: "/projets/Projet3", 
        src: p003, 
        alt: "Micro Habitat 2", 
        color: "bg-chrome-900", 
        description: "Ebauche",
        status: "" 
    },
    { 
        to: "/projets/Projet4", 
        src: p004, 
        alt: "Rénovation Intérieure", 
        color: "bg-chrome-400", 
        description: "Ebauche",
        status: "" 
    },
    { 
        to: "/projets/Projet5", 
        src: p005, 
        alt: "Cabanon", 
        color: "bg-greige-400", 
        description: "Ebauche",
        status: "" 
    },
];

export default function Projets() {
    return (
        <div>
            <Header />
            <h1 className="text-3xl font-semibold mb-6 text-left px-10 md:px-10 ml-45 py-10">
                Projets
            </h1>
            <div className="grid grid-cols-31 gap-7 px-10 mb-10 max-md:hidden">
                {projects.map((project,index) => (
                    <div key={project.to} className={"col-span-12 h-110 " + (index % 2 === 0 ? "col-start-4" : "col-start-17")}>
                        <Link to={project.to} className="group relative block overflow-hidden h-full">
                            <div className={`absolute inset-y-0 left-0 ${project.color} w-[3%] transition-all duration-500 ease-in-out group-hover:w-full z-10`}>
                                <span className="m-5 absolute inset-0 flex items-end justify-start text-white text-lg font-semibold opacity-0 transition-opacity duration-300  group-hover:opacity-100">
                                    <div className="flex flex-col">
                                        <h1>
                                            {project.alt}
                                        </h1>
                                        <p className="text-sm">
                                            {project.description}
                                        </p>
                                    </div>
                                </span>
                                <span className="m-5 absolute inset-0 flex items-end justify-end text-white text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    {project.status}
                                </span>
                            </div>
                            <img src={project.src} alt={project.alt} className="block w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"/>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="flex flex-col md:hidden">
                {projects.map((project) => (
                    <div key={project.to} className="w-full h-[50%] mb-5 flex flex-col items-start justify-start">
                        <Link to={project.to} className="group relative block overflow-hidden h-full w-full">
                            <span className={`absolute inset-y-0 left-0 ${project.color} w-[5%] z-10`}></span>
                            <img src={project.src}
                                 alt={project.alt}
                                 className="block w-full h-full object-cover"/>
                        </Link>
                        <div className="pt-2 pl-10 pb-10">
                            <h1 className="text-2xl font-semibold mt-2">
                                {project.alt}
                            </h1>
                            <p className="">
                                {project.description}
                            </p>
                            <p className="">
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