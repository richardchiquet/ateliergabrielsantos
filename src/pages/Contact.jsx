import { buildMeta } from "../constants/Seo";
import { content } from "../constants/Content";
import Container from "../components/layout/Container";

// Images
import photoContact from "../assets/photosContact/portraitGabrielSantos.webp";

export const meta = () => buildMeta({
    title: content.meta.contact.title,
    description: content.meta.contact.description,
    path: "/contact",
});

export default function Contact() {
    return (
        <div className="bg-orange-600">
            {/* Un seul h1 : l'ordre visuel change selon l'écran grâce à la grille, pas en dupliquant le contenu.
                Mobile : titre, texte, portrait, infos. Bureau : portrait à gauche, titre + infos à droite.
                Le titre fait partie du bloc centré (pas aligné en haut comme sur les autres pages). */}
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
                    {/* flex-wrap + max-w-full : en tablette la colonne est étroite, le bouton e-mail passe à la ligne au lieu de déborder */}
                    <div className="mt-12 flex flex-col gap-8 justify-center items-center md:flex-row md:flex-wrap md:justify-start">
                        <a href={`tel:${content.contact.phone.url}`} className="cta-button orange-tertiary min-w-42 w-fit">
                            {content.contact.phone.text}
                        </a>
                        <a href={`mailto:${content.contact.email.text}`} className="cta-button orange-secondary inline-flex w-fit max-w-full break-all">
                            {content.contact.email.text}
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}