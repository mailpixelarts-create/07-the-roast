import { useEffect, useState } from 'react'
import Loader from './components/Loader/Loader'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import TheRoastery from './components/TheRoastery/TheRoastery'
import RoastingProcess from './components/RoastingProcess/RoastingProcess'
import CoffeeOrigins from './components/CoffeeOrigins/CoffeeOrigins'
import SignatureBeans from './components/SignatureBeans/SignatureBeans'
import FactoryGallery from './components/FactoryGallery/FactoryGallery'
import BrewingScience from './components/BrewingScience/BrewingScience'
import Team from './components/Team/Team'
import Awards from './components/Awards/Awards'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Cursor from './components/Cursor/Cursor'
import useLenis from './hooks/useLenis'

function App() {
  const [loading, setLoading] = useState(true)

  useLenis()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Cursor />
      <Navigation />
      <main>
        <Hero />
        <TheRoastery />
        <RoastingProcess />
        <CoffeeOrigins />
        <SignatureBeans />
        <FactoryGallery />
        <BrewingScience />
        <Team />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
