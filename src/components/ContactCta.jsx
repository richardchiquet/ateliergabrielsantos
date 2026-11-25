import { content } from "../constants/Content";
import Section from "./layout/Section";
import Button from "./Button";

// Appel à l'action commun : accueil, services, projets, fiches projet et atelier.
export default function ContactCta() {
    return (
        <Section bg="accent" labelledBy="cta-title">
            <h2 id="cta-title">{content.home.contact.title}</h2>
            <p className="text-formatting mt-6">{content.home.contact.text}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href={`tel:${content.contact.phone.url}`} variant="secondary">
                    {content.contact.phone.text}
                </Button>
                <Button href={`mailto:${content.contact.email.text}`} variant="secondary">
                    {content.contact.email.text}
                </Button>
            </div>
        </Section>
    );
}
