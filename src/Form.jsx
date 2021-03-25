import React from 'react'
import './Form.css'
import 'bootstrap/dist/css/bootstrap.css'
import {AiOutlineFileDone} from 'react-icons/ai'
function Form() {
    return (
        <div className="form">
            
            <div class="row justify-content-evenly align-center">
    <div class="col-md-6  inputs ">
     
     <input placeholder="Enter your Phone Number" />
     <input placeholder="Enter your PAN number" style={{opacity:"0.9"}}/>
     <input placeholder="Enter your Address" style={{opacity:"0.5"}}/>

   </div>
    <div class="col-md-6 instructions">
    <AiOutlineFileDone className="icon"/>
    <br/>
    <h2>
    Fill Eligibility Form
    </h2>
    <p>
    Tell us about yourself, to find out if
    <br/> you’re eligible to apply.
    </p>
     
    </div>
  </div>

        </div>
    )
}

export default Form
