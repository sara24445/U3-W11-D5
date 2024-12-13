import React from 'react'
import Header from './components/Header'
import MusicCard from './components/MusicCard'
import NewReleases from './components/NewReleases'
import Footer from './components/Footer' // Se hai un Footer

const App = () => {
  return (
    <div>
      <Header />
      <NewReleases />
      {/* Aggiungi il Footer se necessario */}
    </div>
  )
}

export default App
