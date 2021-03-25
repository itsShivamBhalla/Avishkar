import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Section from './Section'
import 'bootstrap/dist/css/bootstrap.css'
import Form from './Form'
import Reward from './Reward'
import CardStyle from './CardStyle'
import Faq from './Faq'
import Footer from './Footer'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <Section/>
      <Form/>
      <Reward/>
      <CardStyle/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
