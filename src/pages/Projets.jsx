import { buildMeta } from "../constants/Seo";
import { content } from "../constants/Content";
import { projetsConfig } from "./projets/ProjetsConfig";
import Section from "../components/layout/Section";
import Card from "../components/Card";
import ContactCta from "../components/ContactCta";

export const meta = () => buildMeta({
    title: content.meta.projets.title,
    description: content.meta.projets.description,
    path: "/projets",
});

export default function Projets() {
    return (
        <>
            <Section labelledBy="projects-title">
                <h1 id="projects-title">{content.projects.title}</h1>
                <div className="grid-12 mt-12 gap-y-12">
                    {Object.entries(projetsConfig).map(([id, projet]) => (
                        <div key={id} className="md:col-span-6 lg:col-span-4">
                            <Card
                                to={`/projets/${id}`}
                                headingLevel={2}
                                accentClass={projet.color}
                                image={projet.cover}
                                title={projet.content.title}
                                meta={[projet.location, projet.year, projet.category, projet.status].filter(Boolean).join(" · ")}
                            />
                        </div>
                    ))}
                </div>
            </Section>
            <ContactCta />
        </>
    );
}
