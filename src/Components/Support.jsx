import React from 'react'
import Social from './Social'
import {MdEmail} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {RiWhatsappFill} from 'react-icons/ri'

function Support() {
    return (
        <div style={{height:"125px", backgroundColor:"#3E44A8", display:"flex", justifyContent:'space-around', alignItems:'center'}}>
        
        <div style={{display:"flex"}}> <MdEmail className="icon"/>

<Social heading="Email us at" contact="support@avishkaar.cc"/></div>
           
           <div style={{display:"flex"}}> <FaPhoneAlt className="icon"/> <Social heading="Call us at" contact="+91-8506931515"/></div>
          
          <div style={{display:"flex"}}>
          <RiWhatsappFill className="icon"/><Social heading="WhatsApp us on" contact="+91-8506931515"/>
          </div>
           
        </div>
    )
}

export default Support
