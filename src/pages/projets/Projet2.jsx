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
import p1 from "../../assets/PhotoProjets/Projet2/002-FAMILY HOUSE 01-Vue EXT 01.jpg";
import p2 from "../../assets/PhotoProjets/Projet2/002-FAMILY HOUSE 01-Vue EXT 02.jpg";
import p3 from "../../assets/PhotoProjets/Projet2/002-FAMILY HOUSE 01-Vue EXT 03.jpg";
import p4 from "../../assets/PhotoProjets/Projet2/002-FAMILY HOUSE 01-Vue EXT 04.jpg";
import p5 from "../../assets/PhotoProjets/Projet2/002-FAMILY HOUSE 01-Vue INT 01.jpg";
import p6 from "../../assets/PhotoProjets/Projet2/002-FAMILY HOUSE 01-Vue INT 02.jpg";
import p7 from "../../assets/PhotoProjets/Projet2/002-FAMILY HOUSE 01-Vue INT 03.jpg";
import p8 from "../../assets/PhotoProjets/Projet2/002-FAMILY HOUSE 01-Facade 01.jpg";
import p9 from "../../assets/PhotoProjets/Projet2/002-FAMILY HOUSE 01-Facade 02.jpg";
import p10 from "../../assets/PhotoProjets/Projet2/002-FAMILY HOUSE 01-Facade 03.jpg";
import p11 from "../../assets/PhotoProjets/Projet2/002-FAMILY HOUSE 01-Facade 04.jpg";
import p12 from "../../assets/PhotoProjets/Projet2/002-FAMILY HOUSE 01-Coupe 01.jpg";
import p13 from "../../assets/PhotoProjets/Projet2/002-FAMILY HOUSE 01-Plan 01.jpg";
import p14 from "../../assets/PhotoProjets/Projet2/002-FAMILY HOUSE 01-Plan 02.jpg";
import p15 from "../../assets/PhotoProjets/Projet2/002-FAMILY HOUSE 01-Axonometrie 01.jpg";
import p16 from "../../assets/PhotoProjets/Projet2/002-FAMILY HOUSE 01-Axonometrie 02.jpg";

const familyHouseImages = [
  p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16,
];

export default function Projet2() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="text-black">
            <Header />
            <div className="w-full h-full bg-greige-400 grid grid-cols-12 place-items-start relative">
            <Link to="/projets" className="btn btn-ghost text-4xl col-start-2 ">←</Link>
            <div className="col-start-2 col-end-7 mb-5">
                <h1 className="text-2xl font-bold">Maison passive</h1>
                <p className="text-sm mt-2">Lieu : Seine-et-Marne <br />Statut : En cours</p>
                
            </div>
            <div className="md:col-start-2 md:col-end-12 col-start-1 col-end-13 w-full md:w-6/10 mx-auto">
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
                  <div className="col-start-2 col-end-12 mt-20">Je conçois des espaces sains et fonctionnels adaptés aux usagers, que ce soit de l'habitat ou des établissements recevant du public. Mon approche du projet se fait à travers les matériaux : de par leur aspect, leurs propriétés et leur impact environnemental. Les matériaux sont un point central dans ma démarche architecturale.</div>
                  <div className="col-start-2 col-end-12 mt-5 mb-20">Je m'intéresse particulièrement à la conception de bâtiments passifs et à l'architecture bioclimatique. Je cherche à concevoir des bâtiments qui s'intègrent dans leur environnement et qui répondent aux besoins des usagers tout en minimisant leur impact sur l'environnement.</div>
            </div>
            <Footer />
        </div>
    )
}