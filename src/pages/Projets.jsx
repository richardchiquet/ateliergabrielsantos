import Header from "../components/Header"
import Footer from "../components/Footer";
import p001 from "../assets/PhotoProjets/001-MICRO HABITAT 01-Vue EXT 01.jpg";
import p002 from "../assets/PhotoProjets/002-FAMILY HOUSE 01-Vue EXT 01.jpg";
import p003 from "../assets/PhotoProjets/004-MICRO HABITAT 02-Vue EXT 01.jpg";
import p004 from "../assets/PhotoProjets/003-1-RENOVATION INTERIEUR 01-Vue INT 01.jpg";
import p005 from "../assets/PhotoProjets/006-1-CABANON 01-Vue EXT 01.jpg";
//import p006 from "../assets/PhotoProjets/Rectangle161.png";
//import p007 from "../assets/PhotoProjets/Rectangle162.png";
//import p008 from "../assets/PhotoProjets/Rectangle163.png";
//import p009 from "../assets/PhotoProjets/Rectangle164.png";
//import p010 from "../assets/PhotoProjets/Rectangle165.png";
//import p011 from "../assets/PhotoProjets/Rectangle166.png";
import { Link } from "react-router-dom";

const projects = [
    { to: "/projets/Projet1", src: p001, alt: "Micro Habitat 1", color: "bg-chrome-400", description: "Ebauche",status: "" },
    { to: "/projets/Projet2", src: p002, alt: "Family House", color: "bg-greige-400", description: "Ebauche",status: "" },
    { to: "/projets/Projet3", src: p003, alt: "Micro Habitat 2", color: "bg-chrome-900", description: "Ebauche",status: "" },
    { to: "/projets/Projet4", src: p004, alt: "Rénovation Intérieure", color: "bg-chrome-400", description: "Ebauche",status: "" },
    { to: "/projets/Projet5", src: p005, alt: "Cabanon", color: "bg-greige-400", description: "Ebauche",status: "" },
    //{ to: "/projets/Projet6", src: p006, alt: "Projet 6", color: "bg-seafoam-300", description: "Description du projet 6",status: "En cours" },
    //{ to: "/projets/Projet7", src: p007, alt: "Projet 7", color: "bg-chrome-400", description: "Description du projet 7",status: "En cours" },
    //{ to: "/projets/Projet8", src: p008, alt: "Projet 8", color: "bg-orange-600", description: "Description du projet 8",status: "En cours" },
    //{ to: "/projets/Projet9", src: p009, alt: "Projet 9", color: "bg-chrome-400", description: "Description du projet 9",status: "En cours" },
    //{ to: "/projets/Projet10", src: p010, alt: "Projet 10", color: "bg-greige-400", description: "Description du projet 10",status: "En cours" },
    //{ to: "/projets/Projet11", src: p011, alt: "Projet 11", color: "bg-greige-400", description: "Description du projet 11",status: "En cours" },
];

export default function Projets() {
    return (
        <div>
            <Header />
            <h1 className="text-3xl font-semibold mb-6 text-left px-10 md:px-10 ml-45 py-10">Projets</h1>
            <div className="grid grid-cols-31 gap-7 px-10 mb-10 max-md:hidden">
                {projects.map((project,index) => (
                    <div key={project.to}
                         className={'col-span-12 h-110 ' + (index % 2 === 0 ? 'col-start-4' : 'col-start-17')}
                         >
                            <Link to={project.to} className="group relative block overflow-hidden h-full">
                                <div className={`absolute inset-y-0 left-0 ${project.color} w-[3%] transition-all duration-500 ease-in-out group-hover:w-full z-10`}>
                                    <span className=" m-5 absolute inset-0 flex items-end justify-start text-white text-lg font-semibold opacity-0 transition-opacity duration-300  group-hover:opacity-100">
                                        <div className="flex flex-col">
                                            <h1>{project.alt}</h1>
                                            <p className="text-sm">{project.description}</p>
                                        </div>
                                    </span>
                                    <span className=" m-5 absolute inset-0 flex items-end justify-end text-white text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        {project.status}
                                    </span>
                                </div>
                                <img src={project.src}
                                     alt={project.alt}
                                     className="block w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"/>
                            </Link>
                    </div>
                ))}
            </div>
            <div className="flex flex-col md:hidden">
                {projects.map((project) =>(
                    <div key={project.to} className="w-full h-[50%] mb-5 flex flex-col items-start justify-start">
                        <Link to={project.to} className="group relative block overflow-hidden h-full w-full">
                            <span className={`absolute inset-y-0 left-0 ${project.color} w-[5%] z-10`}>
                            </span>
                            <img src={project.src}
                                 alt={project.alt}
                                 className="block w-full h-full object-cover "/>
                            
                        </Link>
                        <div className="pt-2 pl-10 pb-10">
                            <h1 className="text-2xl font-semibold mt-2 ">{project.alt}</h1>
                            <p className="">{project.description}</p>
                            <p className="">{project.status}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
        )
    }