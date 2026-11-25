import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { Analytics } from "@vercel/analytics/react";
import { businessJsonLd, websiteJsonLd } from "./constants/Seo";
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
                <link rel="preload" href="index.css" as="style" />
                <link rel="icon" type="image/svg+xml" href="/atelierGabrielSantosIcon.svg?v=2" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
                <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap" rel="stylesheet" />
                <Meta />
                <Links />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
                />
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
