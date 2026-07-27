import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer";
import service1 from "../assets/PhotoService/ConstructionNeuve.png";
import service2 from "../assets/PhotoService/Renovation.png";
import service3 from "../assets/PhotoService/EquipementPublique.png";
import service4 from "../assets/PhotoService/Extension.png";
import service5 from "../assets/PhotoService/AmenagementInterieur.png";
import service6 from "../assets/PhotoService/Mobilier.png";

export default function Services() {
    const location = useLocation();

    useEffect(() => {
        const sectionId = location.hash.replace("#", "");
        if (!sectionId) return;

        const target = document.getElementById(sectionId);
        if (target) {
            requestAnimationFrame(() => {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        }
    }, [location.hash]);

    return (
        <div>
            <Header />

            <div className="w-full min-h-[calc(100vh-76px)]">
                {/*Construction Neuve*/}
                <div id="construction-neuve" className="w-full min-h-[calc(100vh-70px)] bg-white scroll-mt-17">
                    <h1 className="text-3xl px-6 md:px-50 py-6 md:py-10 text-left w-full">Services Proposé</h1>
                    <div className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-50 md:py-10  justify-between">
                        <img src={service1} alt="Construction Neuve" className="w-[60%] md:w-[30%] max-w-xl h-auto object-cover" />
                        <div className="flex flex-col justify-end w-full md:w-[40%]">
                            <h2 className="text-2xl mb-5">Construction neuve</h2>
                            <div className="mb-3">Conception et réalisation de bâtiments performants <br /> où l’attention est portée sur la nature des matériaux, <br /> leur mise en œuvre et sur leur efficacité énergétique.</div>
                            <ul className="list-disc mx-5 mb-3">
                                <li>Étude de faisabilité et programmation</li>
                                <li>Conception / Réalisation</li>
                                <li>Gestion des coûts de travaux</li>
                                <li>Permis de construire (PC)</li>
                                <li>Réception des travaux</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*Rénovation*/}
                <div id="renovation" className="w-full min-h-[calc(100vh-70px)] bg-seafoam-300 scroll-mt-17">
                    <div className="flex flex-col-reverse md:flex-row px-6 md:px-50 py-10 justify-between items-center gap-10 min-h-[80vh]">
                        <div className="flex flex-col justify-center w-full md:w-[40%]">
                            <h2 className="text-2xl mb-5">Rénovation</h2>
                            <div className="mb-3">Conception et réalisation de réhabilitation de bâtiment existant où l’attention est portée sur la mise en valeur des éléments présents. La mise aux normes et l’amélioration des performances du bâtiment passe par le réemploi de matériaux et techniques traditionnelles.</div>
                            <ul className="list-disc mx-5">
                                <li>Diagnostics des existants</li>
                                <li>Mise aux normes réglementaires</li>
                                <li>Gestion des coûts de travaux</li>
                                <li>Conception / Réhabilitation / Restructuration</li>
                                <li>Suivi de chantier</li>
                                <li>Réception des travaux</li>
                            </ul>
                        </div>
                        <img src={service2} alt="Rénovation" className="w-full md:w-1/2 max-w-xl h-auto object-cover" />
                    </div>
                </div>
                {/*Aménagement intérier et Mobilier*/}
                <div id="amenagement-interieur-et-mobilier" className="w-full min-h-[calc(100vh-70px)] bg-white flex flex-col justify-start scroll-mt-17">
                    <div className="flex flex-col md:flex-row mt-10 px-6 md:px-50 justify-between items-center gap-10">
                        <img src={service5} alt="Aménagement intérieur" className="w-full md:w-1/2 max-w-xl h-auto object-cover" />
                        <div className="flex flex-col justify-center w-full md:w-[30%]">
                            <h2 className="text-2xl mb-5">Aménagement intérieur</h2>
                            <div className="mb-3">Optimisation, personnalisation et design d'espaces intérieurs fonctionnels et esthétiques.</div>
                            <ul className="list-disc mx-5">
                                <li>Plans d'aménagement</li>
                                <li>Choix des matériaux</li>
                                <li>Création d'ambiances</li>
                                <li>Optimisation des espaces</li>
                                <li>Suivi de réalisation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row px-6 md:px-50 md:py-10 py-30 justify-start items-center gap-10">
                        <img src={service6} alt="Mobilier" className="w-[60%] md:w-[15%] h-auto object-cover" />
                        <div className="flex flex-col justify-center w-full md:w-[30%] mx-70">
                            <h2 className="text-2xl mb-5">Mobilier</h2>
                            <div className="mb-3">Conception de mobilier sur mesure intégré à votre projet.</div>
                            <ul className="list-disc mx-5">
                                <li>Design sur mesure</li>
                                <li>Matériaux sains</li>
                                <li>Cohérence architecturale</li>
                                <li>Plans de fabrication</li>
                                <li>Collaboration artisans locaux</li>
                            </ul>
                        </div>
                    </div>                    
                    
                </div>
                {/*Equipement public et Extension */}
                <div id="equipement-public-et-extension" className="w-full min-h-[calc(100vh-70px)] bg-lemon-500 flex flex-col md:flex-row justify-center items-start gap-10 px-6 md:px-50 py-16 scroll-mt-17">
                    <div className="flex flex-col  w-full md:w-1/2 gap-6">
                        <img src={service3} alt="Equipement publique" className="w-[60%] md:w-[40%] h-auto object-cover " />
                        <div className="flex flex-col justify-center w-full">
                            <h2 className="text-2xl my-5">Equipement publique</h2>
                            <div className="mb-3">Conception et réalisation d'établissements recevant du public conformes aux normes d'accessibilité et de sécurité adaptés aux besoins de la maîtrise d’ouvrage.</div>
                            <ul className="list-disc mx-5">
                                <li>Mise en conformité</li>
                                <li>Accessibilité PMR</li>
                                <li>Sécurité incendie</li>
                                <li>Commission de sécurité</li>
                                <li>Dossiers réglementaires</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 gap-6">
                        <img src={service4} alt="Extension" className="w-[60%] md:w-[40%] h-auto object-cover " />
                        <div className="flex flex-col justify-center w-full">
                            <h2 className="text-2xl my-5">Extension</h2>
                            <div className="mb-3">Développement harmonieux de votre espace de vie en respectant l'architecture existante.</div>
                            <ul className="list-disc mx-5">
                                <li>Étude de faisabilité</li>
                                <li>Conception sur mesure</li>
                                <li>Intégration harmonieuse</li>
                                <li>Déclaration préalable ou PC</li>
                                <li>Coordination des entreprises</li>
                            </ul>
                        </div>
                    </div>
                </div>               
            </div>
            <Footer />
        </div>
    )
}