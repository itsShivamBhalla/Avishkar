import React from 'react'
import { Button } from 'reactstrap'
import videoBg from '../Assets/grey-bg-pattern.png'
import video from '../Assets/video-thumb.png'
function Video() {
    return (
        <div style={{height:"811px", backgroundColor:"#EEEEEEF2"}}>

<img src={videoBg} alt="" style={{position:"absolute", width:"200%", height:"80%",left: "-53.199951171875px", top:"1665px", zIndex:"10"}}/>


        <h1 style={{color:"#686868", textAlign:"center", paddingTop:"60px"}}>
        Introduction to AMS!
        </h1>
            
            <div style={{
height: "536px",  backgroundImage: `url(${video}) `,   backgroundPosition: "center", backgroundRepeat:" no-repeat"
, borderRadius:"31px" , zIndex:"999", display:"flex", alignItems:'center', justifyContent:"center", position:" relative"
}}>
<Button style={{width: "181px",
height: "43px",
background: "#F36F2E 0% 0% no-repeat padding-box",
borderRadius: "9px", border:"none", outline:"none"}}>Play Video</Button>
            </div>
        </div>
    )
}

export default Video
