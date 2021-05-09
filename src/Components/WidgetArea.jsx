import React from 'react'
import { Button } from 'reactstrap'

function WidgetArea() {
    return (
        <div style={{ height: "407px", backgroundColor: "#3F3E40", display:'flex', alignItems:'center', justifyContent:'space-evenly'}}>

            <div style={{width:'546px'}}>

                <div style={{display:"flex", color:'white', alignItems:'flex-start', justifyContent:'space-between',}}>

                <ul style={{listStyleType: "none",  font: "normal normal normal 12px/21px Roboto"}}>
                <h5 style={{font: "normal normal bold 15px/18px Roboto", borderBottom:"1px solid grey", paddingBottom:"5px"}}>Avishkaar</h5>
                    <li>Shop</li>
                    <li>Challenges</li>
                    <li>Projects</li>
                    <li>School Clubs</li>
                    <li>ATL</li>
                </ul>

                <ul style={{listStyleType: "none",  font: "normal normal normal 12px/21px Roboto"}}>
                <h5 style={{font: "normal normal bold 15px/18px Roboto", borderBottom:"1px solid grey", paddingBottom:"5px"}}>About</h5>
                    <li>About Us</li>
                    <li>News</li>
                    <li>Our Team</li>
                </ul>

                <ul style={{listStyleType: "none",  font: "normal normal normal 12px/21px Roboto"}}>
                <h5 style={{font: "normal normal bold 15px/18px Roboto", borderBottom:"1px solid grey", paddingBottom:"5px"}}>Support</h5>
                    <li>Report a Bug</li>
                    <li>Register Product </li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                  
                </ul>

                </div>
               

                <div style={{display:"flex", color:'white',alignItems:'flex-start', justifyContent:'space-between' }}>
                <ul style={{listStyleType: "none",  font: "normal normal normal 12px/21px Roboto"}}>
                <h5 style={{font: "normal normal bold 15px/18px Roboto", borderBottom:"1px solid grey", paddingBottom:"5px"}}>Event</h5>
                    <li>Makeathon</li>
                    <li>IRC</li>
                  
                </ul>
                <ul style={{listStyleType: "none",  font: "normal normal normal 12px/21px Roboto"}}>
                <h5 style={{font: "normal normal bold 15px/18px Roboto", borderBottom:"1px solid grey", paddingBottom:"5px"}}>Resources</h5>
                    <li>Software</li>
                    <li>Learn</li>
                    <li>Trainings</li>
                   
                </ul>
                <ul style={{listStyleType: "none", font: "normal normal normal 12px/21px Roboto"}}>
                <h5 style={{font: "normal normal bold 15px/18px Roboto", borderBottom:"1px solid grey", paddingBottom:"5px"}}>Partner with Us</h5>
                
                    <li>Become a trainer</li>
                    <li>Become a Channel Partner</li>
                    <li>Become an Avishkaar School</li>
                    
                </ul>
                </div>
            </div>

            <div>
            <h6 style={{width:" 145px",
height: "17px",
textAlign: "left",
font: "normal normal bold 14px/17px Roboto", color:'white'}}>Subscribe to Avishkaar</h6>
            <hr style={{width:" 364px", border: "1px solid grey"}}/>
            <p  style={{width: "282px",
height: "14px",
textAlign: "left",
font: "normal normal normal 12px/21px Roboto", color:"white"}}>Stay updated on the latest products, projects & more!</p>
            <div>

            <input type="email" placeholder="Email Address" style={{width: "199px",
height: "38px", background: "#FCFCFC 0% 0% no-repeat padding-box",
border: "1px solid #BCE0FD",
borderRadius: "4px"}}/>
                <Button style={{width: "114px",
height: "38px",marginLeft:"18px",
background: "#2699FB 0% 0% no-repeat padding-box",
borderRadius: "4px"}}>Subscribe</Button>
            </div>
            </div>
        </div>
    )
}

export default WidgetArea
