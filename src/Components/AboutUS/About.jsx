import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import about1 from '../../images/about.jpg'    
import team1 from '../../images/team/team-1 .jpg'
import team2 from '../../images/team/team-2.jpg'
import team3 from '../../images/team/team-3.jpg'
import team4 from '../../images/team/team-4.jpg'
function About() {
  return (
    <>
    <Breadcrumb />
          <div>
            <style>
                text-align:center;
            </style>
              {/* about-area start */}
              <div className="about-area pad-60">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="about-img">
                                  <img src={about1} alt />
                              </div>
                          </div>
                          <div className="col-md-12">
                              <div className="about-text">
                                  <h2>Our Story</h2>
                                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                  <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* about-area end */}
              {/* testimonial-area start */}
              <div className="testimonial-area pad-60">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="section-title">
                                  <h2>What client say</h2>
                                  <div className="title-icon">
                                      <span><i className="fa fa-angle-left" /> <i className="fa fa-angle-right" /></span>
                                  </div>
                              </div>
                              <div className="testimonial-carousel">
                                  <div className="single-testimonial text-center">
                                      <span className="quotes"><i className="fa fa-quote-right" aria-hidden="true" /></span>
                                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut  laoreet dolore magna  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud  exerci tation ullamcorper suscipit lobortis</p>
                                      <div className="client-info">
                                          <h2>jon doe</h2>
                                          <span>Web developer</span>
                                      </div>
                                  </div>
                                  <div className="single-testimonial text-center">
                                      <span className="quotes"><i className="fa fa-quote-right" aria-hidden="true" /></span>
                                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut  laoreet dolore magna  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud  exerci tation ullamcorper suscipit lobortis</p>
                                      <div className="client-info">
                                          <h2>jon doe</h2>
                                          <span>Web developer</span>
                                      </div>
                                  </div>
                                  <div className="single-testimonial text-center">
                                      <span className="quotes"><i className="fa fa-quote-right" aria-hidden="true" /></span>
                                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut  laoreet dolore magna  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud  exerci tation ullamcorper suscipit lobortis</p>
                                      <div className="client-info">
                                          <h2>jon doe</h2>
                                          <span>Web developer</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* testimonial-area end */}
              {/* team-area start */}
              <div className="team-area pad-60">
                  <div className="container">
                      <div className="row">
                          <div className="section-title">
                              <h2>Our awesome team member</h2>
                              <div className="title-icon">
                                  <span><i className="fa fa-angle-left" /> <i className="fa fa-angle-right" /></span>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-3 col-sm-4">
                              <div className="single-team">
                                  <div className="team-img">
                                      <img src={team1} alt />
                                      <div className="team-icon">
                                          <a href="#"><i className="fa fa-facebook" /></a>
                                          <a href="#"><i className="fa fa-twitter" /></a>
                                          <a href="#"><i className="fa fa-linkedin" /></a>
                                          <a href="#"><i className="fa fa-google-plus" /></a>
                                      </div>
                                  </div>
                                  <div className="team-info">
                                      <h2>Jon doe</h2>
                                      <span>coding guru</span>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-4">
                              <div className="single-team">
                                  <div className="team-img">
                                      <img src={team2} alt />
                                      <div className="team-icon">
                                          <a href="#"><i className="fa fa-facebook" /></a>
                                          <a href="#"><i className="fa fa-twitter" /></a>
                                          <a href="#"><i className="fa fa-linkedin" /></a>
                                          <a href="#"><i className="fa fa-google-plus" /></a>
                                      </div>
                                  </div>
                                  <div className="team-info">
                                      <h2>david diggle</h2>
                                      <span>Designer</span>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-4">
                              <div className="single-team">
                                  <div className="team-img">
                                      <img src={team3} alt />
                                      <div className="team-icon">
                                          <a href="#"><i className="fa fa-facebook" /></a>
                                          <a href="#"><i className="fa fa-twitter" /></a>
                                          <a href="#"><i className="fa fa-linkedin" /></a>
                                          <a href="#"><i className="fa fa-google-plus" /></a>
                                      </div>
                                  </div>
                                  <div className="team-info">
                                      <h2>cartico hippo</h2>
                                      <span>Web Developer</span>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 hidden-sm">
                              <div className="single-team">
                                  <div className="team-img">
                                      <img src={team4} alt />
                                      <div className="team-icon">
                                          <a href="#"><i className="fa fa-facebook" /></a>
                                          <a href="#"><i className="fa fa-twitter" /></a>
                                          <a href="#"><i className="fa fa-linkedin" /></a>
                                          <a href="#"><i className="fa fa-google-plus" /></a>
                                      </div>
                                  </div>
                                  <div className="team-info">
                                      <h2>marian pappu</h2>
                                      <span>programmer</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* team-area start */}
          </div>

    </>
  )
}

export default About;