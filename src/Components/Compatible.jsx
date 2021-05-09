import React from 'react'
import { Button } from 'reactstrap'
import cardImg from '../Assets/Untitled-3@2x.png'
function Compatible() {
    return (
        <div style={{height:"862px", display:'flex', alignItems:'center', justifyContent:'center', flexDirection:"column", color: "#686868"}}>
        <h1 style={{font: "normal normal bold 60px/75px Quicksand", textAlign:"center", width: "558px"
,height: "150px", marginTop:"40px"}}>Compatible with all Avishkaar Products</h1>
            <img src={cardImg} alt="" style={{height:"435px", width:"1088px"}}/>
            <Button color="link" style={{width: "187px",
height: "34px", color:"#FF7033", textAlign:"right", textDecoration: "underline",
font:" normal normal normal 28px/34px Roboto", padding:"0", marginTop:'20px'}}>Buy Products {">"}</Button>
        </div>
    )
}

export default Compatible
