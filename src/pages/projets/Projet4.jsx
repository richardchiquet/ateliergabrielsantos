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
import p1 from "../../assets/photoProjets/projet4/003-1-RENOVATION INTERIEUR 01-Vue INT 01.jpg";
import p2 from "../../assets/photoProjets/projet4/003-2-RENOVATION INTERIEUR 01-Vue INT 02.jpg";
import p3 from "../../assets/photoProjets/projet4/003-3-RENOVATION INTERIEUR 01-Vue INT 03.jpg";
import p4 from "../../assets/photoProjets/projet4/003-4-RENOVATION INTERIEUR 01-Vue INT 04.jpg";
import p5 from "../../assets/photoProjets/projet4/003-5-RENOVATION INTERIEUR 01-Vue INT 05.jpg";

const projectImages = [
  p1, p2, p3, p4, p5
];

export default function Projet4() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="text-black">
      <Header />
      <div className="w-full h-full bg-chrome-400 grid grid-cols-12 place-items-start relative">
        <Link to="/projets" className="btn btn-ghost text-4xl col-start-2 ">
          {content.projects.icon_back}
        </Link>
        <div className="col-start-2 col-end-12 mb-5">
          <h1 className="text-2xl font-bold">
            {content.projects.project_4.title}
          </h1>
          <p className="text-sm mt-2">
            {content.projects.project_4.category}
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
            {content.projects.project_4.description}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}