// Conteneur commun : 1200px max, centré, marges latérales 24px / 32px (md) / 48px (lg).
export default function Container({ className = "", children }) {
    return (
        <div className={`mx-auto w-full max-w-site px-6 md:px-8 lg:px-12 ${className}`}>
            {children}
        </div>
    );
}
