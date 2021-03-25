import React from 'react'
import './Section.css'
import 'bootstrap/dist/css/bootstrap.css'
import {FiChevronRight} from 'react-icons/fi'

function Section() {
    return (
        <div className="section">
            
                  
        <div class="row justify-content-evenly">
    <div class="col-md-6 ">
      <h1>
      The Freedom to Create
The Credit Card You Want
      </h1>
       </div>
    <div class="col-md-6 ">
     <p>
     That's why it comes with benefits & rewards chosen by you. Available in multiple designs, your card comes in a style selected by you. You can come back each year, to edit your benefits or update your style.
     </p>
     <br/>
     <p>
     Your OneSync Credit Card stays true to you, year after year. It’s the only card you’ll ever need.
     </p>
     <h5>Get Started <FiChevronRight className="icon"/></h5>
    </div>
  </div>

        </div>
    )
}

export default Section
