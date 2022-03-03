import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SliderComponent = () => {
   
    return (
            <Carousel className="slidercss">
                <div>
                    <img src="http://images4.fanpop.com/image/photos/22300000/Random-Cars-autorev-22326979-1400-930.jpg" />
                    <p className="legend">Car 1</p>
                </div>
                <div>
                    <img src="https://www.generatormix.com/images/thumbs/random-cars.jpg" />
                    <p className="legend">Car 2</p>
                </div>
                <div>
                    <img src="https://static.carthrottle.com/workspace/uploads/posts/2018/10/04c4ba50040d2f88fa56549c1498efbc.jpg" />
                    <p className="legend">Car 3</p>
                </div>
            </Carousel>
    );
};

export default SliderComponent;
