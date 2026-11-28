import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { Analytics } from "@vercel/analytics/react";
import { siteJsonLd } from "./constants/Seo";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Scroll from "./helpers/Scroll";

export function Layout({ children }) {
    return (
        <html lang="fr">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/svg+xml" href="/atelierGabrielSantosIcon.svg?v=2" />
                <link rel="preload" href="/fonts/instrument-sans-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
                <link rel="preload" href="/fonts/satoshi-400.woff2" as="font" type="font/woff2" crossOrigin="" />
                <Meta />
                <Links />
                {siteJsonLd.map((json) => (
                    <script key={json} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
                ))}
            </head>
            <body>
                <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:bg-cream focus:px-4 focus:py-2">
                    Aller au contenu
                </a>
                <Header />
                <main id="contenu" tabIndex={-1} className="focus:outline-none">
                    {children}
                </main>
                <Footer />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return (
        <>
            <Scroll />
            <Outlet />
            <Analytics />
        </>
    );
}
