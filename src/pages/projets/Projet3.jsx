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
import p1 from "../../assets/PhotoProjets/Projet3/004-MICRO HABITAT 02-Vue EXT 01.jpg";
import p2 from "../../assets/PhotoProjets/Projet3/004-MICRO HABITAT 02-Vue EXT 02.jpg";
import p3 from "../../assets/PhotoProjets/Projet3/004-MICRO HABITAT 02-Vue EXT 03.jpg";
import p4 from "../../assets/PhotoProjets/Projet3/004-MICRO HABITAT 02-Vue EXT 04.jpg";
import p5 from "../../assets/PhotoProjets/Projet3/004-MICRO HABITAT 02-Vue INT 01.jpg";
import p6 from "../../assets/PhotoProjets/Projet3/004-MICRO HABITAT 02-Vue INT 02.jpg";
import p7 from "../../assets/PhotoProjets/Projet3/004-MICRO HABITAT 02-Vue INT 03.jpg";
import p8 from "../../assets/PhotoProjets/Projet3/004-MICRO HABITAT 02-Façade 01.jpg";
import p9 from "../../assets/PhotoProjets/Projet3/004-MICRO HABITAT 02-Façade 02.jpg";
import p10 from "../../assets/PhotoProjets/Projet3/004-MICRO HABITAT 02-Façade 03.jpg";
import p11 from "../../assets/PhotoProjets/Projet3/004-MICRO HABITAT 02-Façade 04.jpg";
import p12 from "../../assets/PhotoProjets/Projet3/004-MICRO HABITAT 02-Plan RDC.jpg";
import p13 from "../../assets/PhotoProjets/Projet3/004-MICRO HABITAT 02-Coupe 01.jpg";

const familyHouseImages = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13];

export default function Projet3() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="text-white">
            <Header />
            <div className="w-full h-full bg-chrome-900 grid grid-cols-12 place-items-start relative">
            <Link to="/projets" className="btn btn-ghost text-4xl col-start-2 ">←</Link>
            <div className="col-start-2 col-end-12 mb-5">
                <h1 className="text-2xl font-bold">Micro Habitat 2</h1>
                <p className="text-sm mt-2">Ebauche<br/></p>
                
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
                  <div className="col-start-2 col-end-12 mt-20">Le projet de micro-habitat a pour objectif de proposer une construction accessible à tous.<br/>Il propose des prestations de qualités avec des matériaux sains et performants ainsi qu’une qualité d’espace et architecturale importante.</div>
                  <div className="col-start-2 col-end-12 mt-5">Architecturalement, le projet s’implante dans un paysage boisé et entretient un rapport à la nature particulier. Le bâtiment est un volume simple brisé en son centre avec une façade largement vitrée et des parties pleines en bardage bois brûlé inspiré de la technique japonaise du Shou-sugi-ban.<br/>Le bardage bois brûlé permet à ce dernier d’être plus durable et de mieux résister aux intempéries.<br/>La toiture est en tôle acier finement ondulée et vient en large débord par rapport aux façades. Une large terrasse et une circulation couverte sont aménagées sous ce débord tout autour de la maison. Un escalier immergé est installé le long de la circulation pour donner accès au bassin de baignade mitoyen avec le bâtiment.</div>
                  <div className="col-start-2 col-end-12 mt-5">En termes de technique : le projet est conçu en ossature et charpente bois posé sur des fondations en pieux permettant d’installer le bâtiment au-dessus du sol. Cela permet de limiter l’impact du bâtiment sur les sols existants. Les murs à ossatures bois et la toiture sont isolés en laine de bois, afin d’atteindre des niveaux de résistance thermique élevée avec des matériaux bio-sourcés. Cette isolation combinée avec un système de PAC réversible nous offre des conditions idéales pour un confort d’hiver comme d’été.<br/>Le large débord de toiture permet au bâtiment de limiter facilement les apports de lumière directs tout en gardant une luminosité suffisante en intérieur.</div>
                  <div className="col-start-2 col-end-12 mt-5 mb-20">Pour terminer, ce projet de micro-habitat a pour objectif de donner accès à un logement aux coûts raisonnés tout en donnant ce qui se fait de meilleur en termes de thermique, confort, luminosité, santé, usages et qualité architecturale.</div>
            </div>
            <Footer />
        </div>
    )
}