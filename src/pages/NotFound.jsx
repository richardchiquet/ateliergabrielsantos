import { content } from "../constants/Content";
import { websiteName } from "../constants/Seo";
import Section from "../components/layout/Section";
import Button from "../components/Button";

export const meta = () => [
    { title: `${content.not_found.title} | ${websiteName}` },
    { name: "description", content: content.not_found.text.replace(/\s+/g, " ") },
    { name: "robots", content: "noindex" },
];

export default function NotFound() {
    return (
        <Section labelledBy="not-found-title">
            <p className="text-eyebrow">{content.not_found.code}</p>
            <h1 id="not-found-title" className="mt-4">{content.not_found.title}</h1>
            <p className="text-formatting mt-6">{content.not_found.text}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button to="/" variant="primary">{content.not_found.cta.home}</Button>
                <Button to="/projets" variant="secondary">{content.not_found.cta.projects}</Button>
            </div>
        </Section>
    );
}
