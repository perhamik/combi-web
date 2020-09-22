import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

export default function FooterComp(){
    
    return(
        <>  
            <footer id="footer" className="footer bg-light fixed-bottom">
                <Container className="p-3">
                    <Row className="align-items-center justify-content-center"> 
                        <Col className="col-12 col-sm-11 col-md-5 mb-3 mb-md-0">                            
                            <a href="https://newlife-baby.com/" target="noopener norefferer">Интернет-магазин</a>
                        </Col>
                        <Col className="text-muted col-12 col-sm-11 col-md-6">2020 © New Life – официальный дистрибьютор товаров от компании Combi в украине</Col>                        
                    </Row>
                </Container>
            </footer>            
        </>
    )
}