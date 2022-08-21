import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Logo from "../../img/imglogo.png";
import LogoContent from "../../img/logocontent.png";
import Form from 'react-bootstrap/Form';
import Auth from '../../utils/auth';

const styles = {
  Nav: {
    background: 'linear-gradient( 11deg,#811717, green)',
    display:'flex',
    alignItems:'center',
    padding:'10px 10px 10px 10px'
  },
  NavLink: {
    color: "#a7a376",
    fontSize:'20px'
  },
  Logo1:{
    width:'50px'
  },
  Logo2:{
    width:'150px'
  },
  Navbtn:{
    padding:'6px 20px 6px 20px',
    border:'2px solid #a7a376',
    borderRadius:'20px',
    color:'#a7a376',
    marginRight:'10px',
    background: 'linear-gradient( 11deg,green, #811717',
    fontWeight:'bolder'
  }
  
};

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const result=(e)=>{
    e.preventDefault()
  }
  return (
    <Nav style={styles.Nav}  className="justify-content-end me-auto" expand="lg">
      <Nav.Item style={styles.NavLink} className=" py-2 px-2  justify-content-end me-auto" >
      <img src={Logo} style={styles.Logo1} alt="" />
      <img src={LogoContent} style={styles.Logo2} alt="" />
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={styles.NavLink} as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={styles.NavLink} as={Link} to="/communities">
        Communities
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={styles.NavLink} as={Link} to="/profile">
          Profile
        </Nav.Link>
      </Nav.Item>
      
      {Auth.loggedIn() ? (
        <>
          <Nav.Item>
            <Nav.Link style={styles.Navbtn} onClick={logout}>
              Logout
            </Nav.Link>
          </Nav.Item>
          <Form onSubmit={result} className="d-flex position-relative me-2" style={{width: '150px'}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className=""
              aria-label="Search"   
            />           
          </Form>
        </>
      ) : (
        <>
          <Nav.Item>
            <Nav.Link style={styles.Navbtn} as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={styles.Navbtn} as={Link} to="/signup" >
              Signup
            </Nav.Link>
          </Nav.Item>
          <Form  onSubmit={result} className="d-flex position-relative me-2" style={{width: '150px'}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className=""
              aria-label="Search"
            />           
          </Form>
        </>
      )}
    </Nav>
  );
};

export default Header;
