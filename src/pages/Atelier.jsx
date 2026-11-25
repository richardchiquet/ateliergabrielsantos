import { buildMeta } from "../constants/Seo";
import { content } from "../constants/Content";
import Section from "../components/layout/Section";
import MediaText from "../components/MediaText";
import Picture from "../components/Picture";
import ContactCta from "../components/ContactCta";

// Images
import histoire from "../assets/photosAtelier/histoire.webp";
import philosophie from "../assets/photosAtelier/philosophie.webp";

export const meta = () => buildMeta({
    title: content.meta.atelier.title,
    description: content.meta.atelier.description,
    path: "/atelier",
});

export default function Atelier() {
    const { history, philosophy } = content.atelier;

    return (
        <>
            <Section labelledBy="history-title">
                <h1 className="mb-12">{content.atelier.subtitle}</h1>
                <MediaText imageSide="left" media={<Picture src={histoire} alt={history.alt} ratio="landscape" priority />}>
                    <h2 id="history-title">{history.title}</h2>
                    <p className="text-formatting mt-6">{history.textPart1}</p>
                </MediaText>
                <div className="grid-12 mt-12">
                    <p className="text-formatting md:col-span-5 md:col-start-8">{history.textPart2}</p>
                </div>
            </Section>

            <Section bg="teal" labelledBy="philosophy-title">
                <MediaText
                    imageSide="right"
                    media={<Picture src={philosophie} alt={philosophy.alt} ratio="portrait" position="50% 72%" />}
                >
                    <h2 id="philosophy-title">{philosophy.title}</h2>
                    <p className="text-formatting mt-6">{philosophy.textPart1}</p>
                    <p className="text-formatting mt-6">{philosophy.textPart2}</p>
                </MediaText>
            </Section>

            <ContactCta />
        </>
    );
}
