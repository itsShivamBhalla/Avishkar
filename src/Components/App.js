import React from 'react'
import '../Styles/Style.css'
import Background from './Background'
import Banner from './Banner'
import Bottombar from './Bottombar'
import Compatible from './Compatible'
import Download from './Download'
import Features from './Features'
import Frequently from './Frequently'
import Hero from './Hero'
import Navbar from './Navbar'
import Promo from './Promo'
import Requirement from './Requirement'
import Support from './Support'
import Updates from './Updates'
import Video from './Video'
import WidgetArea from './WidgetArea'


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Background/>
      <Hero/>
      <Banner text="Join the community of coders at an early age!"/>
      <Video/>
      <Features/>
      <Compatible/>
      <Updates/>
      <Requirement/>
      <Download/>
      <Banner text="Teachers/Trainers & Makers worldwide use AMS."/>
      <Promo/>
      <Frequently/>
      <Support/>
      <WidgetArea/>
      <Bottombar/>
    </div>
  )
}

export default App

