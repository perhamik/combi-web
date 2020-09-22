import React from 'react';
import { Row, Col, Nav, Navbar, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';


export default function NaviBar(){
    return(
        <>
            
            <Navbar bg="light" varian="light" className="sticky-top" expand="md">                        
                <Row className="d-flex w-100 m-0 justify-content-between align-items-center">
                    <Col className="d-flex justify-content-between justify-content-lg-around col-12 col-sm-12 col-md-3 col-lg-3 order-2">
                        <Nav.Link>
                            <Link to="/">
                                <Navbar.Brand>
                                    <img height="35rem" src={logo} alt="Combi"/>
                                </Navbar.Brand>                                
                            </Link>
                        </Nav.Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </Col>
                    <Navbar.Collapse className="justify-content-between p-0 col-12 col-sm-11 col-md-9 col-lg-9 order-4 order-md-5">
                        <Col className="d-flex justify-content-between pt-3 pb-3 pl-0 pr-0 col-12 col-sm-11 pt-md-0 pb-md-0 col-md-8 col-lg-8">                            
                            <Nav className="mr-3 ml-3 d-flex flex-row w-100 justify-content-around">                                    
                                <Nav.Link><Link to="/catalogue">Каталог</Link></Nav.Link>                                    
                                <Nav.Link><Link to="/about">Информация</Link></Nav.Link>
                                <Nav.Link><Link to="/buy">Купить</Link></Nav.Link>
                            </Nav>                                                
                        </Col>                    
                        <Col className="d-flex justify-content-center p-0 mt-2 mb-2 mt-md-0 mb-md-0 col-12 col-sm-12 col-md-4 col-lg-3 order-6">
                            <FormControl className="" type="text" placeholder="Поиск..."></FormControl>
                        </Col>
                    </Navbar.Collapse>
                </Row>
            </Navbar>
        </>       
    )
}

