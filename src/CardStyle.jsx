import React from 'react'
import './CardStyle.css'
import 'bootstrap/dist/css/bootstrap.css'
import {AiFillFormatPainter} from 'react-icons/ai'
function CardStyle() {
    return (
        <div className="cardStyle">
            <div class="row justify-content-evenly align-center">
    <div class="col-md-6 col-sm-12 cardStyle__carousel ">
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
    <div class="col-md-6 col-sm-12 cardStyle__disclaimer">
   
    <AiFillFormatPainter className="cardStyle__icon"/>
    <br/>

    <h2>
    Select Your Style
    </h2>
    <p>
    Match your card to your personality. Whether you like a minimal look or something that catches everyone’s eyes, we’ve got a style for you. You can update your style every year, for a small fee 
    </p>
     
    </div>
        </div>
        </div>
    )
}

export default CardStyle
