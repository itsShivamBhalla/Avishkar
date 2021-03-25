import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Hero.css'
import card from './images/image.PNG'
function Hero() {
    return (
        <div className="hero">
        <div class="container">


        <div class="row">
    <div class="col-md-6 col-sm-12  first">
      <h1 class="text-align-center">
      Build a Credit Card That is Definitely Yours
      </h1>
      <p>
      With the OneSync Credit Card you can customise your card the 
      way you want
      </p>

      <button class="btn btn-outline-success ps-5 pe-5" >Get Started</button>
    </div>
    <div class="col-md-6 col-sm-12 second">
    <img src={card} alt="card_pic"/>
    </div>
  </div>
        </div>

      
  </div>
    )
}

export default Hero
