import { index, route } from '@react-router/dev/routes'

export default [
  index('pages/Accueil.jsx'),
  route('projets', 'pages/Projets.jsx'),
  route('services', 'pages/Services.jsx'),
  route('atelier', 'pages/Atelier.jsx'),
  route('contact', 'pages/Contact.jsx'),
  route('projets/:projetId', 'pages/projets/ProjetDetail.jsx'),
  route('*', 'pages/NotFound.jsx'),
]