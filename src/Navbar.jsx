import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Navbar.css'
import logo from './Image.svg'

function Navbar() {
    return (
     

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} alt=""/><p className="carousel-caption">AFC Inc.</p></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Track Application</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Manage My Card</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">FAQs</a>
                            </li>
                           
                           <li>
                           <button class="btn btn-outline-success" type="submit">Get Started</button>
                           </li>
                           
                        </ul>

                       
                     
                    </div>
                </div>
            </nav>

   
    )
}

export default Navbar
