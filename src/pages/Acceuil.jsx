//importations
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";


//images
import mat1 from "../assets/mat1.jpg";
import mat2 from "../assets/mat2.jpg";
import mat3 from "../assets/mat3.png";
import BG1 from "../assets/BG1.jpg";
import projet1 from "../assets/PhotoProjets/001-MICRO HABITAT 01-Vue EXT 01.jpg";
import projet2 from "../assets/PhotoProjets/002-FAMILY HOUSE 01-Vue EXT 01.jpg";
import projet3 from "../assets/PhotoProjets/004-MICRO HABITAT 02-Vue EXT 01.jpg";
import service1 from "../assets/PhotoService/ConstructionNeuve.png";
import service2 from "../assets/PhotoService/Renovation.png";
import service3 from "../assets/PhotoService/EquipementPublique.png";
import service4 from "../assets/PhotoService/Extension.png";
import service5 from "../assets/PhotoService/AmenagementInterieur.png";
import service6 from "../assets/PhotoService/Mobilier.png";


const services = [
    { src: service1, alt: "Construction neuve", description: "Construction neuve", hash: "#construction-neuve" },
    { src: service2, alt: "Rénovation", description: "Rénovation", hash: "#renovation" },
    { src: service3, alt: "Équipement public", description: "Équipement public", hash: "#equipement-public-et-extension" },
    { src: service4, alt: "Extension", description: "Extension", hash: "#equipement-public-et-extension" },
    { src: service5, alt: "Aménagement intérieur", description: "Aménagement intérieur", hash: "#amenagement-interieur-et-mobilier" },
    { src: service6, alt: "Mobilier", description: "Mobilier", hash: "#amenagement-interieur-et-mobilier" }
];

