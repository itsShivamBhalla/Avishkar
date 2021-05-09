import React from 'react'

function Banner({text}) {
    return (
        <div style={{height:"155px", display:"flex", alignItems:"center", justifyContent:"center"}}>

            <h3 style={{backgroundColor:"#747474", color:"#FFFFFF", padding:"7px 82px 8px 70px"}}>{text}</h3>

        </div>
    )
}

export default Banner
