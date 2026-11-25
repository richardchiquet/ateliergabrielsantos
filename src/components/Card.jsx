import { Link } from "react-router";
import Picture from "./Picture";

/*
    Carte : image 3:2, titre, méta, texte, lien éventuel.
    Avec `to`, toute la carte est cliquable via le lien du titre.
    `headingLevel` vaut 3 par défaut ; 2 quand la carte suit directement le h1.
*/
export default function Card({ image, imageAlt = "", caption, title, headingLevel = 3, meta, to, accentClass, children }) {
    const Heading = `h${headingLevel}`;

    return (
        <article className="relative flex h-full flex-col">
            {accentClass && <div className={`h-2 w-full ${accentClass}`} aria-hidden="true" />}
            {image && <Picture src={image} alt={imageAlt} ratio="landscape" caption={caption} />}
            <Heading className="text-subtitle mt-4">
                {to ? (
                    <Link to={to} className="underline-offset-4 after:absolute after:inset-0 hover:underline">
                        {title}
                    </Link>
                ) : title}
            </Heading>
            {meta && <p className="text-small mt-2">{meta}</p>}
            {children && <div className="mt-2">{children}</div>}
        </article>
    );
}
