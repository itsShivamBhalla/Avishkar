import React from 'react'
import { Button } from 'reactstrap'
import img from '../Assets/software-gif.png'
function Features() {
    return (
        <div style={{height:"762px", backgroundColor:"#2881C3", border:"1px solid #707070"}}>
            <h1 style={{color:"white", textAlign:"center", marginTop:'63px', font:" normal normal bold 60px/75px Quicksand"}}>
            Incredible New Features!
            </h1>
            

            <ul style={{ listStyleType: "none", color:"white", marginTop:'10px', font: "normal normal normal 26px/33px Quicksand", paddingLeft:"139px", paddingTop:"84px"}}>
            <Button style={{backgroundColor:"white", color:'#FF8D5D', font: "normal normal bold 26px/33px Quicksand"}}>Drag & Drop</Button>
                <li style={{borderLeft:"6px solid white",  paddingLeft:"20px", marginTop:'60px'}}>
                10+ Attractive Themes
                </li>
                <li style={{ borderLeft:"6px solid white", paddingLeft:"20px",marginTop:'60px'}}>
                Undo & Redo
                </li>
                <li style={{ borderLeft:"6px solid white",  paddingLeft:"20px",marginTop:'60px'}}>Copy + Paste</li>
                <li style={{ borderLeft:"6px solid white",  paddingLeft:"20px",marginTop:'60px'}}>
                Code & Simulate
                </li>
            </ul>

        <img src={img} alt="img" style={{position:"absolute", height:"600px", width:"838px", right:"0", top: "2560px"}}/>
        </div>
    )
}

export default Features
