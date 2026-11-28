import { index, route } from '@react-router/dev/routes'

export default [
  index('pages/Accueil.jsx'),
  route('projets', 'pages/Projets.jsx'),
  route('projets/:projetId', 'pages/projets/ProjetDetail.jsx'),
  route('services', 'pages/Services.jsx'),
  route('atelier', 'pages/Atelier.jsx'),
  route('contact', 'pages/Contact.jsx'),
  route('mentions-legales', 'pages/MentionsLegales.jsx'),
  route('politique-de-confidentialite', 'pages/PolitiqueConfidentialite.jsx'),
  route('*', 'pages/NotFound.jsx'),
]