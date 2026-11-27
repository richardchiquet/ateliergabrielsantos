// Conteneur commun : contenu de 1104px max, centré, marges latérales 24px / 32px (md) / 48px (lg).
// Voir container-page dans index.css.
export default function Container({ className = "", children }) {
    return (
        <div className={`container-page ${className}`}>
            {children}
        </div>
    );
}
