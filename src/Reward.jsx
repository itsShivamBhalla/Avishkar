import React from 'react'
import './Reward.css'
import 'bootstrap/dist/css/bootstrap.css'
import {GiMeepleGroup} from 'react-icons/gi'
function Reward() {
    return (
        <div className="reward">
       
       
       <div class="row justify-content-evenly align-center">
    <div class="col-md-6 reward__description ">
    <GiMeepleGroup className="reward__icon"/>
    <br/>
    <h1>
    Choose Your Rewards
    </h1>
    <p>
    Match your card to your lifestyle. We’ve got benefits from across brands & categories for you to choose from. Each benefit has an attached fee. Just add the ones you like to your card.
    </p>
   </div>
    <div class="col-md-6  instructions">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://source.unsplash.com/1600x900/?nature,water" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/1600x900/?snow" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/1600x900/?wildlife" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
     
    </div>
  </div>
        </div>
    )
}

export default Reward
