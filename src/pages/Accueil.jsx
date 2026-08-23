import Header from "../components/Header";
import Footer from "../components/Footer";
import { content } from "../constants/Content";
import { Link } from "react-router-dom";

// Swiper
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Images
import backgroundHome from "../assets/photosAccueil/backgroundHome.jpg";
import logo from "../assets/logoNB.png";
import matiereArgile from "../assets/photosAccueil/matiereArgile.jpg";
import matiereBois from "../assets/photosAccueil/matiereBois.jpg";
import matierePaille from "../assets/photosAccueil/matierePaille.png";
import projet1 from "../assets/photosProjets/projet1/001-1-MICRO HABITAT 01-Vue EXT 01.jpg";
import projet2 from "../assets/photosProjets/projet2/002-1-FAMILY HOUSE 01-Vue EXT 01.jpg";
import projet3 from "../assets/photosProjets/projet3/004-1-MICRO HABITAT 02-Vue EXT 01.jpg";
import serviceConstructionNeuve from "../assets/photosServices/constructionNeuve.png";
import serviceRenovation from "../assets/photosServices/renovation.png";
import serviceEquipementPublic from "../assets/photosServices/equipementPublic.png";
import serviceExtension from "../assets/photosServices/extension.png";
import serviceAmenagementInterieur from "../assets/photosServices/amenagementInterieur.png";
import serviceMobilier from "../assets/photosServices/mobilier.png";

const services = [
    { 
        src: serviceConstructionNeuve, 
        alt: content.services.new_construction.title, 
        description: content.services.new_construction.title, 
        hash: "#construction-neuve" 
    },
    { 
        src: serviceRenovation, 
        alt: content.services.renovation.title, 
        description: content.services.renovation.title, 
        hash: "#renovation" 
    },
    { 
        src: serviceEquipementPublic, 
        alt: content.services.public_facilities.title, 
        description: content.services.public_facilities.title, 
        hash: "#equipement-public-et-extension" 
    },
    { 
        src: serviceExtension, 
        alt: content.services.extension.title, 
        description: content.services.extension.title, 
        hash: "#equipement-public-et-extension" 
    },
    { 
        src: serviceAmenagementInterieur, 
        alt: content.services.interior_design.title, 
        description: content.services.interior_design.title, 
        hash: "#amenagement-interieur-et-mobilier" 
    },
    { 
        src: serviceMobilier, 
        alt: content.services.furniture.title, 
        description: content.services.furniture.title, 
        hash: "#amenagement-interieur-et-mobilier" 
    }
];

