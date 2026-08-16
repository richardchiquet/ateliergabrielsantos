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
import p1 from "../../assets/photosProjets/projet3/004-MICRO HABITAT 02-Vue EXT 01.jpg";
import p2 from "../../assets/photosProjets/projet3/004-MICRO HABITAT 02-Vue EXT 02.jpg";
import p3 from "../../assets/photosProjets/projet3/004-MICRO HABITAT 02-Vue EXT 03.jpg";
import p4 from "../../assets/photosProjets/projet3/004-MICRO HABITAT 02-Vue EXT 04.jpg";
import p5 from "../../assets/photosProjets/projet3/004-MICRO HABITAT 02-Vue INT 01.jpg";
import p6 from "../../assets/photosProjets/projet3/004-MICRO HABITAT 02-Vue INT 02.jpg";
import p7 from "../../assets/photosProjets/projet3/004-MICRO HABITAT 02-Vue INT 03.jpg";
import p8 from "../../assets/photosProjets/projet3/004-MICRO HABITAT 02-Façade 01.jpg";
import p9 from "../../assets/photosProjets/projet3/004-MICRO HABITAT 02-Façade 02.jpg";
import p10 from "../../assets/photosProjets/projet3/004-MICRO HABITAT 02-Façade 03.jpg";
import p11 from "../../assets/photosProjets/projet3/004-MICRO HABITAT 02-Façade 04.jpg";
import p12 from "../../assets/photosProjets/projet3/004-MICRO HABITAT 02-Plan RDC.jpg";
import p13 from "../../assets/photosProjets/projet3/004-MICRO HABITAT 02-Coupe 01.jpg";

const projectImages = [
  p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13
];

export default function Projet3() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="text-white">
      <Header />
      <div className="w-full h-full bg-chrome-900 grid grid-cols-12 place-items-start relative">
        <Link to={{ pathname: "/projets", hash: "top" }} className="text-4xl col-start-2">
          {content.projects.icon_back}
        </Link>
        <div className="col-start-2 col-end-12 mb-5">
          <h1>
            {content.projects.project_3.title}
          </h1>
          <p>
            {content.projects.category.draft}
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
              <SwiperSlide key={`${image}-${index}`}>
                <img src={image} alt={`${content.projects.project_3.title} thumb ${index + 1}`} className="w-full h-full object-contain" />
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
                <SwiperSlide key={`${image}-${index}`}>
                  <img src={image} alt={`${content.projects.project_3.title} thumb ${index + 1}`} className="w-full h-auto object-contain" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="col-start-2 col-end-12 mt-20 mb-20">
          <p className="text-formatting">
            {content.projects.project_3.description}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}