import React from 'react'
import imgDots from '../Assets/yellow-pattern-2.png'
import imgStars from '../Assets/yellow-pattern-1.png'
import iconLogo from '../Assets/burn-utility-icon.png'
import available from '../Assets/windows-button.png'
function Hero() {
    return (
        <div style={{height:"576px", backgroundColor:"#FF9B00F2", position:"relative", display:'flex', alignItems:"center", justifyContent:"center"}}>

        <img src={imgDots} alt="dots" style={{width: "248px",
height: "291px" ,position:"absolute", top:"0", right:"0"}}/>

<img src={imgStars} alt="" style={{width:"230px", height:"295px", position:'absolute', bottom:"0", left:"0"}}/>

<div style={{height:"391px", width:"1088px", backgroundColor:"#FBAC31", borderRadius: "20px", zIndex:"99", color:"white", padding: "22px 0 33px 57px", boxShadow:" 0px 6px 6px #00000029"}}>

<h1 style={{font: "normal normal bold 60px/75px Quicksand"}}>
What's New!
</h1>
<div style={{display:"flex"}}>
    <img src={iconLogo} alt="icon" style={{ height:"241px", width:"241px"}}/>

    <div style={{padding:"0 91px 0 79px"}}>
        <h3 style={{font: "normal normal bold 39px/47px Roboto"}}>
        Browse. Connect. Burn
        </h3>
        <h6 style={{font: "normal normal normal 26px/32px Roboto"}}>
        With the AMS Burn Utility feature, users can directly burn an AMS program onto the hardware.
        </h6>
        <div style={{display:'flex' }}>
        <p style={{font: "normal normal bold 17px/20px Roboto", marginTop:"51px", marginRight:"26px"}}>Available On: </p>
        <img src={available} alt="available" style={{width:"176px", height:'61px', marginTop:"33px"}}/>
        </div>
       
        
        
    </div>
</div>
</div>

           
        </div>
    )
}

export default Hero
