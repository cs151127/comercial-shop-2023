import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {useDispatch,useSelector}  from 'react-redux'
import { logout} from '../actions/userActions'


function Header() {
  const userLogin= useSelector(state=>state.userLogin)
  const{userInfo}=userLogin
  const dispatch=useDispatch()
  const logoutHandler=()=>{
 dispatch(logout())

  }
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>proshop</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to="/">
                <Nav.Link >
                  <i className="fas fa-home"></i> Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo?(<NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to ='/profile'>
                  <NavDropdown.Item>
                    profile
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                    logout
                  </NavDropdown.Item>
              </NavDropdown>):(<LinkContainer to="/login">
                <Nav.Link >
                  <i className="fas fa-user">Login </i>
                </Nav.Link>
              </LinkContainer>)}
          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
