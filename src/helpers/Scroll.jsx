import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToSection() {
    const location = useLocation();

    useEffect(() => {
        const sectionId = location.hash.replace("#", "");
        if (!sectionId) return;

        const target = document.getElementById(sectionId);
        if (target) {
            requestAnimationFrame(() => {
                const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
            });
        }
    }, [location.hash]);
    
    return null;
}
