import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const SliderComponent = () => {
   

    return (
            <Carousel >
                <div>
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    );
};

export default SliderComponent;
