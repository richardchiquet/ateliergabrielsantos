import { buildMeta } from "../constants/Seo";
import { content } from "../constants/Content";
import Section from "../components/layout/Section";
import MediaText from "../components/MediaText";
import Picture from "../components/Picture";
import Button from "../components/Button";

// Images
import photoContact from "../assets/photosContact/portraitGabrielSantos.webp";

export const meta = () => buildMeta({
    title: content.meta.contact.title,
    description: content.meta.contact.description,
    path: "/contact",
});

export default function Contact() {
    const c = content.contact;

    return (
        <Section bg="accent" labelledBy="contact-title">
            <MediaText imageSide="left" media={<Picture src={photoContact} alt={c.alt} ratio="portrait" priority />}>
                <h1 id="contact-title">{c.subtitle}</h1>
                <p className="text-formatting mt-6">{c.text}</p>

                <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:gap-12">
                    <div>
                        <h2 className="text-subtitle">{c.place.title}</h2>
                        <p className="mt-2">{c.place.text}</p>
                    </div>
                    <div>
                        <h2 className="text-subtitle">{c.hours.title}</h2>
                        <p className="mt-2">{c.hours.text}</p>
                    </div>
                </div>

                <address className="mt-8 not-italic">
                    <p>{c.address.text}</p>
                    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                        <Button href={`tel:${c.phone.url}`} variant="secondary">{c.phone.text}</Button>
                        <Button href={`mailto:${c.email.text}`} variant="secondary" className="break-all">{c.email.text}</Button>
                    </div>
                </address>
            </MediaText>
        </Section>
    );
}
