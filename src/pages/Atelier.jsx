import Header from "../components/Header"
import Footer from "../components/Footer";
import { content } from "../constants/Content";

// Images
import histoire from "../assets/photosAtelier/histoire.png";
import philosophie from "../assets/photosAtelier/philosophie.jpg"

export default function Atelier() {


    return (
        <div id="top" className="min-h-screen scroll-mt-100">
            <Header />
            <div className=" min-h-screen w-full max-md:hidden scroll-mt-1000">
                <h1 className="px-10 py-10 text-left w-full">
                    {content.atelier.subtitle}
                </h1>
                <img src={histoire} alt="Histoire de l'atelier" className="absolute -bottom-10 left-0 max-h-[80%] max-w-[30%] aspect-1/2 object-cover z-1"/>
                <div className="grid grid-cols-12">
                    <h2 className="col-start-5 col-span-3 mb-5">
                        {content.atelier.history.title}
                    </h2>
                    <p className="text-formatting col-start-5 col-span-6 my-2">
                        {content.atelier.history.textPart1}
                    </p>
                    <p className="text-formatting col-start-5 col-span-6 my-2 mb-15">
                        {content.atelier.history.textPart2}
                    </p>
                </div>

            </div>
            <div className="relative min-h-screen w-full -mt-10 max-md:hidden">
                <div className="relative top-0 w-full bg-walnut-700 h-60 z-2"></div>
                <img src={philosophie} alt="Gabriel au japon / Calin" className="absolute bottom-0 right-0 max-w-[30%] max-h-screen w-auto object-cover z-10" />
                <div className="grid grid-cols-12 mt-20">
                    <h2 className="col-start-2 col-span-3 mb-5">
                        {content.atelier.philosophy.title}
                    </h2>
                    <p className="text-formatting col-start-2 col-span-5 my-2">
                        {content.atelier.philosophy.textPart1}
                    </p>
                    <p className="text-formatting col-start-2 col-span-5 my-2">
                        {content.atelier.philosophy.textPart2}
                    </p>
                </div>
            </div>
            <div className="md:hidden">
                <div className="h-full w-full">
                    <h1 className="text-3xl px-10 py-10 text-left w-full">
                        {content.atelier.subtitle}
                    </h1>
                    <h2 className="text-2xl px-10 py-2 text-left w-full">
                        {content.atelier.history.title}
                    </h2>
                    <p className="text-formatting px-10 py-2 text-left w-full pl-20">
                        {content.atelier.history.textPart1}
                    </p>
                </div>
                <div className="min-h-screen w-full bg-walnut-700">
                    <img src={histoire} alt="Histoire de l'atelier" className="w-full h-auto object-cover mt-5" />
                    <p className="text-formatting px-10 text-left w-full pl-20 py-10">
                        {content.atelier.history.textPart2}
                    </p>
                    <div className="text-white flex flex-col justify-center items-center align-center h-full">
                    </div>
                </div>
                <div className="min-h-screen w-full bg-white">
                    <h1 className="text-3xl px-10 py-10 text-left w-full">
                        {content.atelier.philosophy.title}
                    </h1>
                    <p className="text-formatting px-10 py-10 text-left w-full pl-30">
                        {content.atelier.philosophy.textPart1}
                    </p>
                    <img src={philosophie} alt="Gabriel au japon / Calin" className="w-[50%] h-[60vh] max-h-[60vh] object-cover object-bottom" />
                    <p className="text-formatting px-10 py-10 text-left w-full pl-30">
                        {content.atelier.philosophy.textPart2}
                    </p>
                </div>                    
            </div>
            <Footer />
        </div>
    )
}