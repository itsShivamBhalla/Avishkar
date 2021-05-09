import React from 'react'
import icon1 from '../Assets/icon1.png'
import icon2 from '../Assets/icon2.png'
import icon3 from '../Assets/icon3.png'
import icon4 from '../Assets/icon4.png'
import icon5 from '../Assets/icon5.png'
function Requirement() {
    return (
        <div style={{height:"607px", display:'flex', justifyContent:"center"}}>
           
            <div style={{display:"flex", justifyContent:'center', alignItems:"center"}}>
            <h1 style={{width: "403px",
height: "150px",
textAlign: "left",
font:" normal normal bold 60px/75px Quicksand",
letterSpacing: "0px",
color:" #686868"}}>System Requirements</h1>
            </div>

            <div style={{display:"flex", justifyContent:'center', alignItems:"center"}}>

            <ul style={{listStyleType: "none", width:"441px", height:"320px", font: "normal normal normal 26px/32px Roboto",
letterSpacing: "0px",
color:" #5D5D5D"}}>
                <li >
                <img src={icon1} alt="" style={{height:"27.12px", width:'27.12px', marginRight:"17px"}}/>Processor: 1 GHz or faster    </li>
                <li style={{paddingTop:"45px"}}> <img src={icon2} alt="" style={{height:"27.12px", width:'27.12px', marginRight:"17px"}} />RAM: 2GB (minimum)</li>
                <li style={{paddingTop:"45px"}}> <img src={icon4} alt="" style={{height:"27.12px", width:'27.12px', marginRight:"17px"}}/>Free hard disk space: 300MB</li>
                <li style={{paddingTop:"45px"}}> <img src={icon5} alt="" style={{height:"27.12px", width:'27.12px', marginRight:"17px"}}/>Display: 800x600 or greater</li>
                <li style={{paddingTop:"45px"}}> <img src={icon3} alt="" style={{height:"27.12px", width:'27.12px', marginRight:"17px"}}/>Operating System: Windows 7 or Later Mac OS X (Sierra) or later</li>
            </ul>
            </div>
        </div>
    )
}

export default Requirement
