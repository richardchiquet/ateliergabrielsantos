import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import Atelier from "./pages/Atelier";
import Projets from "./pages/Projets";
import Services from "./pages/Services";
import ProjetDetail from "./pages/projets/ProjetDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/atelier' element={<Atelier />} />
        <Route path='/projets' element={<Projets />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projets/:projetId' element={<ProjetDetail />} />
      </Routes>
    </Router>
  )
}

export default App
