import React, {useState} from 'react';
import { Row, Col, Nav, Navbar, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

class NaviBar extends React.Component {    
    render(){
        return (
            <>            
                <Navbar bg="light" varian="light" className="container sticky-top justify-content-center" expand="lg">                        
                    <Row className="d-flex w-100 justify-content-between align-items-center">
                        <Col className="d-flex justify-content-between col-12 col-lg-2 order-2 p-0">
                            <Nav.Link className="w-auto p-0">
                                <Link to="/">
                                    <Navbar.Brand>
                                        <img height="35rem" src={logo} alt="Combi"/>
                                    </Navbar.Brand>                                
                                </Link>
                            </Nav.Link>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </Col>
                        <Navbar.Collapse className="justify-content-around col-12 col-lg-10 order-4 order-md-5 p-0">
                            <Col className="container d-flex justify-content-between col-12 col-lg-6 pt-3 pb-3 pl-0 pr-0 order-2">                            
                                <Nav className="d-flex flex-row w-100 justify-content-between">                                    
                                    <Nav.Link><Link to="/catalogue">Каталог</Link></Nav.Link>                                    
                                    <Nav.Link><Link to="/about">Информация</Link></Nav.Link>
                                    <Nav.Link><Link to="/buy">Купить</Link></Nav.Link>
                                </Nav>                                                
                            </Col>
                            <Col className="d-flex justify-content-center p-0 mt-2 mb-2 mt-lg-0 mb-lg-0 col-12 col-lg-3 order-6">
                                <FormControl type="text" placeholder="Поиск..."></FormControl>
                            </Col>
                        </Navbar.Collapse>
                        
                    </Row>
                </Navbar>
            </>
        )
    }
}
export default NaviBar;