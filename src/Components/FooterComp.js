import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

export default function FooterComp(){
    
    return(
        <>  
            <footer id="footer" className="footer bg-light sticky-bottom">
                <Container className="p-3">
                    <Row className="align-items-center justify-content-around"> 
                        <Col className="col-12 col-md-8 col-lg-5 mb-3 mb-lg-0 text-center text-lg-left">                            
                            <a href="https://newlife-baby.com/" target="noopener norefferer">Интернет-магазин</a>
                        </Col>
                        <Col className="text-muted col-12 col-md-8 col-lg-6 text-center text-lg-left">2020 © New Life – официальный дистрибьютор продукции от компании Combi в Украине</Col>                        
                    </Row>
                </Container>
            </footer>            
        </>
    )
}