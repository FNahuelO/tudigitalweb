import { Container } from '../style/Container'
import Contacto from './pages/Contacto'
import Home from './pages/Home'
//import './App.css'
import Nav from './components/Nav'
import Nosotros from './pages/Nosotros'
import Prices from './pages/Prices'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap"
        rel="stylesheet"
      />
      <Container flex="column" bg="white">
        <Nav />
        <Home />
        <Services />
        <Prices />
        <Nosotros />
        <Portfolio />
        <Contacto />
      </Container>
    </>
  )
}

export default App
