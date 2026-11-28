// Lien vers un autre site : ouvert dans un nouvel onglet, annoncé aux lecteurs d'écran.
export default function ExternalLink({ href, className, children }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {children}
            <span className="sr-only"> (nouvel onglet)</span>
        </a>
    );
}
