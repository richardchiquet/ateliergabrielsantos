import Header from "../components/Header"
import Footer from "../components/Footer";
import atelier1 from "../assets/PhotoAtelier/atelierPortrait.png";
import atelier2 from "../assets/PhotoAtelier/atelier.jpg"


export default function Atelier() {
    return (
        <div>
            <Header />
            <div className="h-screen w-full max-md:hidden">
                <h1 className="text-3xl px-10 py-10 text-left w-full">L'architecte derrière l'atelier</h1>
                <img src={atelier1} alt="Portrait de Gabriel Santos" className="absolute bottom-0 left-0 max-h-[80%] aspect-1/2 object-cover z-1"/>
                <div className="grid grid-cols-12">
                    <h1 className="col-start-6 text-2xl">Son histoire</h1>
                    <p className="col-start-6 col-span-5 my-2">L’Atelier d’Architecture Gabriel Santos est une entreprise dirigée par un architecte HMONP diplômé en 2021.</p>
                    <p className="col-start-6 col-span-5 my-2">Mon expérience me permet d’explorer tout type de projet architectural : de l’habitat particulier, des logements, des équipements publics, des commerces, de l’aménagement intérieur et du dessin de mobilier.</p>
                    <p className="col-start-6 col-span-5 my-2">Engagés dans des démarches critiques sur la profession, les questions écologiques sont centrales dans mon travail et deviennent une opportunité de projet capable de faire émerger une architecture chaleureuse qui s’inscrit dans un contexte local, qui maîtrise son empreinte environnementale et qui offre une grande qualité de vie et d’usage.</p>
                    <p className="col-start-6 col-span-5 my-2">Mon approche du projet cherche à trouver un équilibre entre les éléments existants, ceux créés par le projet et les besoins de la maîtrise d’ouvrage.</p>
                    <p className="col-start-6 col-span-5 my-2">La simplicité et la cohérence des aménagements proposés permettent d’apprécier une qualité architecturale et de créer des projets où le rapport qualité-prix prend tout son sens et devient inhérent au projet.</p>
                    <p className="col-start-6 col-span-5 my-2">Le temps de la conception et du dialogue est très important. Il permet, lorsqu’il est suffisant, d’éviter une conception trop générale et peu adaptée aux besoins des usagers.</p>
                    <p className="col-start-6 col-span-5 my-2">La réussite d’un projet passe par une définition précise des ouvrages mis en œuvre. Le choix des matériaux, le rapport au sol, la cohérence structurelle, les aménagements extérieurs, la gestion des flux, le choix des couleurs et tant d’autres sont des enjeux qui contribuent grandement à la qualité finale du projet.</p>
                </div>
                <div className='absolute bottom-0 w-full bg-walnut-700 h-30 -z-10'></div>
            </div>
            <div className="relative h-screen w-full -mt-20 max-md:hidden">
                <div className='relative top-0 w-full bg-walnut-700 h-30 -z-10'></div>
                <img src={atelier2} alt="Gabriel au japon / Calin" className="absolute bottom-0 right-0 max-w-[30%] max-h-full w-auto object-cover z-10" />
                <div className="grid grid-cols-12 mt-50">
                    <h1 className="col-start-2 col-span-2 text-2xl">Sa philosophie</h1>
                    <p className="col-start-2 col-span-5 my-2">La place des matériaux est centrale dans le secteur de la construction. Celui-ci représente 43% des émissions de gaz à effet de serre en France en 2022. Il participe donc grandement au dérèglement climatique.</p>
                    <p className="col-start-2 col-span-5 my-2">L'utilisation de matériaux bio-sourcés et géo-sourcés accompagnés d’une conception prenant en compte les variations climatiques est une solution adaptée pour réduire l’impact environnemental du secteur.</p>
                    <p className="col-start-2 col-span-5 my-2">C’est pour cela que j’ai à cœur de concevoir des espaces sains et fonctionnels adaptés aux besoins des usagers.</p>
                    <p className="col-start-2 col-span-5 my-2">Et cela passe par la compréhension des matériaux utilisés dans la construction : leur aspect, leurs propriétés et leur impact environnemental.<br />Les matériaux et leur mise en œuvre sont un point central dans ma démarche architecturale.</p>
                </div>
            </div>
            <div className="md:hidden">
                <div className="h-screen w-full">
                    <h1 className="text-3xl px-10 py-10 text-left w-full">L'atelier</h1>
                    <h2 className="text-2xl px-10 py-2 text-left w-full">Son histoire</h2>
                    <p className="px-10 py-2 text-left w-full pl-20">L’Atelier d’Architecture Gabriel Santos est une entreprise dirigée par un architecte HMONP diplômé en 2021.</p>
                    <p className="px-10 py-2 text-left w-full pl-20">Mon expérience me permet d’explorer tout type de projet architectural : de l’habitat particulier, des logements, des équipements publics, des commerces, de l’aménagement intérieur et du dessin de mobilier.</p>
                    <p className="px-10 py-2 text-left w-full pl-20">Engagés dans des démarches critiques sur la profession, les questions écologiques sont centrales dans mon travail et deviennent une opportunité de projet capable de faire émerger une architecture chaleureuse qui s’inscrit dans un contexte local, qui maîtrise son empreinte environnementale et qui offre une grande qualité de vie et d’usage.</p>
                    <img src={atelier1} alt="Portrait de Gabriel Santos" className="w-full h-auto object-cover mt-5" />
                </div>
                <div className="h-screen w-full bg-walnut-700">
                    <div className="text-white flex flex-col justify-center items-center align-center h-full">
                        <p className="px-10 py-5 text-left w-full pl-20">Mon approche du projet cherche à trouver un équilibre entre les éléments existants, ceux créés par le projet et les besoins de la maîtrise d’ouvrage.</p>
                        <p className="px-10 py-2 text-left w-full pl-20">La simplicité et la cohérence des aménagements proposés permettent d’apprécier une qualité architecturale et de créer des projets où le rapport qualité-prix prend tout son sens et devient inhérent au projet.</p>
                        <p className="px-10 py-2 text-left w-full pl-20">Le temps de la conception et du dialogue est très important. Il permet, lorsqu’il est suffisant, d’éviter une conception trop générale et peu adaptée aux besoins des usagers.</p>
                        <p className="px-10 py-2 text-left w-full pl-20">La réussite d’un projet passe par une définition précise des ouvrages mis en œuvre. Le choix des matériaux, le rapport au sol, la cohérence structurelle, les aménagements extérieurs, la gestion des flux, le choix des couleurs et tant d’autres sont des enjeux qui contribuent grandement à la qualité finale du projet.</p>
                    </div>
                </div>
                <div className="h-screen w-full bg-white">
                    <h1 className="text-3xl px-10 py-10 text-left w-full">Sa philosophie</h1>
                    <p className="px-10 py-2 text-left w-full pl-30">La place des matériaux est centrale dans le secteur de la construction. Celui-ci représente 43% des émissions de gaz à effet de serre en France en 2022. Il participe donc grandement au dérèglement climatique.</p>
                    <p className="px-10 py-2 text-left w-full pl-30">L'utilisation de matériaux bio-sourcés et géo-sourcés accompagnés d’une conception prenant en compte les variations climatiques est une solution adaptée pour réduire l’impact environnemental du secteur.</p>
                    <img src={atelier2} alt="Gabriel au japon / Calin" className="w-[50%] h-[60vh] max-h-[60vh] object-cover object-bottom mt-5" />
                    <p className="px-10 py-2 text-left w-full pl-30 mt-10">C’est pour cela que j’ai à cœur de concevoir des espaces sains et fonctionnels adaptés aux besoins des usagers.</p>
                    <p className="px-10 py-2 text-left w-full pl-30 pb-10">Et cela passe par la compréhension des matériaux utilisés dans la construction : leur aspect, leurs propriétés et leur impact environnemental.<br />Les matériaux et leur mise en œuvre sont un point central dans ma démarche architecturale.</p>
                    

                </div>                    
            </div>
            <Footer />
        </div>
    )
}