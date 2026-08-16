import Header from "../components/Header"
import Footer from "../components/Footer";
import { content } from "../constants/Content";


// Images
import photoContact from "../assets/photosContact/portraitGabrielSantos.jpg";

export default function Contact() {
    return (
        <div id="top" className="min-h-screen scroll-mt-100">
            <Header />
            <div className="bg-orange-600 text-white w-full h-full md:h-screen flex flex-col md:flex-row items-center justify-center gap-3 md:gap-70 py-5 md:py-20 px-4">
                <h1 className="md:mb-2 md:hidden text-left w-full px-4">
                    {content.contact.subtitle}
                </h1>
                <p className="md:hidden pl-4">
                    {content.contact.text}
                </p>
                <div>
                    <img src={photoContact} alt="Profil" className="w-75 h-75 md:w-96 md:h-96 object-cover rounded-full border-white border-5" />
                </div>
                <div>
                    <h1 className="mb-5 max-md:hidden">
                        {content.contact.subtitle}
                    </h1>
                    <p className="text-formatting max-md:hidden">
                        {content.contact.text}
                    </p>
                    <div className="flex space-between flex-wrap justify-start md:mt-6 md:gap-10">
                        <div>
                            <h2>
                                {content.contact.place.title}
                            </h2>
                            <p>
                                {content.contact.place.text}
                            </p>
                        </div>
                        <div>
                            <h2>
                                {content.contact.hours.title}
                            </h2>
                            <p>
                                {content.contact.hours.text}
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col md:flex-row gap-8 justify-center items-center md:justify-start">
                        <a href={`tel:${content.contact.phone.url}`} className="cta-button contact-primary inline-flex w-fit">
                            {content.contact.phone.text}
                        </a>
                        <a href={`mailto:${content.contact.email.text}`} className="cta-button contact-secondary inline-flex w-fit">
                            {content.contact.email.text}
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}