import Loader from './components/ui/Loader'
import Navbar from './components/layouts/Navbar'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
import useReveal from './hooks/Reveal'
import Skills from './sections/skills/Skills'
import Projects from './sections/projects/Projects'
import Journey from './sections/journey/Journey'
import Contact from './sections/contacts/Contacts'
import Footer from './components/layouts/Footer'
function App() {
  useReveal();
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </>
  )
}

export default App
