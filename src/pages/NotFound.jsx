import { content } from "../constants/Content";
import Container from "../components/layout/Container";
import { Link } from "react-router";
import { websiteName } from "../constants/Seo";

export const meta = () => [
    { title: `${content.not_found.title} | ${websiteName}` },
    { name: "robots", content: "noindex" },
];

export default function NotFound() {
    return (
        <div className="bg-walnut-200">
            {/* « Page introuvable » est le titre de page (h1) : en haut à gauche comme sur les autres pages.
                Le grand « 404 », le texte et les boutons sont centrés verticalement dans l'espace restant (my-auto). */}
            <Container className="min-h-section flex flex-col pb-20">
                <h1 className="py-12 text-left">
                    {content.not_found.title}
                </h1>
                <div className="my-auto flex flex-col items-start max-w-xl self-center">
                    <p className="font-title text-8xl mb-6" aria-hidden="true">
                        {content.not_found.code}
                    </p>
                    <p className="text-formatting">
                        {content.not_found.text}
                    </p>
                    <div className="mt-10 flex flex-col md:flex-row gap-5">
                        <Link to={{ pathname: "/" }} className="cta-button walnut-primary w-fit">
                            {content.not_found.cta.home}
                        </Link>
                        <Link to={{ pathname: "/projets" }} className="cta-button walnut-secondary w-fit">
                            {content.not_found.cta.projects}
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}
