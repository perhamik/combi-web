import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from './Components/Slider';
import ContentMain from './Components/ContentMain';
import CatalogueGroup from './Components/CatalogueGroup';
import Data from './Components/Data';

export const Home = () => (
    <div className="home">
        <Slider></Slider>
        <Container>
            <CatalogueGroup  Data={Data}></CatalogueGroup>            
            <ContentMain Data={Data}></ContentMain>
        </Container>
    </div>    
)