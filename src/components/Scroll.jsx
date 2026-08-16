import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToSection() {
    const location = useLocation();

    useEffect(() => {
        const sectionId = location.hash.replace("#", "");
        if (!sectionId) return;

        const target = document.getElementById(sectionId);
        if (target) {
            requestAnimationFrame(() => {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        }
    }, [location.hash]);
    
    return null;
}