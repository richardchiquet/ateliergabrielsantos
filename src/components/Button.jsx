import { Link } from "react-router";

const BASE = "inline-flex min-h-11 items-center justify-center rounded-full border-2 px-6 py-2 text-body font-medium transition-colors";

const VARIANTS = {
    // Texte ink sur accent : contraste ≈ 5.2:1
    primary: "border-accent bg-accent text-ink hover:border-orange-500 hover:bg-orange-500",
    secondary: "border-ink bg-cream text-ink hover:bg-greige-100",
};

// to : lien interne (react-router) · href : lien externe, tel: ou mailto:
export default function Button({ to, href, variant = "primary", className = "", children, ...props }) {
    const classes = `${BASE} ${VARIANTS[variant]} ${className}`;

    if (to) {
        return <Link to={to} className={classes} {...props}>{children}</Link>;
    }
    return <a href={href} className={classes} {...props}>{children}</a>;
}
