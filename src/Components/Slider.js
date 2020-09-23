import React from 'react';
import { Carousel } from 'react-bootstrap';
import sl1 from '../SliderImg/slide1.jpg';
import sl2 from '../SliderImg/slide2.jpg';
import sl3 from '../SliderImg/slide3.jpg';
import sl4 from '../SliderImg/slide4.jpg';
import sl5 from '../SliderImg/slide5.jpg';

class Slider extends React.Component{
    render(){
        const images = [sl1, sl2, sl3, sl4, sl5];        
        return <Carousel>{images.map(generateSlide)}</Carousel>
    }
}
function generateSlide(item){
    return (
        <Carousel.Item>
            <img className="d-block w-100" 
                    src={item}
                    alt="Slide content" />            
        </Carousel.Item>
    )
}

export default Slider;