import React from 'react'; 
import { Row, Col, Container } from 'react-bootstrap';
import imagesMain from './imageMain';

export default function CatalogueGroup(props){     
    return(
        <>            
            <div className="pt-3 pb-3 mb-5">
                <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <Container class="catalogue">
                    <div className="page-title"><h3>Ассортимент</h3></div>
                    <Row className="align-items-center justify-content-between">
                        {props.Data.mainCat.map((obj, index) => {                           
                            return (
                                <Col key={index} className="col-12 col-sm-11 col-md-6 col-lg-4">
                                    <div className="d-flex justify-content-center align-content-center w-100 p-3 bg-white">
                                        <div className="d-flex flex-column align-content-center item-hover p-1 text-center overflow-hidden">
                                            <div className="pb-3">
                                                <h5 className="text-hover display-5">{obj}</h5>                                                
                                            </div>
                                            <div className="bg-white shadow-sm mx-auto">
                                                <img className="image-main" src={imagesMain[index]} alt={obj}/>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}                    
                    </Row>
                </Container>
                </div>                
            </div>
        </>
    )
}