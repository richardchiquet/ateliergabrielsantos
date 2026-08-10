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
      </Routes>
    </Router>
  )
}

export default App
