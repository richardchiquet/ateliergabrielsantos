import { Link } from "react-router";
import { content } from "../constants/Content";

const { label, notice, privacy } = content.legal_links;

// « Mentions légales │ Politique de confidentialité »
export default function LegalLinks({ className = "", linkClassName = "", onNavigate }) {
    return (
        <nav aria-label={label} className={className}>
            <ul className="legal-links">
                {[notice, privacy].map((page) => (
                    <li key={page.url}>
                        <Link to={page.url} onClick={onNavigate} className={linkClassName}>
                            {page.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
