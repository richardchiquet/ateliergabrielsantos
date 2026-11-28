import { buildMeta } from "../constants/Seo";
import { content } from "../constants/Content";

// Images
import histoire from "../assets/photosAtelier/histoire.webp";
import philosophie from "../assets/photosAtelier/philosophie.webp"

export const meta = () => buildMeta({
    title: content.meta.atelier.title,
    description: content.meta.atelier.description,
    path: "/atelier",
    breadcrumb: content.atelier.title,
});

// Découpe un texte en paragraphes (lignes vides) avec un écart réduit (12px) au lieu d'une ligne vide entière (24px)
// Les simples retours à la ligne restent respectés (text-formatting)
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
            {/* Histoire */}
            <section aria-labelledby="history-title" className="grid-page min-h-section grid-rows-[auto_1fr_auto_auto_auto_1fr] md:pb-20">
                <h1 className="py-12 text-left row-start-1">
                    {content.atelier.subtitle}
                </h1>
                <h2 id="history-title" className="py-2 row-start-3 md:col-[col_5/span_4] md:py-0 md:mb-6 lg:col-[col_6/content-end]">
                    {content.atelier.history.title}
                </h2>
                <Paragraphs 
                    text={content.atelier.history.textPart1} 
                    className="my-2 col-[col_2/span_3] row-start-4 md:my-0 md:col-[col_5/span_4] lg:col-[col_6/content-end] lg:[&_p]:max-w-none" 
                />
                <div className="grid-page col-full row-start-5 mt-6 md:contents">
                    <img
                        src={histoire}
                        alt={content.atelier.history.alt}
                        className="col-content w-full h-auto mt-6 md:mt-0 md:aspect-4/5 md:object-cover md:object-[40%_50%] md:col-[col_1/span_3] lg:col-[col_1/span_4] md:row-start-2 md:row-span-5 md:self-center"
                    />
                    <Paragraphs
                        text={content.atelier.history.textPart2} 
                        className="text-left py-6 col-[col_2/span_3] md:py-0 md:mt-3 md:row-start-5 md:col-[col_5/span_4] lg:col-[col_6/content-end] lg:[&_p]:max-w-none" 
                    />
                </div>
            </section>

            {/* Philosophie */}
            <section aria-labelledby="philosophy-title" className="grid-page min-h-section content-center bg-walnut-700 text-chrome-50 md:grid-rows-[1fr_auto_auto_auto_1fr]">
                <h2 id="philosophy-title" className="py-12 md:row-start-2 md:col-[col_1/span_5] md:py-0 md:mb-6 lg:col-[col_2/span_5]">
                    {content.atelier.philosophy.title}
                </h2>
                <Paragraphs 
                    text={content.atelier.philosophy.textPart1} 
                    className="pb-6 col-[col_2/span_3] md:row-start-3 md:col-[col_1/span_5] md:pb-0 lg:col-[col_2/span_5]" 
                />
                <img
                    src={philosophie}
                    alt={content.atelier.philosophy.alt}
                    loading="lazy"
                    decoding="async"
                    className="col-[col_1/span_2] aspect-1/2 w-full object-cover object-[50%_75%] md:h-auto md:max-h-[calc(100svh-var(--spacing-header)-5rem)] md:self-center md:row-start-1 md:row-span-5 md:col-[col_6/content-end] lg:col-[col_9/content-end]"
                />
                <Paragraphs 
                    text={content.atelier.philosophy.textPart2} 
                    className="py-6 pb-12 col-[col_2/span_3] md:row-start-4 md:col-[col_1/span_5] md:py-0 md:mt-3 lg:col-[col_2/span_5]"
                />
            </section>
        </div>
    )
}