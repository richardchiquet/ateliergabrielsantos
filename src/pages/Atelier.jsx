import { buildMeta } from "../constants/Seo";
import { content } from "../constants/Content";

// Images
import histoire from "../assets/photosAtelier/histoire.webp";
import philosophie from "../assets/photosAtelier/philosophie.webp"

export const meta = () => buildMeta({
    title:content.meta.atelier.title,
    description: content.meta.atelier.description,
    path: "/atelier",
});

// Découpe un texte en paragraphes (lignes vides) avec un écart réduit (12px) au lieu d'une ligne vide entière (24px).
// Les simples retours à la ligne restent respectés (text-formatting).
function Paragraphs({ text, className = "" }) {
    return (
        <div className={className}>
            {text.split(/\n\s*\n/).map((paragraph, index) => (
                <p key={index} className={`text-formatting ${index > 0 ? "mt-3" : ""}`}>
                    {paragraph.trim()}
                </p>
            ))}
        </div>
    );
}

export default function Atelier() {

    return (
        <div>
            {/*
                Mise en page reprise du site en ligne (ateliergabrielsantos.com/atelier), posée sur la grille.
                Histoire, sur fond crème, grille pleine largeur (grid-page) : l'image est dans la grille, alignée sur la marge gauche.
                Mobile (4 col.)   : titre, texte décalé d'une colonne, image pleine largeur, suite du texte décalée.
                Tablette (8 col.) : image sur les colonnes 1 à 3, texte sur les colonnes 5 à 8.
                Bureau (12 col.)  : image sur les colonnes 1 à 4, titre et texte de la colonne 6 jusqu'au bout du contenu (colonne 12).
                L'image garde son format d'origine (paysage, sans recadrage) et est centrée verticalement sur le texte.
            */}
            {/* Des lignes extensibles (1fr) absorbent la hauteur de l'image : sans elles, la grille étirerait
                les lignes du titre et des paragraphes, ce qui crée de grands espaces entre eux.
                Le h1 (titre de page) reste en haut à gauche, en ligne 1, comme repère visuel.
                Une ligne extensible au-dessus et une en dessous du reste du contenu → contenu centré verticalement, à toutes les tailles. */}
            <section aria-labelledby="history-title" className="grid-page min-h-section grid-rows-[auto_1fr_auto_auto_auto_1fr] md:pb-20">
                <h1 className="py-12 text-left row-start-1">
                    {content.atelier.subtitle}
                </h1>
                <h2 id="history-title" className="py-2 row-start-3 md:col-[col_5/span_4] md:py-0 md:mb-6 lg:col-[col_6/content-end]">
                    {content.atelier.history.title}
                </h2>
                <Paragraphs text={content.atelier.history.textPart1} className="my-2 col-[col_2/span_3] row-start-4 md:my-0 md:col-[col_5/span_4] lg:col-[col_6/content-end] lg:[&_p]:max-w-none" />
                {/* Mobile : image pleine largeur puis suite du texte · Dès md : ses enfants rejoignent la grille (contents) */}
                <div className="grid-page col-full row-start-5 mt-6 md:contents">
                    <img
                        src={histoire}
                        alt={content.atelier.history.alt}
                        // Mobile : format paysage d'origine. Tablette / bureau : recadrage vertical (4:5) centré sur le plan,
                        // en gardant les mains, le visage et la règle (object-position 40 % horizontalement).
                        className="col-content w-full h-auto mt-6 md:mt-0 md:aspect-4/5 md:object-cover md:object-[40%_50%] md:col-[col_1/span_3] lg:col-[col_1/span_4] md:row-start-2 md:row-span-5 md:self-center"
                    />
                    <Paragraphs text={content.atelier.history.textPart2} className="text-left py-6 col-[col_2/span_3] md:py-0 md:mt-3 md:row-start-5 md:col-[col_5/span_4] lg:col-[col_6/content-end] lg:[&_p]:max-w-none" />
                </div>
            </section>

            {/*
                Philosophie : seule section marron (noyer) de la page, en mobile comme en bureau. Texte clair.
                Bureau : texte sur les colonnes 2 à 6, image de la colonne 9 au bord droit (≈ 30 %), recadrée sur Gabriel et centrée verticalement.
                Tablette : texte sur les colonnes 1 à 5, image de la colonne 7 au bord droit.
                Mobile : titre, texte décalé d'une colonne, image du bord gauche à la colonne 2 (≈ la moitié), suite du texte.
            */}
            <section aria-labelledby="philosophy-title" className="grid-page min-h-section content-center bg-walnut-700 text-chrome-50 md:grid-rows-[1fr_auto_auto_auto_1fr]">
                <h2 id="philosophy-title" className="py-12 md:row-start-2 md:col-[col_1/span_5] md:py-0 md:mb-6 lg:col-[col_2/span_5]">
                    {content.atelier.philosophy.title}
                </h2>
                <Paragraphs text={content.atelier.philosophy.textPart1} className="pb-6 col-[col_2/span_3] md:row-start-3 md:col-[col_1/span_5] md:pb-0 lg:col-[col_2/span_5]" />
                <img
                    src={philosophie}
                    alt={content.atelier.philosophy.alt}
                    loading="lazy"
                    decoding="async"
                    // Mobile : colonnes 1-2 · Tablette : colonnes 6-8 · Bureau : colonnes 9-12
                    className="col-[col_1/span_2] aspect-1/2 w-full object-cover object-[50%_75%] md:h-auto md:max-h-[calc(100svh-var(--spacing-header)-5rem)] md:self-center md:row-start-1 md:row-span-5 md:col-[col_6/content-end] lg:col-[col_9/content-end]"
                />
                <Paragraphs text={content.atelier.philosophy.textPart2} className="py-6 pb-12 col-[col_2/span_3] md:row-start-4 md:col-[col_1/span_5] md:py-0 md:mt-3 lg:col-[col_2/span_5]" />
            </section>
        </div>
    )
}