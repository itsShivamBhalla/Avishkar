import React from 'react'
import kid from "../Assets/kid-img.png"
function Promo() {
    return (
        <div style={{height:"662px"}}>
            <h1 style={{textAlign: "center",
font: "normal normal bold 55px/67px Quicksand"
,letterSpacing:" 0px",
color:" #6D6F71"}}>What do People Say?</h1>
            <div>
                <img src={kid} alt="" style={{width: "288px",
height: "281px", borderRadius: "19px", position:'absolute', top: "5949px",
left: "285px", zIndex:"99"}} />

                <div style={{width: "555px",
height: "285px", background: "#2E62B0 0% 0% no-repeat padding-box",
boxShadow: "0px 3px 6px #00000029",
borderRadius: "25px", position:"absolute", top:" 5980px",
left: "525px", font:" normal normal normal 22px/27px Roboto", color:"white", textAlign:'left', padding:'68px 38px 105px 98px'}}>
Lorem Ipsum; Lorem Ipsum; Lorem Ipsum; Lorem Ipsum; Lorem Ipsum; Lorem Ipsum;Lorem Ipsum; Lorem Ipsum; Lorem Ipsum; Lorem Ipsum;
<p style={{textAlign:'right'}}>
Name of Person
<br/> (School Name)
</p>
                </div>
            </div>

            
        </div>
    )
}

export default Promo
