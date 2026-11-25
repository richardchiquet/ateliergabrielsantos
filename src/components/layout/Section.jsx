import Container from "./Container";

/*
    Alternance des fonds, identique sur toutes les pages :
    - cream   : fond par défaut de toutes les sections ;
    - teal    : section mise en avant (au plus une sur deux, jamais deux colorées à la suite) ;
    - mustard : seconde section mise en avant d'une même page, après une section teal ;
    - accent  : réservé à l'appel à l'action « Discutons de votre projet » et à la page Contact.
    Le fond occupe toute la largeur de l'écran, le contenu reste dans le Container.
*/
const BACKGROUNDS = {
    cream: "bg-cream",
    teal: "bg-teal",
    mustard: "bg-mustard",
    accent: "bg-accent",
};

export default function Section({ id, labelledBy, bg = "cream", className = "", children }) {
    return (
        <section
            id={id}
            aria-labelledby={labelledBy}
            className={`scroll-mt-header py-20 lg:py-30 ${BACKGROUNDS[bg]} ${className}`}
        >
            <Container>{children}</Container>
        </section>
    );
}
