import { Link } from "react-router";
import Container from "./Container";
import ExternalLink from "../ExternalLink";
import { legal } from "../../constants/Legal";

const linkClass = "underline underline-offset-4 break-words";

// Un morceau de paragraphe : texte, lien interne, lien vers un autre site, ou lien mailto / tel
function Part({ part }) {
    if (typeof part === "string") return <>{part}</>;
    if (part.href.startsWith("/")) {
        return <Link to={part.href} className={linkClass}>{part.label}</Link>;
    }
    if (part.href.startsWith("http")) {
        return <ExternalLink href={part.href} className={linkClass}>{part.label}</ExternalLink>;
    }
    return <a href={part.href} className={linkClass}>{part.label}</a>;
}

const Parts = ({ value }) => (Array.isArray(value) ? value : [value]).map((part, i) => <Part key={i} part={part} />);

function Block({ block, first }) {
    const spacing = first ? undefined : "mt-4";

    if (block.list) {
        return (
            <ul className={`list-disc ml-5 space-y-1 ${spacing ?? ""}`}>
                {block.list.map((item, i) => <li key={i}><Parts value={item} /></li>)}
            </ul>
        );
    }

    // Liste de définitions
    if (block.details) {
        return (
            <dl className={`grid gap-x-6 gap-y-2 md:grid-cols-[minmax(0,14rem)_1fr] ${spacing ?? ""}`}>
                {block.details.map(([term, value]) => (
                    <div key={term} className="contents">
                        <dt className="font-medium max-md:mt-2">{term}</dt>
                        <dd><Parts value={value} /></dd>
                    </div>
                ))}
            </dl>
        );
    }

    // Tableau des traitements
    if (block.table) {
        const { caption, head, rows } = block.table;
        return (
            <table className={`w-full text-left max-lg:block ${spacing ?? ""}`}>
                <caption className="sr-only">{caption}</caption>
                <thead className="max-lg:sr-only">
                    <tr className="border-b-2 border-ink">
                        {head.map((cell) => <th key={cell} scope="col" className="py-2 pr-4 align-bottom font-medium">{cell}</th>)}
                    </tr>
                </thead>
                <tbody className="max-lg:block max-lg:space-y-4">
                    {rows.map((row) => (
                        <tr key={row[0]} className="border-b border-ink/30 max-lg:block max-lg:border max-lg:p-4">
                            {row.map((cell, i) =>
                                i === 0 ? (
                                    <th key={i} scope="row" className="py-3 pr-4 align-top font-medium max-lg:block max-lg:p-0 max-lg:pb-2">{cell}</th>
                                ) : (
                                    <td key={i} data-label={head[i]} className="py-3 pr-4 align-top max-lg:block max-lg:py-1 max-lg:before:block max-lg:before:text-small max-lg:before:font-medium max-lg:before:content-[attr(data-label)]">
                                        {cell}
                                    </td>
                                )
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    if (block.box) {
        return (
            <div className={`border-l-4 border-orange-600 bg-orange-100 p-5 ${spacing ?? ""}`}>
                {block.box.map((item, i) => <p key={i} className={i > 0 ? "mt-2" : undefined}><Parts value={item} /></p>)}
            </div>
        );
    }

    return <p className={spacing}><Parts value={block} /></p>;
}

/*
    Mise en page commune aux pages légales
*/
export default function LegalPage({ page }) {
    return (
        <Container className="grid-layout content-start min-h-section pb-20">
            <div className="col-span-full py-12">
                <h1 className="text-left">{page.title}</h1>
                <p className="mt-4 text-subtitle">{page.intro}</p>
                <p className="mt-2 text-small">{legal.updated_label} {legal.updated}</p>
            </div>

            <nav aria-labelledby="sommaire" className="col-span-full mb-12 md:col-span-6 lg:col-span-3 lg:mb-0">
                <div className="lg:sticky lg:top-[calc(var(--spacing-header)+2rem)]">
                    <h2 id="sommaire" className="text-eyebrow mb-3">{legal.toc_label}</h2>
                    <ol className="space-y-1 border-l border-ink/30 pl-4">
                        {page.sections.map((section) => (
                            <li key={section.id}>
                                <a href={`#${section.id}`} className="inline-flex min-h-6 items-center underline-offset-4 hover:underline">
                                    {section.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>
            </nav>

            <div className="col-span-full lg:col-start-4 lg:col-span-9">
                {page.sections.map((section) => (
                    <section key={section.id} id={section.id} aria-labelledby={`${section.id}-titre`} className="mb-12 last:mb-0">
                        <h2 id={`${section.id}-titre`} className="text-subtitle mb-4">{section.title}</h2>
                        {section.blocks.map((block, i) => <Block key={i} block={block} first={i === 0} />)}
                    </section>
                ))}
            </div>
        </Container>
    );
}
