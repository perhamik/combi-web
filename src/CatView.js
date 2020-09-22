import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {Strollers, CarSeats, ParentingStation} from './catImages';

export const CatView = () => (
    <>
        <Container class="catalogue">
            <div className="page-title"><h3>Каталог</h3><h4>Каталог</h4></div>            
            <Row className="align-items-center justify-content-around">
                <Col className="mt-0 col-12">
                    <Row className="align-items-center">
                        <Strollers></Strollers>
                        <CarSeats></CarSeats>
                        <ParentingStation></ParentingStation>                          
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
)