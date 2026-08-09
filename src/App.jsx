import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import Atelier from "./pages/Atelier";
import Projets from "./pages/Projets";
import Services from "./pages/Services";
import Projet1 from "./pages/projets/Projet1";
import Projet2 from "./pages/projets/Projet2";
import Projet3 from "./pages/projets/Projet3";
import Projet4 from "./pages/projets/Projet4";
import Projet5 from "./pages/projets/Projet5";
import Projet6 from "./pages/projets/Projet6";
import Projet7 from "./pages/projets/Projet7";
import Projet8 from "./pages/projets/Projet8";
import Projet9 from "./pages/projets/Projet9";
import Projet10 from "./pages/projets/Projet10";
import Projet11 from "./pages/projets/Projet11";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/atelier' element={<Atelier />} />
        <Route path='/projets' element={<Projets />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projets/Projet1' element={<Projet1 />} />
        <Route path='/projets/Projet2' element={<Projet2 />} />
        <Route path='/projets/Projet3' element={<Projet3 />} />
        <Route path='/projets/Projet4' element={<Projet4 />} />
        <Route path='/projets/Projet5' element={<Projet5 />} />
        <Route path='/projets/Projet6' element={<Projet6 />} />
        <Route path='/projets/Projet7' element={<Projet7 />} />
        <Route path='/projets/Projet8' element={<Projet8 />} />
        <Route path='/projets/Projet9' element={<Projet9 />} />
        <Route path='/projets/Projet10' element={<Projet10 />} />
        <Route path='/projets/Projet11' element={<Projet11 />} />
      </Routes>
    </Router>
  )
}

export default App
