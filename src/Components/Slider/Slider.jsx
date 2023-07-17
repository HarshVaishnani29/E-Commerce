import React from 'react'
import Slide from '../../css/slider.css'
function Slider() {
  return (
    <>
          <div className="slider-area">
              <div className="slider-active">
                  <div className="single-slider slide-height d-flex align-items-center">
                      <div className="container">
                          <div className="row">
                              <div className="col-xl-10 offset-xl-1">
                                  <div className="slide-content text-center">
                                      <h6 data-animation="fadeInUp" data-delay=".5s">Top fashion for men</h6>
                                      <h1 data-animation="fadeInUp" data-delay="1s"> Best Fashion For Men</h1>
                                      <a className="btn" href="#" data-animation="fadeInUp" data-delay="1.5s">learn more
                                          <i className="icofont icofont-location-arrow" />
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  
              </div>
          </div>
    </>
  )
}

export default Slider