export default function AcceuilPage() {
    return (
        <div>
            <Header />
            <div className=" w-full h-full ">
                {/* Section d'accueil */}
                <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${BG1})` }}>
                    <h1 className=" text-white text-7xl max-md:text-center">Gabriel Santos</h1>
                    <br />
                    <p className="text-white text-3xl text-center text">Architecte HMONP <br />Créateur d'espace sains et fonctionnels </p>
                    <br />
                    <div className="px-5 py-2 space-x-5">
                        <Link to="/contact" className="btn btn-accent bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Contactez-moi</Link>
                        <Link to="/projets" className="btn btn-secondary bg-orange-100 hover:bg-orange-200 text-black  font-bold py-2 px-4 rounded">Voir mes projets</Link>
                    </div>
                </div>

                {/* Section de Matériaux */}
                <div className="bg-white w-full min-h-screen">
                    <h1 className="text-3xl px-50 py-20 text-left w-full font-semibold max-md:px-10 max-md:py-5">Une approche par les matériaux</h1>
                    <div className='flex items-center justify-center w-full h-full max-md:hidden'>
                        <div className="px-10 my-5 space-y-3 space-x-10 grid grid-cols-9 w-[70%] h-[50%] ">
                            <div className=" col-start-1 col-end-6 h-20 max-md:hidden">
                                <div className="h-20 w-full overflow-hidden">
                                    <img className="object-cover w-full h-full" src={mat1} alt="Matériau 1" />
                                </div>
                            </div>
                            <div className=" col-start-2 col-end-7 h-20 max-md:hidden ">
                                <div className="h-20 w-full overflow-hidden ">
                                    <img className="object-cover w-full h-full" src={mat2} alt="Matériau 2" />
                                </div>
                            </div>
                            <div className=" col-start-3 col-end-8 h-20 max-md:hidden ">
                                <div className="h-20 w-full overflow-hidden">
                                    <img className="object-cover w-full h-full" src={mat3} alt="Matériau 3" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-centre items-center w-[30%] h-[50%] p-20">
                            <div>
                                Je conçois des espaces sains et fonctionnels adaptés aux usagers, que ce soit de l'habitat ou des établissements recevant du public.
                            </div>
                            <div className="mt-5">
                                Mon approche du projet se fait à travers les matériaux : de par leur aspect, leurs propriétés et leur impact environnemental. Les matériaux sont un point central dans ma démarche architecturale.
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden h-auto w-full">
                        <div className="flex flex-col ml-40 mr-5">
                            <div>
                                Je conçois des espaces sains et fonctionnels adaptés aux usagers, que ce soit de l'habitat ou des établissements recevant du public.
                            </div>
                            <div className="mt-5">
                                Mon approche du projet se fait à travers les matériaux : de par leur aspect, leurs propriétés et leur impact environnemental. Les matériaux sont un point central dans ma démarche architecturale.
                            </div>
                        </div>
                            <div className='grid grid-cols-6 gap-2 mt-5 mx-5'>
                                <img className="col-span-3 h-20 w-full object-cover" src={mat2} alt="Matériau 2" />
                                <img className="col-span-1 h-20 w-full object-cover" src={mat1} alt="Matériau 1" />
                                <img className="col-span-2 h-20 w-full object-cover" src={mat3} alt="Matériau 3" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-3xl my-10 text-left font-semibold px-10">En savoir plus</h1>
                                <Link to="/projets" className="text-xl text-left underline px-10 m-3">Projets</Link>
                                <Link to={{ pathname: "/services", hash: "#construction-neuve" }} className="text-xl text-left underline  px-10 m-3">Services</Link>
                                <Link to="/atelier" className="text-xl text-left underline px-10 m-3 ">L'atelier</Link>
                            </div>
                    </div>
                </div>
                {/* Section de Projets */}
                <div className="bg-greige-400 h-screen flex flex-col items-center justify-center max-md:hidden">
                    <h1 className="text-3xl px-50 py-10 text-left w-full font-semibold">Projets</h1>
                    <div className='w-[70%] h-[70%] flex items-center mx-auto aspect-1920/1080' >
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            pagination={{ clickable: true }}
                            loop={true}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                        >
                            <SwiperSlide>
                                <div className="h-[80%] w-[80%] mx-auto flex items-center justify-center aspect-1920/1080">
                                    <Link to="/projets/Projet1" className="h-full w-full">
                                        <img src={projet1} alt="Projet 1" className="h-full w-full object-cover" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[80%] w-[80%] mx-auto flex items-center justify-center aspect-1920/1080">
                                    <Link to="/projets/Projet2" className="h-full w-full">
                                    <img src={projet2} alt="Projet 2" className="h-full w-full object-cover" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[80%] w-[80%] mx-auto flex items-center justify-center aspect-1920/1080">
                                    <Link to="/projets/Projet3" className="h-full w-full">
                                    <img src={projet3} alt="Projet 3" className="h-full w-full object-cover" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <Link to="/projets" className="btn btn-secondary bg-primary-400 hover:bg-primary-200 hover:text-black text-white font-bold py-2 px-4 rounded mt-10">Voir tous les projets</Link>
                </div>
                {/* Section de Services */}

                <div className="bg-white h-screen flex flex-col items-center justify-center max-md:hidden">
                    <h1 className="text-3xl px-50 py-10 text-left w-full">Services</h1>
                    <div className="w-full h-full flex items-baseline justify-center px-8">
                        {services.map((service, index) => (
                            <div key={index} className="h-[80%] w-[80%] mx-auto flex items-center justify-center px-3">
                                <Link to={{ pathname: "/services", hash: service.hash }} className="h-full w-full overflow-hidden group block relative">

                                    <img src={service.src} alt={service.alt} className="h-full w-full object-cover" />
                                    <span className="absolute bottom-0 right-0 text-white text-3xl align-text-bottom " style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                                        {service.description}
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section de Contact */}
                <div className="bg-orange-600 h-screen text-black items-center justify-center flex flex-col">
                    <div>
                        <div className="flex flex-row items-start justify-center max-md:flex-col">
                            <h1 className="text-5xl">Discutons de </h1>
                            <h1 className="text-5xl ">votre projet</h1>
                        </div>
                        

                        <p className="text-lg  text-left mt-30">
                            Vous avez un projet en tête ? <br />Contactez-moi pour en discuter et nous <br />trouverons ensemble la solution adaptée <br /> à vos besoins.
                        </p>
                        <div className=" py-2 justify-center items-center space-x-5 mt-10 flex flex-row max-md:flex-col">
                            <a href="tel:+33123456789" className="bg-orange-300 hover:bg-orange-400 text-black font-bold py-2 px-4 rounded-4xl m-5">
                                06 48 70 55 28
                            </a>
                            <a href="mailto:ateliergabrielsantos@gmail.com" className="bg-orange-100 hover:bg-orange-200 text-black font-bold py-2 px-4 rounded-4xl m-5">
                                ateliergabrielsantos@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}       