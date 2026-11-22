import { buildMeta } from "../constants/Seo";
import Header from "../components/Header"
import { content } from "../constants/Content";
import Footer from "../components/Footer";

// Images
import serviceConstructionNeuve from "../assets/photosServices/constructionNeuve.webp";
import serviceRenovation from "../assets/photosServices/renovation.webp";
import serviceEquipementPublic from "../assets/photosServices/equipementPublic.webp";
import serviceExtension from "../assets/photosServices/extension.webp";
import serviceAmenagementInterieur from "../assets/photosServices/amenagementInterieur.webp";
import serviceMobilier from "../assets/photosServices/mobilier.webp";

export const meta = () => buildMeta({
    title: content.meta.services.title,
    description: content.meta.services.description,
    path: "/services",
});

function ServicesList({items}){
    return (
        <ul className="list-disc mx-5">
            {items.map((item, index) => (
                <li key={item-index}>{item}</li>
            ))}
        </ul>
    )
}

export default function Services() {

    return (
        <div id="0" className="min-h-screen scroll-mt-100">
            <Header />
            <div className="w-full min-h-[calc(100vh-76px)]">
                <h1 className="px-6 md:px-50 py-6 md:py-10 text-left w-full">
                    {content.services.subtitle}
                </h1>

                {/* Construction Neuve */}
                <div id="construction-neuve" className="w-full min-h-[calc(100vh-70px)] scroll-mt-100">
                    <div className="flex flex-col items-center gap-10 px-6 justify-between md:flex-row md:px-50 md:py-10">
                        <img src={serviceConstructionNeuve} alt={content.services.new_construction.alt} className="w-[60%] max-w-xl h-auto object-cover md:w-[30%]" />
                        <div className="flex flex-col justify-end w-full md:w-[40%]">
                            <h2 className="mb-5">
                                {content.services.new_construction.title}
                            </h2>
                            <p className="mb-3">
                                {content.services.new_construction.text}
                            </p>
                            <ServicesList items={content.services.new_construction.list} />
                        </div>
                    </div>
                </div>

                {/* Rénovation */}
                <div id="renovation" className="bg-seafoam-300 w-full min-h-[calc(100vh-70px)] scroll-mt-17">
                    <div className="flex flex-col-reverse px-6 py-10 justify-between items-center gap-10 min-h-[80vh] md:flex-row md:px-50">
                        <div className="flex flex-col justify-center w-full md:w-[40%]">
                            <h2 className="mb-5">
                                {content.services.renovation.title}
                            </h2>
                            <p className="mb-3">
                                {content.services.renovation.text}
                            </p>
                            <ServicesList items={content.services.renovation.list} />
                        </div>
                        <img src={serviceRenovation} alt={content.services.renovation.alt} className="w-full max-w-xl h-auto object-cover md:w-1/2" />
                    </div>
                </div>

                {/* Aménagement intérieur et Mobilier */}
                <div id="amenagement-interieur-et-mobilier" className="w-full min-h-[calc(100vh-70px)] flex flex-col justify-start scroll-mt-17">
                    <div className="flex flex-col mt-10 px-6 justify-between items-center gap-10 md:flex-row md:px-50">
                        <img className="w-full max-w-xl h-auto object-cover md:w-1/2" src={serviceAmenagementInterieur} alt={content.services.interior_design.alt} />
                        <div className="flex flex-col justify-center w-full md:w-[30%]">
                            <h2 className="mb-5">
                                {content.services.interior_design.title}
                            </h2>
                            <p className="mb-3">
                                {content.services.interior_design.text}
                            </p>
                            <ServicesList items={content.services.interior_design.list} />
                        </div>
                    </div>
                    <div className="flex flex-col px-6 py-30 justify-start items-center gap-10 md:flex-row md:px-50 md:py-10">
                        <img src={serviceMobilier} alt={content.services.furniture.alt} className="w-[60%] h-auto object-cover md:w-[15%]" />
                        <div className="flex flex-col justify-center w-full mx-70 md:w-[30%]">
                            <h2 className="mb-5">
                                {content.services.furniture.title}
                            </h2>
                            <p className="mb-3">
                                {content.services.furniture.text}
                            </p>
                            <ul className="list-disc mx-5">
                                <ServicesList items={content.services.furniture.list} />
                            </ul>
                        </div>
                    </div>                    
                </div>

                {/* Equipement public et Extension */}
                <div id="equipement-public-et-extension" className="bg-lemon-500 w-full min-h-[calc(100vh-70px)] scroll-mt-17 flex flex-col justify-center items-start gap-10 px-6 py-16 md:flex-row md:px-50">
                    <div className="flex flex-col w-full gap-6 md:w-1/2">
                        <img src={serviceEquipementPublic} alt={content.services.public_facilities.alt} className="w-[60%] h-auto object-cover md:w-[40%]" />
                        <div className="flex flex-col justify-center w-full">
                            <h2 className="mb-5">
                                {content.services.public_facilities.title}
                            </h2>
                            <p className="mb-3">
                                {content.services.public_facilities.text}
                            </p>
                            <ServicesList items={content.services.public_facilities.list} />
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-6 md:w-1/2">
                        <img src={serviceExtension} alt={content.services.extension.alt} className="w-[60%] h-auto object-cover md:w-[40%]" />
                        <div className="flex flex-col justify-center w-full">
                            <h2 className="mb-5">
                                {content.services.extension.title}
                            </h2>
                            <p className="mb-3">
                                {content.services.extension.text}
                            </p>
                            <ServicesList items={content.services.extension.list} />
                        </div>
                    </div>
                </div>               
            </div>
            <Footer />
        </div>
    )
}