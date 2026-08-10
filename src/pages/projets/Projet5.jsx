import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { content } from "../../constants/Content";
import { Link } from "react-router-dom";
import "./projet.css";
import React, { useState } from "react";

// Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Images
import p1 from "../../assets/photoProjets/projet5/006-1-CABANON 01-Vue EXT 01.jpg";
import p2 from "../../assets/photoProjets/projet5/006-2-CABANON 01-Vue EXT 02.jpg";
import p3 from "../../assets/photoProjets/projet5/006-3-CABANON 01-Plan 01.jpg";
import p4 from "../../assets/photoProjets/projet5/006-4-CABANON 01-Coupe 01.jpg";
import p5 from "../../assets/photoProjets/projet5/006-5-CABANON 01-Coupe 02.jpg";
import p6 from "../../assets/photoProjets/projet5/006-6-CABANON 01-Facade 01.jpg";
import p7 from "../../assets/photoProjets/projet5/006-7-CABANON 01-Facade 02.jpg";
import p8 from "../../assets/photoProjets/projet5/006-8-CABANON 01-Facade 03.jpg";
import p9 from "../../assets/photoProjets/projet5/006-9-CABANON 01-Facade 04.jpg";

const projectImages = [
    p1, p2, p3, p4, p5, p6, p7, p8, p9
];

export default function Projet5() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="text-black">
            <Header />
            <div className="w-full h-full bg-greige-400 grid grid-cols-12 place-items-start relative">
                <Link to="/projets" className="btn btn-ghost text-4xl col-start-2 ">
                    {content.projects.icon_back}
                </Link>
                <div className="col-start-2 col-end-12 mb-5">
                    <h1 className="text-2xl font-bold">
                        {content.projects.project_5.title}
                    </h1>
                    <p className="text-sm mt-2">
                        {content.projects.project_5.category}
                    </p>
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
                        {projectImages.map((image, index) => (
                            <SwiperSlide key={`main-${index}`}>
                                <img src={image} alt={`Project ${index + 1}`} className="w-full h-full object-contain" />
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
                            {projectImages.map((image, index) => (
                                <SwiperSlide key={`thumb-${index}`}>
                                    <img src={image} alt={`Project thumb ${index + 1}`} className="w-full h-auto object-contain" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="col-start-2 col-end-12 mt-20">
                    <p className="text-formatting text-lg">
                      {content.projects.project_5.description}
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}