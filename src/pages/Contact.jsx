import Header from "../components/Header"
import Footer from "../components/Footer";
import PhotoContact from "../assets/PhotoContact.jpg";
export default function Contact() {
    return (
        <div>
            <Header />
            <div className="bg-orange-600 text-white w-full h-full md:h-screen flex flex-col md:flex-row items-center justify-center gap-3 md:gap-70 py-5 md:py-20 px-4">
                <h1 className="text-3xl md:mb-2 md:hidden text-left w-full px-4">Un projet ? <br/> Contactez-moi !</h1>
                <p className="md:hidden pl-4">Je serais ravi d'échanger avec vous sur votre projet d’aménagement ou de construction. <br />N'hésitez pas à me contacter pour toute interrogation ou demande de rendez-vous.</p>
                <div className="">
                    <img src={PhotoContact} alt="Photo de profil" className="w-75 h-75 md:w-96 md:h-96 object-cover rounded-full border-white border-5" />
                </div>
                
                <div className="max-md:flex-col-reverse flex md:flex-col gap-4 md:gap-10 w-full md:w-1/2 px-4">
                    <h1 className="text-xl font-semibold mb-2 max-md:hidden">Un projet ? Contactez-moi !</h1>
                    <p className="max-md:hidden">Je serais ravi d'échanger avec vous sur votre projet d’aménagement ou de construction. <br />N'hésitez pas à me contacter pour toute interrogation ou demande de rendez-vous.</p>
                    <div className="flex space-between flex-wrap justify-start md:mt-6 md:gap-10">
                        <div>
                            <h2>Zone d'intervention</h2>
                            <p>Ile-de-France et départements limitrophes</p>
                        </div>
                        <div>
                            <h2>Horaire</h2>
                            <p>Lundi - Vendredi : 9h - 18h</p>
                        </div>
                        
                    </div>
                    <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center items-center md:justify-start">
                        <a href="tel:0648705528" className="inline-flex w-fit bg-orange-200 hover:bg-orange-300 text-black font-bold py-2 px-4 rounded-4xl">
                                06 48 70 55 28
                        </a>
                        <a href="mailto:ateliergabrielsantos@gmail.com" className="inline-flex w-fit bg-orange-100 hover:bg-orange-200 text-black font-bold py-2 px-4 rounded-4xl">
                                ateliergabrielsantos@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}