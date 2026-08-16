import Header from "../components/Header"
import Footer from "../components/Footer";
import { content } from "../constants/Content";

import Scroll from "../components/Scroll";

// Images
import serviceConstructionNeuve from "../assets/photosServices/constructionNeuve.png";
import serviceRenovation from "../assets/photosServices/renovation.png";
import serviceEquipementPublic from "../assets/photosServices/equipementPublic.png";
import serviceExtension from "../assets/photosServices/extension.png";
import serviceAmenagementInterieur from "../assets/photosServices/amenagementInterieur.png";
import serviceMobilier from "../assets/photosServices/mobilier.png";

export default function Services() {

    return (
        <div id="top" className="min-h-screen scroll-mt-100">
            <Header />
            <Scroll />
            <div className="w-full min-h-[calc(100vh-76px)]">
                <h1 className="px-6 md:px-50 py-6 md:py-10 text-left w-full">
                    {content.services.subtitle}
                </h1>

                {/* Construction Neuve */}
                <div id="construction-neuve" className="w-full min-h-[calc(100vh-70px)] bg-white scroll-mt-100">
                    <div className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-50 md:py-10  justify-between">
                        <img src={serviceConstructionNeuve} alt="Construction Neuve" className="w-[60%] md:w-[30%] max-w-xl h-auto object-cover" />
                        <div className="flex flex-col justify-end w-full md:w-[40%]">
                            <h2 className="mb-5">
                                {content.services.new_construction.title}
                            </h2>
                            <p className="mb-3">
                                {content.services.new_construction.text}
                            </p>
                            <ul className="list-disc mx-5">
                                {content.services.new_construction.list.map((item, index) => (
                                    <li key={item-index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Rénovation */}
                <div id="renovation" className="w-full min-h-[calc(100vh-70px)] bg-seafoam-300 scroll-mt-17">
                    <div className="flex flex-col-reverse md:flex-row px-6 md:px-50 py-10 justify-between items-center gap-10 min-h-[80vh]">
                        <div className="flex flex-col justify-center w-full md:w-[40%]">
                            <h2 className="mb-5">
                                {content.services.renovation.title}
                            </h2>
                            <p className="mb-3">
                                {content.services.renovation.text}
                            </p>
                            <ul className="list-disc mx-5">
                                {content.services.renovation.list.map((item, index) => (
                                    <li key={item-index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <img src={serviceRenovation} alt="Rénovation" className="w-full md:w-1/2 max-w-xl h-auto object-cover" />
                    </div>
                </div>

                {/* Aménagement intérieur et Mobilier */}
                <div id="amenagement-interieur-et-mobilier" className="w-full min-h-[calc(100vh-70px)] bg-white flex flex-col justify-start scroll-mt-17">
                    <div className="flex flex-col md:flex-row mt-10 px-6 md:px-50 justify-between items-center gap-10">
                        <img src={serviceAmenagementInterieur} alt="Aménagement intérieur" className="w-full md:w-1/2 max-w-xl h-auto object-cover" />
                        <div className="flex flex-col justify-center w-full md:w-[30%]">
                            <h2 className="mb-5">
                                {content.services.interior_design.title}
                            </h2>
                            <p className="mb-3">
                                {content.services.interior_design.text}
                            </p>
                            <ul className="list-disc mx-5">
                                {content.services.interior_design.list.map((item, index) => (
                                    <li key={item-index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row px-6 md:px-50 md:py-10 py-30 justify-start items-center gap-10">
                        <img src={serviceMobilier} alt="Mobilier" className="w-[60%] md:w-[15%] h-auto object-cover" />
                        <div className="flex flex-col justify-center w-full md:w-[30%] mx-70">
                            <h2 className="mb-5">
                                {content.services.furniture.title}
                            </h2>
                            <p className="mb-3">
                                {content.services.furniture.text}
                            </p>
                            <ul className="list-disc mx-5">
                                {content.services.furniture.list.map((item, index) => (
                                    <li key={item-index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>                    
                </div>

                {/* Equipement public et Extension */}
                <div id="equipement-public-et-extension" className="w-full min-h-[calc(100vh-70px)] bg-lemon-500 flex flex-col md:flex-row justify-center items-start gap-10 px-6 md:px-50 py-16 scroll-mt-17">
                    <div className="flex flex-col  w-full md:w-1/2 gap-6">
                        <img src={serviceEquipementPublic} alt="Equipement public" className="w-[60%] md:w-[40%] h-auto object-cover " />
                        <div className="flex flex-col justify-center w-full">
                            <h2 className="mb-5">
                                {content.services.public_facilities.title}
                            </h2>
                            <p className="mb-3">
                                {content.services.public_facilities.text}
                            </p>
                            <ul className="list-disc mx-5">
                                {content.services.public_facilities.list.map((item, index) => (
                                    <li key={item-index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 gap-6">
                        <img src={serviceExtension} alt="Extension" className="w-[60%] md:w-[40%] h-auto object-cover" />
                        <div className="flex flex-col justify-center w-full">
                            <h2 className="mb-5">
                                {content.services.extension.title}
                            </h2>
                            <p className="mb-3">
                                {content.services.extension.text}
                            </p>
                            <ul className="list-disc mx-5">
                                {content.services.extension.list.map((item, index) => (
                                    <li key={item-index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>               
            </div>
            <Footer />
        </div>
    )
}