export default function AccueilPage() {
    
    return (
        <div id="top" className="min-h-screen scroll-mt-100">
            <Header />
            <div className="w-full h-full">

                {/* Section d'accueil */}
                
                <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundHome})` }}>
                    <div className="flex flex-row justify-center align-center items-center  h-full w-full">
                        <img src={logo} alt={content.home.logo_alt} className="h-100 w-auto" />
                        <div className="flex flex-col justify-start items-start align-center">
                            <h1 className="text-white text-7xl text-left mb-5">
                                {content.home.subtitle}
                            </h1>
                            <h2 className="text-formatting text-white text-left mb-5">
                                {content.home.second_title}
                            </h2>
                            <div className="py-2 space-x-5">
                                <Link to={{ pathname: "/contact", hash: "top" }} className="cta-button home-primary">
                                    {content.home.cta.contact}
                                </Link>
                                <Link to={{ pathname: "/projets", hash: "top" }} className="cta-button home-secondary">
                                    {content.home.cta.projects}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section de Matériaux */}
                <div className="bg-white w-full min-h-screen">
                    <h1 className="px-50 py-20 text-left w-full max-md:px-10 max-md:py-5 mt-5">
                        {content.home.materials.title}
                    </h1>
                    <div className="flex items-center justify-center w-full h-full max-md:hidden">
                        <div className="px-10 my-5 space-y-3 space-x-10 grid grid-cols-9 w-[70%] h-[50%]">
                            <div className=" col-start-1 col-end-6 h-20 max-md:hidden">
                                <div className="h-20 w-full overflow-hidden">
                                    <img className="object-cover w-full h-full" src={matiereArgile} alt={content.home.materials.clay.description} />
                                </div>
                            </div>
                            <div className="col-start-2 col-end-7 h-20 max-md:hidden">
                                <div className="h-20 w-full overflow-hidden">
                                    <img className="object-cover w-full h-full" src={matiereBois} alt={content.home.materials.wood.description} />
                                </div>
                            </div>
                            <div className=" col-start-3 col-end-8 h-20 max-md:hidden">
                                <div className="h-20 w-full overflow-hidden">
                                    <img className="object-cover w-full h-full" src={matierePaille} alt={content.home.materials.straw.description} />
                                </div>
                            </div>
                        </div>
                        <div className="text-formatting flex flex-col justify-centre items-center w-[30%] h-[50%] p-20">
                            <div>
                                {content.home.materials.text}
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden h-auto w-full">
                        <div className="flex flex-col ml-40 mr-5">
                            <div className="text-formatting">
                                {content.home.materials.text}
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-2 mt-5 mx-5">
                            <img className="col-span-3 h-20 w-full object-cover" src={matiereBois} alt={content.home.materials.wood.description} />
                            <img className="col-span-1 h-20 w-full object-cover" src={matiereArgile} alt={content.home.materials.clay.description} />
                            <img className="col-span-2 h-20 w-full object-cover" src={matierePaille} alt={content.home.materials.straw.description} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="my-10 text-left px-10">
                                {content.home.more.title}
                            </h2>
                            <Link to="/projets" className="text-left underline px-10 m-3">
                                <h3>
                                    {content.projects.title}
                                </h3>
                            </Link>
                            <Link to={{ pathname: "/services", hash: "#construction-neuve" }} className="text-left underline px-10 m-3">
                                <h3>
                                    {content.services.title}
                                </h3>
                            </Link>
                            <Link to="/atelier" className="text-left underline px-10 m-3 pb-10">
                                <h3>
                                    {content.atelier.title}
                                </h3>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Section de Projets */}
                <div className="bg-greige-400 h-screen flex flex-col items-center justify-center max-md:hidden">
                    <h1 className="px-50 py-10 text-left w-full">
                        {content.projects.title}
                    </h1>
                    <div className="w-[70%] h-[70%] flex items-center mx-auto aspect-1920/1080">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#000000',
                                '--swiper-pagination-color': '#000000',
                            }}
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
                    <Link to={{ pathname: "/projets" , hash: "top" }} className="cta-button project-button mt-7 mb-3">
                        {content.home.cta.projects}
                    </Link>
                </div>

                {/* Section de Services */}
                <div className="bg-white h-screen flex flex-col items-center justify-center max-md:hidden">
                    <h1 className="px-50 py-10 text-left w-full">
                        {content.services.title}
                    </h1>
                    <div className="w-full h-full flex items-baseline justify-center px-8">
                        {services.map((service) => (
                            <div key={service.hash} className="h-[80%] w-[80%] mx-auto flex items-center justify-center px-3">
                                <Link to={{ pathname: "/services", hash: service.hash }} className="h-full w-full overflow-hidden group block relative">
                                    <img src={service.src} alt={service.alt} className="h-full w-full object-cover" />
                                    <span className="absolute bottom-[-0.59%] right-[-2%] text-white text-4xl align-text-bottom" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
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
                        <div className="flex flex-row items-center justify-center max-md:flex-col pl-10">
                            <h1 className="text-5xl">
                                {content.home.contact.title}
                            </h1>
                        </div>
                        <p className="text-formatting text-xl text-left mt-15 pl-10">
                            {content.home.contact.text}
                        </p>
                        <div className="py-2 justify-center items-center space-x-5 mt-10 flex flex-row max-md:flex-col">
                            <a href={`tel:${content.contact.phone.url}`} className="cta-button contact-primary m-5">
                                {content.contact.phone.text}
                            </a>
                            <a href={`mailto:${content.contact.email.text}`} className="cta-button contact-secondary m-5">
                                {content.contact.email.text}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}       