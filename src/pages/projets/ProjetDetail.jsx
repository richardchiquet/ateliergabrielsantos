import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { content } from "../../constants/Content";
import "./projet.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { projetsConfig } from "./ProjetsConfig";

export default function ProjetDetail() {
  const { projetId } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [images, setImages] = useState([]);
  const projet = projetsConfig[projetId];

  useEffect(() => {
    setImages([]);
    setThumbsSwiper(null);

    if (!projet) return;
    let isMounted = true;

    Promise.all(projet.getImageLoader().map((load) => load()))
      .then((modules) => {
        if (isMounted) {
          setImages(modules.map((m) => m.default));
        }
      });

    return () => {
      isMounted = false;
    };
  }, [projet, projetId]);

  if (!projet) return <div><Header/>Projet introuvable</div>;

  const { color, content: projetContent, text_color, category } = projet;

  if (images.length === 0) {
    return (
      <div className={`${text_color}`}>
        <Header />
        <div className={`w-full h-full ${color} grid grid-cols-12 place-items-start relative`}>
          <div className="col-start-2 col-end-12 my-20">
            <p>Chargement des images…</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`${text_color}`}>
      <Header />
      <div className={`w-full h-full ${color} grid grid-cols-12 place-items-start relative`}>
        <Link to={{ pathname: "/projets", hash: "top" }} className="text-4xl col-start-2">
          {content.projects.icon_back}
        </Link>
        <div className="col-start-2 col-end-12 mb-5">
          <h1>{projetContent.title}</h1>
          <p>{category}</p>
        </div>
        <div className="md:col-start-2 md:col-end-12 col-start-1 col-end-13 w-full md:w-8/10 mx-auto">
          <Swiper
            key={`${projetId}-main`}
            style={{ "--swiper-navigation-color": "#000000", "--swiper-pagination-color": "#000000" }}
            loop={images.length > 1}
            spaceBetween={10}
            navigation
            thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {images.map((image, index) => (
              <SwiperSlide key={`${image}-${index}`}>
                <img src={image} alt={`${projetContent.title} ${index + 1}`} className="w-full h-full object-contain" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="max-md:hidden">
            <Swiper
              key={`${projetId}-thumbs`}
              onSwiper={setThumbsSwiper}
              loop={images.length > 1}
              spaceBetween={10}
              slidesPerView={Math.min(9, images.length || 1)}
              freeMode
              watchSlidesProgress
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {images.map((image, index) => (
                <SwiperSlide key={`${image}-${index}`}>
                  <img src={image} alt={`${projetContent.title} thumb ${index + 1}`} className="w-full h-auto object-contain" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="col-start-2 col-end-12 mt-20 mb-20">
          <p className="text-formatting">{projetContent.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}