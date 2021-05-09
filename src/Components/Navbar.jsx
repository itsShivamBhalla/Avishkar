import React, { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import logo from '../Assets/Avishkaar_Logo_HD@2x.png'
import cart from '../Assets/shopping-cart@2x.png'
import {BiSearchAlt2} from 'react-icons/bi'
import '../Styles/Navbar.css'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
     
      <Navbar light expand="md" style={{height:"101px", paddingRight:"120px" , paddingLeft:"120px"}}>
        <NavbarBrand href="/"><img src={logo} alt="logo" style={{margin:"27px 0"}}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
    
          <Nav className="mr-auto" navbar style={{color:"#707070", paddingLeft:"62px", paddingRight:"245px", margin:"41px 0 40px", font: "  bold 16px/20px Quicksand"}}>
            <NavItem>
              <NavLink href="/products/">PRODUCTS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/programs/">PROGRAMS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/competitions/">COMPETITIONS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/learn/">LEARN</NavLink>
            </NavItem>  
          </Nav>
          <div className="ms-auto">
          <BiSearchAlt2 style={{width:"36.65px", height:"36.65px", opacity: "1", color: "#A8A8A8", margin:"32px 29px 32px 0"}}/>
          <Button style={{backgroundColor:"#FF7033", boxShadow: "0px 3px 6px #00000029",
borderRadius: "7px", border:"none", height:"40px", width:"105px"}}>SIGN IN</Button>
          <img src={cart} alt='cart' style={{width:"33.27px", height:"30.45px", margin:"35px 118px 34.93px 18px"}}/>
          </div>
         
   
      </Navbar>
    </div>
  );
}

export default Example;
