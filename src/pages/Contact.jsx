import { buildMeta } from "../constants/Seo";
import { content, contactLinks } from "../constants/Content";
import Container from "../components/layout/Container";

// Images
import photoContact from "../assets/photosContact/portraitGabrielSantos.webp";

export const meta = () => buildMeta({
    title: content.meta.contact.title,
    description: content.meta.contact.description,
    path: "/contact",
    breadcrumb: content.contact.title,
});

export default function Contact() {
    return (
        <div className="bg-orange-600">
            <Container className="grid-layout content-center items-center gap-y-6 min-h-section py-6 md:py-20">
                <div className="md:col-start-5 md:col-span-4 md:row-start-1 md:self-end lg:col-start-7 lg:col-span-6">
                    <h1 id="contact-title" className="mb-6">
                        {content.contact.subtitle}
                    </h1>
                    <p className="text-formatting">
                        {content.contact.text}
                    </p>
                </div>
                <div className="flex justify-center md:col-start-1 md:col-span-4 md:row-start-1 md:row-span-2 lg:col-span-5">
                    <img fetchPriority="high" src={photoContact} alt={content.contact.alt} width="392" height="392" className="aspect-square w-75 max-w-full h-auto object-cover rounded-full border-orange-50 border-5 md:w-98" />
                </div>
                <div className="md:col-start-5 md:col-span-4 md:row-start-2 md:self-start lg:col-start-7 lg:col-span-6">
                    <div className="flex flex-wrap justify-start gap-4 md:gap-8">
                        <div>
                            <h2 className="text-subtitle">
                                {content.contact.place.title}
                            </h2>
                            <p className="mt-2">
                                {content.contact.place.text}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-subtitle">
                                {content.contact.hours.title}
                            </h2>
                            <p className="mt-2">
                                {content.contact.hours.text}
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-col gap-8 justify-center items-center md:flex-row md:flex-wrap md:justify-start">
                        <a href={contactLinks.phone.href} className="cta-button orange-tertiary min-w-42 w-fit">
                            {contactLinks.phone.label}
                        </a>
                        <a href={contactLinks.email.href} className="cta-button orange-secondary inline-flex w-fit max-w-full break-all">
                            {contactLinks.email.label}
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}