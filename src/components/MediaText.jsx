// Image sur 6 colonnes, texte sur 5 avec 1 colonne d'écart, texte centré verticalement.
// imageSide alterne gauche / droite pour le zigzag. En mobile : image puis texte.
export default function MediaText({ media, imageSide = "left", children }) {
    const right = imageSide === "right";

    return (
        <div className="grid-12 items-center gap-y-8">
            <div className={`md:col-span-6 md:row-start-1 ${right ? "md:col-start-7" : "md:col-start-1"}`}>
                {media}
            </div>
            <div className={`md:col-span-5 md:row-start-1 ${right ? "md:col-start-1" : "md:col-start-8"}`}>
                {children}
            </div>
        </div>
    );
}
