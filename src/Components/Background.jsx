import React from 'react'
import backImg from '../Assets/main-bg.png'
import iconImg from '../Assets/ams-icon.png'
import mainImg from '../Assets/main-bg-ams.png'
import { Button } from 'reactstrap'

function Background() {
    return (
        <div style={{ 
            backgroundImage: `url(${backImg})`, height:"676px", backgroundRepeat: 'no-repeat',backgroundSize: 'cover',  backgroundPosition: 'center', display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column"}}>

          <div style={{display:"flex"}}>

          <img src={iconImg} alt="iconImg" style={{height:"152px", width:"167px", marginTop:"50px", marginLeft:"-200px"}}/>

          <div style={{marginTop:"55px", color:"white", display:"flex", flexDirection:"column", alignItems:"center"}}>
          <h1 style={{height:"86px", width:"784px" , textAlign:"center", font: "normal normal bold 69px/86px Quicksand"}}>Avishkaar Maker Studio</h1>
          <h3 style={{height:"111px", width:"628px", textAlign:'center', font: "normal normal normal 30px/37px Roboto"}}>Now children can program their own interactive stories & games.</h3>
          <div style={{display:"flex", flex:'1', alignItems:'center'}}>
          <Button style={{backgroundColor:'white', color:"#FF7033", borderRadius:"35px", border: "none", height:"68px", width:"278px", font: "normal normal normal 28px/34px Roboto", marginRight:"30px", outline:"none"}}>Try AMS Online {'>'}</Button>
          <Button color="link" style={{color:"white", height:"34px", width:"163px", font: "normal normal normal 28px/34px Roboto", marginLeft:"30px", textDecoration:"none", padding:"0", border:"none", outline:"none"}}>Know More {'>'}</Button>
          </div>
          </div>
         
          
          </div>
          <div>
          <img src={mainImg} alt="mainImg" style={{height:"340.26px", width:"982.65px"}}/>
          </div>
          
        </div>
    )
}

export default Background
