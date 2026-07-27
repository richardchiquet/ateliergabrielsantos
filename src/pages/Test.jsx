import Header from "../components/Header";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";
import mat1 from "../assets/mat1.jpg";
import mat2 from "../assets/mat2.jpg";
import mat3 from "../assets/mat3.jpg";


export default function Test() {


    return (
        <div>
            <Header />
            <div className=" bg-white w-full h-screen ">
                <h1>Une approche par les matériaux</h1>
                <div className='flex items-center justify-center w-full h-full'>
                    <div className="px-10 my-5 space-x-10 grid grid-cols-9 w-[70%] h-[50%] ">
                        <div className=" col-start-1 col-end-6 h-20 max-md:hidden">
                            <div className="h-20 w-full overflow-hidden">
                                <img className="object-cover w-full h-full"  src={mat1} alt="Matériau 1" />
                            </div>
                        </div>
                        <div className=" col-start-2 col-end-7 h-20 max-md:hidden ">
                            <div className="h-20 w-full overflow-hidden ">
                                <img className="object-cover w-full h-full"  src={mat2} alt="Matériau 2" />
                            </div>
                        </div>
                        <div className=" col-start-3 col-end-8 h-20 max-md:hidden ">
                            <div className="h-20 w-full overflow-hidden">
                                <img className="object-cover w-full h-full"  src={mat3} alt="Matériau 3" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-centre items-center w-[30%] h-[50%] p-20">
                            <div>
                                Je conçois des espaces sains et fonctionnels adaptés aux usagers, que ce soit de l'habitat ou des établissements recevant du public.
                            </div>
                            <div className="mt-5">
                                Mon approche du projet se fait à travers les matériaux : de par leur aspect, leurs propriétés et leur impact environnemental. Les matériaux sont un point central dans ma démarche architecturale.
                            </div>
                        </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}