import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./projet.css";


import { FreeMode, Pagination, Navigation, Thumbs } from "swiper/modules";

//images
import p1 from "../../assets/PhotoProjets/Projet5/006-1-CABANON 01-Vue EXT 01.jpg";
import p2 from "../../assets/PhotoProjets/Projet5/006-2-CABANON 01-Vue EXT 02.jpg";
import p3 from "../../assets/PhotoProjets/Projet5/006-3-CABANON 01-Plan 01.jpg";
import p4 from "../../assets/PhotoProjets/Projet5/006-4-CABANON 01-Coupe 01.jpg";
import p5 from "../../assets/PhotoProjets/Projet5/006-5-CABANON 01-Coupe 02.jpg";
import p6 from "../../assets/PhotoProjets/Projet5/006-6-CABANON 01-Facade 01.jpg";
import p7 from "../../assets/PhotoProjets/Projet5/006-7-CABANON 01-Facade 02.jpg";
import p8 from "../../assets/PhotoProjets/Projet5/006-8-CABANON 01-Facade 03.jpg";
import p9 from "../../assets/PhotoProjets/Projet5/006-9-CABANON 01-Facade 04.jpg";



const familyHouseImages = [p1, p2, p3, p4, p5, p6, p7, p8, p9];

export default function Projet5() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="text-black">
            <Header />
            <div className="w-full h-full bg-greige-400 grid grid-cols-12 place-items-start relative">
                <Link to="/projets" className="btn btn-ghost text-4xl col-start-2 ">←</Link>
                <div className="col-start-2 col-end-12 mb-5">
                    <h1 className="text-2xl font-bold">Cabanon</h1>
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
                <div className="col-start-2 col-end-12 mt-20">Le projet de cabanon de jardin a pour objectif de proposer une construction légère et esthétique à installer dans un jardin.<br/>Il propose des prestations de qualités et une capacité d’usage élevé. La qualité d’espace et architecturale permet au projet de s’intégrer facilement dans son environnement.</div>
                <div className="col-start-2 col-end-12 mt-5">Architecturalement, le projet s’implante dans un paysage entouré de nature et entretient un rapport particulier à celle-ci. Le cabanon est un volume simple proposant une façade montrant un parallélépipède droit lorsqu’elle est fermée et une richesse d’ouverture possible lorsqu'elle est ouverte.<br/>La structure en bois est visible en partie basse et haute du volume parallélépipédique et permet à une toiture en tôle acier finement ondulée de venir couvrir et étancher le cabanon.<br/>Les ouvertures de façade sont comme des volets et permettent une multiplicité des usages rendant le cabanon central dans l’usage du jardin.</div>
                <div className="col-start-2 col-end-12 mt-5">En termes de technique : le projet est conçu en ossature et charpente bois posé sur des fondations superficielles. Cela permet de limiter l’impact du bâtiment sur les sols existants.</div>
                <div className="col-start-2 col-end-12 mt-5 mb-20">Pour conclure, ce projet de cabanon a pour objectif de donner accès à un rangement de jardin aux coûts raisonnés tout en donnant une multiplicité d’usage pratique ainsi qu’une qualité architecturale.</div>
            </div>
            <Footer />
        </div>
    )
}