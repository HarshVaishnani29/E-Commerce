import React from 'react'
import pro1 from '../../images/product/1.jpg'
import pro2 from '../../images/product/2.jpg'
import pro3 from '../../images/product/3.jpg'
import pro4 from '../../images/product/4.jpg'
import pro5 from '../../images/product/5.jpg'
import pro6 from '../../images/product/6.jpg'
import pro7 from '../../images/product/7.jpg'
import pro8 from '../../images/product/8.jpg'
import pro9 from '../../images/product/9.jpg'
import pro10 from '../../images/product/10.jpg'
import pro11 from '../../images/product/11.jpg'
import pro12 from '../../images/product/12.jpg'
import pro13 from '../../images/product/13.jpg'
import pro14 from '../../images/product/14.jpg'
import pro15 from '../../images/product/15.jpg'
import pro16 from '../../images/product/16.jpg'
import pro17 from '../../images/product/17.jpg'
import pro18 from '../../images/product/18.jpg'
import pro19 from '../../images/product/19.jpg'
import pro20 from '../../images/product/20.jpg'
import pro21 from '../../images/product/21.jpg'
import pro22 from '../../images/product/22.jpg'
import pro23 from '../../images/product/23.jpg'
import blog1 from '../../images/blog/1.jpg'
import blog2 from '../../images/blog/2.jpg'
import blog3 from '../../images/blog/3.jpg'
import blog4 from '../../images/blog/4.jpg'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
function Blog() {
  return (
    <>
    <Breadcrumb />
          <div className="blog-area pad-60">
              <div className="container">
                  <div className="row">
                      {/* left-sidebar start */}
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                          {/* widget start */}
                          <aside className="widget widget-categories">
                              <h3 className="sidebar-title">Search</h3>
                              <div className="search-form">
                                  <form action="#">
                                      <input type="text" placeholder="search" />
                                      <button><i className="fa fa-search" /></button>
                                  </form>
                              </div>
                          </aside>
                          {/* widget end */}
                          {/* widget-categories start */}
                          <aside className="widget widget-categories">
                              <h3 className="sidebar-title">Categories</h3>
                              <ul className="sidebar-menu">
                                  <li><a href="#">Clothes</a> <span className="count">(14)</span></li>
                                  <li><a href="#">Men</a> <span className="count">(9)</span></li>
                                  <li><a href="#">Shoes</a> <span className="count">(2)</span></li>
                                  <li><a href="#">Sunglasses</a> <span className="count">(2)</span></li>
                                  <li><a href="#">Women</a> <span className="count">(8)</span></li>
                              </ul>
                          </aside>
                          {/* widget-categories end */}
                          {/* widget start */}
                          <aside className="widget widget-categories">
                              <h3 className="sidebar-title">Recent Product</h3>
                              <div className="recent-product">
                                  <div className="single-product">
                                      <div className="product-img">
                                          <a href="product-details.html">
                                              <img src={pro12} alt />
                                              <img className="secondary-img" src={pro18} alt />
                                          </a>
                                      </div>
                                      <div className="product-content">
                                          <h3><a href="product-details.html">Lorem ipsum dolor</a></h3>
                                          <div className="price">
                                              <span>$80.00</span>
                                              <span className="old">$90.11</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="single-product">
                                      <div className="product-img">
                                          <a href="product-details.html">
                                              <img src={pro22} alt />
                                              <img className="secondary-img" src={pro18} alt />
                                          </a>
                                      </div>
                                      <div className="product-content">
                                          <h3><a href="product-details.html">Lorem ipsum dolor</a></h3>
                                          <div className="price">
                                              <span>$80.00</span>
                                              <span className="old">$90.11</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="single-product">
                                      <div className="product-img">
                                          <a href="product-details.html">
                                              <img src={pro14} alt />
                                              <img className="secondary-img" src={pro18} alt />
                                          </a>
                                      </div>
                                      <div className="product-content">
                                          <h3><a href="product-details.html">Lorem ipsum dolor</a></h3>
                                          <div className="price">
                                              <span>$80.00</span>
                                              <span className="old">$90.11</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </aside>
                          {/* widget end */}
                          {/* filter-by start */}
                          <aside className="widget filter-by">
                              <h3 className="sidebar-title">Product price</h3>
                              <ul className="sidebar-menu">
                                  <li><a href="#">L</a> <span className="count">(1)</span></li>
                                  <li><a href="#">M</a> <span className="count">(1)</span></li>
                                  <li><a href="#">S</a> <span className="count">(1)</span></li>
                                  <li><a href="#">XL</a> <span className="count">(1)</span></li>
                                  <li><a href="#">XXL</a> <span className="count">(1)</span></li>
                              </ul>
                          </aside>
                          {/* filter-by end */}
                          {/* widget start */}
                          <aside className="widget filter-by">
                              <h3 className="sidebar-title">Color</h3>
                              <ul className="sidebar-menu">
                                  <li><a href="#">Black</a> <span className="count">(1)</span></li>
                                  <li><a href="#">White</a> <span className="count">(8)</span></li>
                                  <li><a href="#">Orange</a> <span className="count">(5)</span></li>
                                  <li><a href="#">Blue</a> <span className="count">(7)</span></li>
                                  <li><a href="#">Yellow</a> <span className="count">(11)</span></li>
                                  <li><a href="#">Brown</a> <span className="count">(16)</span></li>
                                  <li><a href="#">red</a> <span className="count">(9)</span></li>
                              </ul>
                          </aside>
                          {/* widget end */}
                          {/* widget-tags start */}
                          <aside className="widget product-tag">
                              <h3 className="sidebar-title">Popular Tags</h3>
                              <ul>
                                  <li><a href="#">Top</a></li>
                                  <li><a href="#">Fashion</a></li>
                                  <li><a href="#">Collection</a></li>
                                  <li><a href="#">Women</a></li>
                                  <li><a href="#">men</a></li>
                                  <li><a href="#">gallery</a></li>
                                  <li><a href="#">new</a></li>
                                  <li><a href="#">Collection men</a></li>
                                  <li><a href="#">Top</a></li>
                                  <li><a href="#">Fashion</a></li>
                                  <li><a href="#">Collection</a></li>
                                  <li><a href="#">best</a></li>
                                  <li><a href="shop.html">cloth</a></li>
                              </ul>
                          </aside>
                          {/* widget-tags end */}
                      </div>
                      {/* left-sidebar end */}
                      <div className="col-md-9 col-sm-12 col-xs-12">
                          <div className="blog-page-main">
                              <div className="blog-wrapper">
                                  <div className="blog-img">
                                      <a href="single-blog.html"><img src={blog2} alt /></a>
                                  </div>
                                  <div className="blog-content">
                                      <h3><a href="single-blog.html">Lorem ipsum dolor sit</a></h3>
                                      <div className="blog-meta">
                                          <span className="blog-date">jul 6,2015</span>
                                          <span className="blog-author">By <a href="#">BasicTheme</a></span>
                                          <span className="blog-cat">in <a href="#">men's Style</a></span>
                                      </div>
                                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in .....</p>
                                      <a className="read-more" href="#">Read more <i className="fa fa-angle-right" /> <i className="fa fa-angle-right" /></a>
                                  </div>
                              </div>
                              <div className="blog-wrapper">
                                  <div className="blog-img">
                                      <a href="single-blog.html"><img src={blog1} alt /></a>
                                  </div>
                                  <div className="blog-content">
                                      <h3><a href="single-blog.html">Lorem ipsum dolor sit</a></h3>
                                      <div className="blog-meta">
                                          <span className="blog-date">jan 10,2015</span>
                                          <span className="blog-author">By <a href="#">BasicTheme</a></span>
                                          <span className="blog-cat">in <a href="#">men's Style</a></span>
                                      </div>
                                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in .....</p>
                                      <a className="read-more" href="#">Read more <i className="fa fa-angle-right" /> <i className="fa fa-angle-right" /></a>
                                  </div>
                              </div>
                              <div className="blog-wrapper">
                                  <div className="blog-img embed-responsive embed-responsive-16by9">
                                      <iframe src="https://player.vimeo.com/video/32360800" />
                                  </div>
                                  <div className="blog-content">
                                      <h3><a href="single-blog.html">Lorem ipsum dolor sit</a></h3>
                                      <div className="blog-meta">
                                          <span className="blog-date">nov 2,2015</span>
                                          <span className="blog-author">By <a href="#">BasicTheme</a></span>
                                          <span className="blog-cat">in <a href="#">women's Style</a></span>
                                      </div>
                                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in .....</p>
                                      <a className="read-more" href="#">Read more <i className="fa fa-angle-right" /> <i className="fa fa-angle-right" /></a>
                                  </div>
                              </div>
                              <div className="blog-wrapper">
                                  <div className="blog-img">
                                      <a href="single-blog.html"><img src={blog4} alt /></a>
                                  </div>
                                  <div className="blog-content">
                                      <h3><a href="single-blog.html">Lorem ipsum dolor sit</a></h3>
                                      <div className="blog-meta">
                                          <span className="blog-date">oct 11,2015</span>
                                          <span className="blog-author">By <a href="#">BasicTheme</a></span>
                                          <span className="blog-cat">in <a href="#">fashion</a></span>
                                      </div>
                                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in .....</p>
                                      <a className="read-more" href="#">Read more <i className="fa fa-angle-right" /> <i className="fa fa-angle-right" /></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12">
                          <div className="blog-pagination">
                              <div className="shop-breadcrumb">
                                  <ul>
                                      <li className="active"><a href="#">1</a></li>
                                      <li><a href="#">2</a></li>
                                      <li><a href="#">3</a></li>
                                      <li><a href="#">4</a></li>
                                      <li><a href="#">5</a></li>
                                      <li><a href="#">6</a></li>
                                      <li><a href="#"><i className="fa fa-angle-right" /></a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

    </>
  )
}

export default Blog;