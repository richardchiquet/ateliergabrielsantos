import Header from "../components/Header"
import Footer from "../components/Footer";
import { content } from "../constants/Content";

// Images
import atelierPortrait from "../assets/photosAtelier/atelierPortrait.png";
import atelierPhilosophie from "../assets/photosAtelier/atelierPhilosophie.jpg"

export default function Atelier() {
    return (
        <div>
            <Header />
            <div className="h-screen w-full max-md:hidden">
                <h1 className="text-3xl px-10 py-10 text-left w-full">
                    {content.atelier.subtitle}
                </h1>
                <img src={atelierPortrait} alt="Portrait de Gabriel Santos" className="absolute bottom-0 left-0 max-h-[80%] aspect-1/2 object-cover z-1"/>
                <div className="grid grid-cols-12">
                    <h1 className="col-start-6 text-2xl">
                        {content.atelier.history.title}
                    </h1>
                    <p className="text-formatting col-start-6 col-span-5 my-2">
                        {content.atelier.history.text}
                    </p>
                </div>
                <div className="absolute bottom-0 w-full bg-walnut-700 h-30 -z-10"></div>
            </div>
            <div className="relative h-screen w-full -mt-20 max-md:hidden">
                <div className="relative top-0 w-full bg-walnut-700 h-30 -z-10"></div>
                <img src={atelierPhilosophie} alt="Gabriel au japon / Calin" className="absolute bottom-0 right-0 max-w-[30%] max-h-full w-auto object-cover z-10" />
                <div className="grid grid-cols-12 mt-50">
                    <h1 className="col-start-2 col-span-2 text-2xl">
                        {content.atelier.philosophy.title}
                    </h1>
                    <p className="text-formatting col-start-2 col-span-5 my-2">
                        {content.atelier.philosophy.text}
                    </p>
                </div>
            </div>
            <div className="md:hidden">
                <div className="h-screen w-full">
                    <h1 className="text-3xl px-10 py-10 text-left w-full">
                        {content.atelier.subtitle}
                    </h1>
                    <h2 className="text-2xl px-10 py-2 text-left w-full">
                        {content.atelier.history.title}
                    </h2>
                    <p className="text-formatting px-10 py-2 text-left w-full pl-20">
                        {content.atelier.history.text}
                    </p>
                    <img src={atelierPortrait} alt="Portrait de Gabriel Santos" className="w-full h-auto object-cover mt-5" />
                </div>
                <div className="h-screen w-full bg-walnut-700">
                    <div className="text-white flex flex-col justify-center items-center align-center h-full">
                    </div>
                </div>
                <div className="h-screen w-full bg-white">
                    <h1 className="text-3xl px-10 py-10 text-left w-full">
                        {content.atelier.philosophy.title}
                    </h1>
                    <p className="text-formatting px-10 py-2 text-left w-full pl-30">
                        {content.atelier.philosophy.text}
                    </p>
                    <img src={atelierPhilosophie} alt="Gabriel au japon / Calin" className="w-[50%] h-[60vh] max-h-[60vh] object-cover object-bottom mt-5" />
                </div>                    
            </div>
            <Footer />
        </div>
    )
}