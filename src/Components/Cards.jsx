import React from 'react'
import { Button } from 'reactstrap'


function Cards() {
    return (
        <div>
             <div style={{color:'white', background:" #E28F0D 0% 0% no-repeat padding-box",width: "319px",
height: "87px", borderRadius:" 11px", display:'flex', flexDirection:"column", justifyContent:'center'}}>

             <h3 style={{font: "normal normal bold 26px/32px Roboto", paddingLeft:"17px"}}>
             Version 2.3.2.3
             </h3>
             <h4 style={{font: "italic normal normal 20px/24px Roboto", paddingLeft:"17px"}}>
             (6th September 2019)
             </h4>
             </div>
             <div>
             
               <h4 style={{width: "282px",
height: "135px",
textAlign: "left",
font: "normal normal normal 22px/27px Roboto", color:"white", paddingLeft:"10px", paddingTop:'9px'}}>
               Sprite handling improved for Maker Board V1 Mode. 
               <br/><br/>Bug fixes & enhancements for E-Series & Tweak Mode.
               </h4>
             </div>

             <Button style={{backgroundColor:"#332929", borderRadius:"22px", width: "173px",font: "normal normal normal 22px/27px Roboto",
height: "43px", marginTop:'27px'}}>Download {">"}</Button>

        </div>
    )
}

export default Cards
