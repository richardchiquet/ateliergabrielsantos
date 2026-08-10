import {Link} from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import React, { useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./projet.css"; 


import {FreeMode, Pagination, Navigation, Thumbs } from "swiper/modules";

//images
import p1 from "../../assets/PhotoProjets/Projet4/003-1-RENOVATION INTERIEUR 01-Vue INT 01.jpg";
import p2 from "../../assets/PhotoProjets/Projet4/003-2-RENOVATION INTERIEUR 01-Vue INT 02.jpg";
import p3 from "../../assets/PhotoProjets/Projet4/003-3-RENOVATION INTERIEUR 01-Vue INT 03.jpg";
import p4 from "../../assets/PhotoProjets/Projet4/003-4-RENOVATION INTERIEUR 01-Vue INT 04.jpg";
import p5 from "../../assets/PhotoProjets/Projet4/003-5-RENOVATION INTERIEUR 01-Vue INT 05.jpg";


const familyHouseImages = [p1, p2, p3, p4, p5];

export default function Projet4() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="text-black">
            <Header />
            <div className="w-full h-full bg-chrome-400 grid grid-cols-12 place-items-start relative">
            <Link to="/projets" className="btn btn-ghost text-4xl col-start-2 ">←</Link>
            <div className="col-start-2 col-end-12 mb-5">
                <h1 className="text-2xl font-bold">Rénovation intérieure</h1>
                <p className="text-sm mt-2">Ebauche<br /></p>
                
            </div>
            <div className="md:col-start-2 md:col-end-12 col-start-1 col-end-13 w-full md:w-8/10 mx-auto">
                <Swiper
                    style={{
                      '--swiper-navigation-color': '#000000',
                      '--swiper-pagination-color': '#000000',
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    {familyHouseImages.map((image, index) => (
                      <SwiperSlide key={`main-${index}`}>
                        <img src={image} alt={`Family house ${index + 1}`} className="w-full h-full object-contain" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="max-md:hidden">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={9}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    {familyHouseImages.map((image, index) => (
                      <SwiperSlide key={`thumb-${index}`}>
                        <img src={image} alt={`Family house thumb ${index + 1}`} className="w-full h-auto object-contain" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  </div>
                            </div>
                  <div className="col-start-2 col-end-12 mt-20">Le projet d’aménagement de cet intérieur a pour objectif de proposer une qualité de vie importante aux usagers.<br/>Il propose des prestations de qualités avec des matériaux sains et performants ainsi qu’une qualité d’espace et architecturale importante.</div>
                  <div className="col-start-2 col-end-12 mt-5">Architecturalement, le projet s’implante dans une maison de ville ancienne avec très peu d’ouverture sur l’extérieur. Cette contrainte nous amène donc à aller chercher la lumière en y installant les éléments les plus bas de côté des ouvertures et installer les éléments haut sur les murs du fond de la pièce.<br/>L’aménagement du projet propose, premièrement un meuble bas sur mesure permettant d’intégrer des rangements, un radiateur et le meuble télévision. Ce meuble permet également de poser des plantes sur le plan supérieur mais également de proposer des assises lorsqu’il y a des invités.<br/>Deuxièmement la cuisine intégrée au projet vient en prolongement de ce meuble bas sur le fond de la pièce. Le meuble vient prendre toute la largeur de la pièce. Seul le plan de travail vient creuser ce volume afin de permettre à la lumière naturelle de venir éclairer la crédence en faïence et le comptoir en terrazzo.<br/>Ensuite, le sol existant est remplacé par des tomettes traditionnelles. Ayant une inertie thermique élevée et étant facilement nettoyable ce matériau permet au projet de conserver l’esthétique traditionnelle du reste de la maison tout en étant facile d’entretien et se mariant à merveille avec le mobilier contemporain.</div>
                  <div className="col-start-2 col-end-12 mt-5 mb-20">Pour conclure, ce projet d’aménagement a pour objectif de donner un espace intérieur de qualité aux coûts raisonnés tout en donnant ce qui se fait de meilleur en termes de confort, luminosité, santé, usages et qualité architecturale.</div>
            </div>
            <Footer />
        </div>
    )
}