import React from 'react'
import socialImg from '../Assets/Untitled-2@2x.png'
function Bottombar() {
    return (
        <div style={{height:"96px", backgroundColor:"#5F5F5F", display:"flex", alignItems:'center', justifyContent:'space-around'}}>

        <h4 style={{color:"white", width: "376px",
height: "18px",
textAlign:" left",
font: "normal normal normal 15px/18px Roboto",}}>Privacy Policy | Terms of Use | Shipping & Cancellations</h4>
        <div style={{display:"flex", alignItems:"center", justifyContent:'center'}}>
            <h4 style={{color:"white", width: "112px",
height: "18px",
textAlign: "left",
font:" normal normal bold 15px/18px Roboto"}}>Connect with us:</h4>
            <img src={socialImg} alt="" style={{height:'31px', width:'190px', marginLeft:'30px'}}/>
        </div>
            
        </div>
    )
}

export default Bottombar
