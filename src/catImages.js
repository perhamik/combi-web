import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Data from './Components/Data';

import img_111529 from './Catalogue/Strollers/111529.jpg';
import img_111637 from './Catalogue/Strollers/111637.jpg';
import img_111638 from './Catalogue/Strollers/111638.jpg';
import img_114568 from './Catalogue/Strollers/114568.jpg';
import img_114570 from './Catalogue/Strollers/114570.jpg';
import img_114571 from './Catalogue/Strollers/114571.jpg';
import img_114719 from './Catalogue/Strollers/114719.jpg';
import img_115415 from './Catalogue/Strollers/115415.jpg';
import img_115416 from './Catalogue/Strollers/115416.jpg';
import img_116231 from './Catalogue/Strollers/116231.jpg';
import img_116298 from './Catalogue/Strollers/116298.jpg';
import img_116299 from './Catalogue/Strollers/116299.jpg';
import img_116741 from './Catalogue/Strollers/116741.jpg';
import img_116743 from './Catalogue/Strollers/116743.jpg';
import img_117125 from './Catalogue/Strollers/117125.jpg';
import img_117126 from './Catalogue/Strollers/117126.jpg';
import img_117159 from './Catalogue/Strollers/117159.jpg';
import img_117339 from './Catalogue/Strollers/117339.jpg';
import img_117533 from './Catalogue/Strollers/117533.jpg';
import img_117534 from './Catalogue/Strollers/117534.jpg';
import img_117662 from './Catalogue/Strollers/117662.jpg';

import img_13954 from './Catalogue/CarSeats/13954.jpg';
import img_114162 from './Catalogue/CarSeats/114162.jpg';
import img_114456 from './Catalogue/CarSeats/114456.jpg';
import img_114457 from './Catalogue/CarSeats/114457.jpg';
import img_114864 from './Catalogue/CarSeats/114864.jpg';
import img_115791 from './Catalogue/CarSeats/115791.jpg';
import img_116780 from './Catalogue/CarSeats/116780.jpg';

import img_81026 from './Catalogue/ParentingStation/81026.jpg';
import img_112973 from './Catalogue/ParentingStation/112973.jpg';
import img_116432 from './Catalogue/ParentingStation/116432.jpg';
import img_116417 from './Catalogue/ParentingStation/116417.jpg';

const strollers = [
    {img: img_115415, title: "Miracle Turn Elegant MT-700D RD"},
    {img: img_116231, title: "F2 Plus AF (GR) SEA"},
    {img: img_117533, title: "CFS BK HKG"},
    {img: img_117534, title: "CFS NB HKG"},
    {img: img_117662, title: "CFS CL HKG"},
    {img: img_117159, title: "i_Thruller 3W OR SEA"},
    {img: img_117125, title: "i_Thruller 4W NB HKG"},
    {img: img_117126, title: "i_Thruller 4W GL HKG"},    
    {img: img_114568, title: "F2 AB-240 (Carminered)"},
    {img: img_114570, title: "F2 AB-240 (Powderblue)"},
    {img: img_114571, title: "F2 AB-240 (Chromeyellow)"},
    {img: img_117339, title: "NEYO Plus (RD) HKG"},    
    {img: img_115416, title: "Miracle Turn Elegant MT-700D PP"},
    {img: img_111529, title: "Multi 5 Way PW"},
    {img: img_114719, title: "Spazio Duo (BK)"},
    {img: img_111638, title: "Umbretta 4CAS BR HKG"},
    {img: img_111637, title: "Umbretta 4CAS GL HKG"},
    {img: img_116298, title: "Urban Walker Classic"},
    {img: img_116299, title: "Urban Walker Classic SEA BL"},
    {img: img_116741, title: "Urban Walker Lite UR_300HKG TB"},
    {img: img_116743, title: "Urban Walker Lite UR_300EHKG LI"}
];

const carSeats = [
    {img: img_13954, title: "Neseruturn EC"},
    {img: img_114162, title: "Luxtia Turn 360 RD"},
    {img: img_114456, title: "Coccoro"},
    {img: img_114457, title: "Coccoro S"},
    {img: img_114864, title: "Mamalon CD (BK)"},
    {img: img_115791, title: "Cradling 360 Isofix"},
    {img: img_116780, title: "Coccoro BK"}
];

const parentingStation= [
    {img: img_81026, title: "Rasch ST/CO"},
    {img: img_112973, title: "Bedi Auto Swing"},
    {img: img_116432, title: "Fealetto Auto Swing"},
    {img: img_116417, title: "Nemulila Auto Swing"}
];
const preCount = 3;
export class Strollers extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = {width: props.width};
      }
    
      componentWillMount(){
        this.setState({width: window.innerWidth});
      }
      
    render(){     console.log(this.state.width);   
        return mapCatalog(strollers, preCount, Data.mainCat[0]);
    }
}

export class CarSeats extends React.Component{
    render(){ return mapCatalog(carSeats, preCount, Data.mainCat[1]);}
}

export class ParentingStation extends React.Component{
    render(){ return mapCatalog(parentingStation, preCount, Data.mainCat[2]);}
}

let fillImages = (arr, count = arr.length) => {
    return(    
        arr.slice(0, count).map((obj, id) => {
            return(
                <Col key={id} className="col-12 col-sm-12 col-md-6 col-lg-4 mt-3 mb-3">
                    <div className="d-flex justify-content-center align-content-center w-100 bg-white">
                        <div className="d-flex flex-column align-content-center image-hover p-1 text-center overflow-hidden">                                                        
                            <div className="bg-white shadow-sm mx-auto">
                                <img className="image-list" src={obj.img} alt={obj.title} />
                            </div>
                            <div className="product-title mt-2">
                                <span>{obj.title}</span>
                            </div>
                        </div>
                    </div>
                </Col>
            )
        })        
    )
}

let mapCatalog = (arr, count, title) =>{
    return (   
        <Col className="cat-line col-12 d-flex flex-column-reverse">
            <div className="cat-title align-self-center align-self-md-end mr-md-4">
                <Button variant="outline-dark" size="lg">{title}</Button>
            </div>
            <Row className="align-items-center justify-content-between">
                {fillImages(arr, count)}
            </Row>
        </Col>
    )
}


