import Carousel from 'react-bootstrap/Carousel';

import slide1 from '../img/1.webp';
import slide2 from '../img/3.webp';
import slide3 from '../img/2.webp';

function CustomSlider() {
  return (
    <div className="container">
      <div className='row'>
        <div className='slider-area d-flex justify-content-center align-items-center px-0 py-5'>
          <div className='info box'>
            <h5>THE ULTIMATE LUXURY EXPERIENCE</h5>
            <h3>The Perfect Base For You</h3>
            <a href='#' target='_new'>Book Now</a>
          </div>
          <div className='slider box'>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomSlider;