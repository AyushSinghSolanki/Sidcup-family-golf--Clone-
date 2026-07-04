import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import MouseFollower from './components/Mousefollower'
import Cards from './components/ParllexCards'
import InfiniteMarque from './components/InfiniteMarque'
import CTA from './components/CTA'
import Menubar from './components/Menubar'
import Slider from './components/Slider'
import Announcement from './components/Announcement'
import WAitfor from './components/WAitfor'
import Footer from './components/Fotter'
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <InfiniteMarque />
      <About />
      <MouseFollower />
      <Cards />
      <CTA />
      <Menubar />
      <Slider />
      <Announcement />
      <WAitfor />
      <Footer />
    </div>

  )
}

export default App
