import React from 'react'
import './Form.css'
import 'bootstrap/dist/css/bootstrap.css'
import {AiOutlineFileDone} from 'react-icons/ai'
import { FiChevronRight } from 'react-icons/fi'
function Form() {
    return (
        <div className="form">
            
            <div class="row justify-content-evenly align-center">
    <div class="col-md-6 col-sm-12  inputs ">
     
     <input placeholder="Enter your Phone Number" />
     <input placeholder="Enter your PAN number" style={{opacity:"0.9"}}/>
     <input placeholder="Enter your Address" style={{opacity:"0.5"}}/>

   </div>
    <div class="col-md-6 col-sm-12 instructions">
    <AiOutlineFileDone className="icon" class="d-none d-sm-block d-md-block"/>
    <br/>
    <h2 class="d-none d-sm-block d-md-block" >
    Fill Eligibility Form
    </h2>
    <p class="d-none d-sm-block d-md-block">
    Tell us about yourself, to find out if
    <br/> you’re eligible to apply.
    </p>
    <h5 class="d-none d-sm-block d-md-block">Get Started <FiChevronRight className="icon" /></h5>
     
    </div>
  </div>

        </div>
    )
}

export default Form
