import Header from "../components/Header"
import Footer from "../components/Footer";
import { content } from "../constants/Content";

// Images
import photoContact from "../assets/photosContact/photoContact.jpg";

export default function Contact() {
    return (
        <div>
            <Header />
            <div className="bg-orange-600 text-white w-full h-full md:h-screen flex flex-col md:flex-row items-center justify-center gap-3 md:gap-70 py-5 md:py-20 px-4">
                <h1 className="text-3xl md:mb-2 md:hidden text-left w-full px-4">
                    {content.contact.subtitle}
                </h1>
                <p className="md:hidden pl-4">
                    {content.contact.text}
                </p>
                <div className="">
                    <img src={photoContact} alt="Profil" className="w-75 h-75 md:w-96 md:h-96 object-cover rounded-full border-white border-5" />
                </div>
                <div>
                    <h1 className="text-xl font-semibold mb-2 max-md:hidden">
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
                    <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center items-center md:justify-start">
                        <a href={`tel:${content.contact.phone.url}`} className="inline-flex w-fit bg-orange-200 hover:bg-orange-300 text-black font-bold py-2 px-4 rounded-4xl">
                            {content.contact.phone.text}
                        </a>
                        <a href={`mailto:${content.contact.email.text}`} className="inline-flex w-fit bg-orange-100 hover:bg-orange-200 text-black font-bold py-2 px-4 rounded-4xl">
                            {content.contact.email.text}
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}