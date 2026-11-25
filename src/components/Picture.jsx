// Seuls trois ratios sont autorisés sur le site.
// width / height servent à réserver la place de l'image avant son chargement.
const RATIOS = {
    portrait: { className: "aspect-3/4", width: 1200, height: 1600 },
    landscape: { className: "aspect-3/2", width: 1200, height: 800 },
    wide: { className: "aspect-video", width: 1600, height: 900 },
};

/**
 * @param {string} alt obligatoire : "" pour une image purement décorative.
 * @param {"portrait"|"landscape"|"wide"} ratio
 * @param {boolean} priority image au-dessus de la ligne de flottaison
 * @param {"cover"|"contain"} fit contain pour les plans et dessins (fond crème)
 * @param {string} caption crédit ou légende, affiché dans une figcaption
 */
export default function Picture({ src, alt, ratio = "landscape", priority = false, fit = "cover", position, caption, className = "" }) {
    if (alt === undefined && import.meta.env.DEV) {
        console.warn(`Picture : alt manquant pour ${src}`);
    }
    const r = RATIOS[ratio];

    const img = (
        <img
            src={src}
            alt={alt ?? ""}
            width={r.width}
            height={r.height}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : undefined}
            style={position ? { objectPosition: position } : undefined}
            className={`block h-auto w-full ${r.className} ${fit === "contain" ? "bg-cream object-contain" : "object-cover"} ${className}`}
        />
    );

    if (!caption) return img;

    return (
        <figure>
            {img}
            <figcaption className="text-small mt-2">{caption}</figcaption>
        </figure>
    );
}
