import React from 'react'
import { Button } from 'reactstrap'

function DownloadBar({text,available, logo}) {
    return (
        <div style={{backgroundColor: "#2579b9", width: "1110px",
        height: "146px", borderRadius: "27px", display:'flex', justifyContent:"space-around", alignItems:"center"}}>

        <div style={{display:"flex"}}>
            <img src={logo} alt="" style={{height:"86px", width:"86px"}}/>
            <h4 style={{width: "370px",
height:" 64px", font: "normal normal normal 26px/32px Roboto", color:"white"}}>{text}</h4>
        </div>
        <div style={{display:'flex', flexDirection:"column", alignItems:'center', justifyContent:'center' }}>
<Button style={{color:"#FF7033", backgroundColor:"white", width: "278px",
height: "68px",boxShadow:" 0px 6px 6px #00000029",
border: "1px solid #FFFFFF",
borderRadius: "35px", font: "normal normal normal 28px/34px Roboto"}}>
    Download | EXE
</Button>
<p style={{color:"white", font: "normal normal normal 16px/19px Roboto", width:" 193px",
height: "19px", paddingTop:'12px'}}>
   {available}
</p>
        </div>
            
        </div>
    )
}

export default DownloadBar
