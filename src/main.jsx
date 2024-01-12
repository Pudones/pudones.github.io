import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './Components/Header/Header.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />

    <main>
      <Hero />
      <Projects />
      <Contact />
    </main>

    <Footer />

  </React.StrictMode>,
)
