import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-primary-50 text-black py-6 px-4 flex space-between flex-wrap justify-around max-md:hidden">
            <div>
                <h1 className="mb-4">A propos</h1>
            <p>Gabriel Santos, architecte HMONP, <br />vous accompagne dans la conception <br />et la réalisation de vos projets <br />à travers l'utilisation de matériaux naturels <br />et écologiques.</p>
            </div>
            <div>
                <h1 className="mb-4">Navigation</h1>
                <nav>
                    <ul className="space-y-1 list-disc" >
                        <li><Link to="/" className="hover:text-blue-400">Accueil</Link></li>
                        <li><Link to="/projets" className="hover:text-blue-400">Projets</Link></li>
                        <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
                        <li><Link to="/atelier" className="hover:text-blue-400">L'atelier</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
                    </ul>
                </nav>

            </div>
            <div>
                <h1 className="mb-4">Réseaux sociaux</h1>
                <nav>
                    <ul className="space-y-1">
                        <li><a href="https://www.linkedin.com/in/gabriel-santos-a584703a7/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a></li>
                        <li><a href="https://www.instagram.com/atelier_gabrielsantos/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Instagram</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <h1 className="mb-4">Contact</h1>
                <p>Adresse : 3 Place du Marché, 77860 Couilly-Pont-aux-Dames</p>
                <p className="mt-1">Téléphone : <a href="tel:06 48 70 55 28" className="hover:text-blue-400">+33 6 48 70 55 28</a></p>
                <p className="mt-1">Email : <a href="mailto:ateliergabrielsantos@gmail.com" className="hover:text-blue-400">ateliergabrielsantos@gmail.com</a></p>
            </div>
        </footer>
    )
}
