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
        <div className="col-start-2 col-end-12 mb-5">
          <h1 className="text-2xl font-bold">Famille House 1</h1>
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
        <div className="col-start-2 col-end-12 mt-20">Le projet intègre dès sa conception l’idée que dans un futur le bâtiment puisse être étendu afin d'accueillir une famille plus nombreuse.<br />Dans ce cas, l’extension se fait de manière horizontale dans la continuité structurelle du bâtiment ce qui permet, à terme, d’ajouter une chambre parentale avec une salle de bain supplémentaire.</div>
        <div className="col-start-2 col-end-12 mt-5 ">Au niveau architectural, le projet crée une série de portiques en bois qui donnent une épaisseur importante et un langage contemporain à la façade. La façade largement vitrée domine un soubassement en béton brut venant en continuité des portiques qui assoit le bâtiment dans le sol. Enfin la toiture en tuile plate de pays permet au bâtiment de s’intégrer facilement dans le contexte urbain ou rural des communes françaises.</div>
        <div className="col-start-2 col-end-12 mt-5 ">En termes de technique : le projet est conçu en ossature et charpente bois posé sur des fondations en béton avec vide sanitaire. Les murs à ossatures bois et la toiture sont isolés en laine de bois, afin d’atteindre des niveaux de résistance thermique élevée avec des matériaux bio-sourcés. Les cloisonnement principaux sont réalisés en blocs de terre comprimée ce qui apporte en complément de l’isolant une inertie thermique importante au bâtiment. En combinant ces deux éléments (isolation et inertie) nous créons les conditions pour que le confort d’hiver comme d’été soit idéal.<br/>Le système de portique en bois combiné à des brises soleil orientables, permet aux usagers de gérer facilement les apports de lumière directs tout en gardant une luminosité suffisante en intérieur.</div>
        <div className="col-start-2 col-end-12 mt-5 mb-20">Pour terminer, ce projet de maison familiale a pour objectif d'évoluer avec la famille qui s’y installe et de proposer tout ce qui se fait de meilleur en termes de thermique, confort, luminosité, santé, usages et qualité architecturale.</div>

      </div>
      <Footer />
    </div>
  )
}