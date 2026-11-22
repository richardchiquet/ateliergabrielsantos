import { buildMeta } from "../constants/Seo";
import Header from "../components/Header"
import { content } from "../constants/Content";
import Footer from "../components/Footer";

// Images
import photoContact from "../assets/photosContact/portraitGabrielSantos.webp";

export const meta = () => buildMeta({
    title: content.meta.contact.title,
    description: content.meta.contact.description,
    path: "/contact",
});

export default function Contact() {
    return (
        <div id="0" className="min-h-screen scroll-mt-100">
            <Header />
            <div className="bg-orange-600 w-full h-full flex flex-col items-center justify-around py-5 px-4 md:h-screen md:flex-row md:py-20">
                <h1 className="text-left w-full px-4 md:mb-2 md:hidden">
                    {content.contact.subtitle}
                </h1>
                <p className="pl-4 md:hidden">
                    {content.contact.text}
                </p>
                <div className="max-md:m-5">
                    <img rel="preload" fetchPriority="high" src={photoContact} alt={content.contact.alt} className="w-75 h-75 object-cover rounded-full border-orange-50 border-5 md:w-98 md:h-98" />
                </div>
                <div>
                    <h1 className="mb-5 max-md:hidden">
                        {content.contact.subtitle}
                    </h1>
                    <p className="text-formatting max-md:hidden">
                        {content.contact.text}
                    </p>
                    <div className="flex flex-wrap justify-start md:mt-6 md:gap-10">
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
                    <div className="mt-10 flex flex-col gap-8 justify-center items-center md:flex-row md:justify-start">
                        <a href={`tel:${content.contact.phone.url}`} className="cta-button orange-tertiary min-w-42 w-fit">
                            {content.contact.phone.text}
                        </a>
                        <a href={`mailto:${content.contact.email.text}`} className="cta-button orange-secondary inline-flex w-fit">
                            {content.contact.email.text}
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}