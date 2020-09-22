import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../wallpaper.jpg';
import slide2 from '../wallpaper2.jpg';
import slide3 from '../wallpaper3.jpg';

export default function Slider(){
    return(
        <> 
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" 
                            src={slide1}
                            alt="First slide" />
                    <Carousel.Caption>
                        <h3>Slide 1</h3>
                        <p>Description of item 1</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" 
                            src={slide2}
                            alt="First slide" />
                    <Carousel.Caption>
                        <h3>Slide 2</h3>
                        <p>Description of item 2</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" 
                            src={slide3}
                            alt="First slide" />
                    <Carousel.Caption>
                        <h3>Slide 3</h3>
                        <p>Description of item 3</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}