import React, { useState } from "react";
import logo from "../assets/logoNB.png";

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const linksProjet = [
        { title: "Tous", href: "#" },
        { title: "Equipements", href: "#" },
        { title: "Logements", href: "#" },
        { title: "Maisons", href: "#" }
    ];
    const linksMedia = [
        { title: "Instagram architecture", href: "#" },
        { title: "Instagram voyage / croquis", href: "#" },
        { title: "Autres", href: "#" }
    ];

    return (
        <nav className={`h-screen bg-sprout200 shadow-md transition-all duration-200 flex flex-col ${open ? "w-64" : "w-20"}`}>
            <button aria-label={open ? "Close sidebar" : "Open sidebar"} onClick={() => setOpen(!open)} className="p-2 rounded hover:bg-slate-200 focus:outline-none">
                    {open ? (<span className="text-xl" aria-hidden>×</span>) : (<span className="text-xl" aria-hidden>☰</span>)}
            </button>
            <div className="flex items-center justify-between">
                <a href="#" className="flex items-center gap-3">
                    <img src={logo} alt="Logo" className={`w-30 h-30 object-contain transition-all duration-200 ${open ? "md:w-40" : ""}`} />
                    <div className={`flex flex-col font-extrabold leading-tight transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}>
                        <span className="text-sm md:text-lg">
                            El Gabriel
                        </span>
                        <span className="text-sm md:text-lg">
                            Santos
                        </span>
                    </div>
                </a>
            </div>
            <div className={` px-4 font-semibold ${open ? "opacity-100" : "opacity-0"} `}>
                ■ Présentation - Contact
            </div>
            <div className="px-4">
                <div className={`text-lg font-bold mb-3 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}>
                    ■ Projet
                </div>
                <ul className="space-y-2">
                    {linksProjet.map(link => (
                        <li key={link.title}>
                            <a href={link.href} className={`flex items-center gap-3 p-2 rounded hover:bg-slate-100 ${open ? "opacity-100" : "opacity-0"}`}>
                                <span className="w-2 h-2 bg-gray-500 rounded-full" aria-hidden />
                                <span className={`${open ? "inline" : "sr-only md:inline"}`}>
                                    {link.title}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={`mt-6 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}>
                    <div className="font-semibold mt-3">
                        Actualités
                    </div>
                </div>
                <div className={`mt-6 text-lg font-bold mb-3 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}>
                    ■ Média
                </div>
                <ul className="space-y-2">
                    {linksMedia.map(link => (
                        <li key={link.title}>
                            <a href={link.href} className={`flex items-center gap-3 p-2 rounded hover:bg-slate-100 ${open ? "opacity-100" : "opacity-0"}`}>
                                <span className="w-2 h-2 bg-gray-500 rounded-full" aria-hidden />
                                <span className={`${open ? "inline" : "sr-only md:inline"}`}>
                                    {link.title}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
