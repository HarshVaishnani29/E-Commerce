import React from 'react'
import logo from '../../images/logo-white-text.png'
import { Link, NavLink } from 'react-router-dom'
import slider from '../../css/style.css'
import menu1 from '../../images/1.jpg'
function Header() {
    return (
        <>

            <header className="header-pos">
                {/* header-bottom-area start */}
                <div className="header-bottom-area">
                    <div className="container">
                        <div className="inner-container">
                            <div className="row">
                                <div className="col-md-2 col-sm-4 col-xs-5">
                                    <div className="logo">
                                        <NavLink to='/'><img src={logo} alt /></NavLink>
                                    </div>
                                </div>
                                <div className="col-md-8 hidden-xs hidden-sm">
                                    <div className="main-menu">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <NavLink to='/'>Home</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/About'>about
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/Blog'>blog
                                                    </NavLink>
                                                </li>
                                                <li className="static"><a href="shop.html">shop</a>
                                                    <div className="mega-menu">
                                                        <div className="mega-left">
                                                            <span>
                                                                <NavLink href="shop.html" className="mega-title">WOMEN CLOTH </NavLink>
                                                                <NavLink href="shop.html">casual shirt</NavLink>
                                                                <NavLink href="shop.html">rikke t-shirt</NavLink>
                                                                <NavLink href="shop.html">mia top </NavLink>
                                                                <NavLink href="shop.html">muscle tee </NavLink>
                                                            </span>
                                                            <span>
                                                                <NavLink href="shop.html" className="mega-title">MEN CLOTH </NavLink>
                                                                <NavLink href="shop.html">casual shirt</NavLink>
                                                                <NavLink href="shop.html">rikke t-shirt</NavLink>
                                                                <NavLink href="shop.html">mia top </NavLink>
                                                                <NavLink href="shop.html">muscle tee </NavLink>
                                                            </span>
                                                            <span>
                                                                <a href="shop.html" className="mega-title">WOMEN JEWELRY </a>
                                                                <a href="shop.html">necklace </a>
                                                                <a href="shop.html">chunky short striped </a>
                                                                <a href="shop.html">samhar cuff</a>
                                                                <a href="shop.html">nail set </a>
                                                            </span>
                                                            <span>
                                                                <a href="shop.html" className="mega-title">WOMEN JEWELRY </a>
                                                                <a href="shop.html">necklace </a>
                                                                <a href="shop.html">chunky short striped </a>
                                                                <a href="shop.html">samhar cuff</a>
                                                                <a href="shop.html">nail set </a>
                                                            </span>
                                                            <span>
                                                                <a href="shop.html" className="mega-title">WOMEN JEWELRY </a>
                                                                <a href="shop.html">necklace </a>
                                                                <a href="shop.html">chunky short striped </a>
                                                                <a href="shop.html">samhar cuff</a>
                                                                <a href="shop.html">nail set </a>
                                                            </span>
                                                        </div>
                                                        <div className="mega-right">
                                                            <span className="mega-menu-img">
                                                                <a href="shop.html"><img alt src={menu1} /></a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li><a href="shop.html">cloth</a>
                                                    <div className="mega-menu mega-menu-2">
                                                        <span>
                                                            <a href="shop.html" className="mega-title">WOMEN CLOTH </a>
                                                            <a href="shop.html">casual shirt</a>
                                                            <a href="shop.html">rikke t-shirt</a>
                                                            <a href="shop.html">mia top </a>
                                                            <a href="shop.html">muscle tee </a>
                                                        </span>
                                                        <span>
                                                            <a href="shop.html" className="mega-title">MEN CLOTH </a>
                                                            <a href="shop.html">casual shirt</a>
                                                            <a href="shop.html">rikke t-shirt</a>
                                                            <a href="shop.html">mia top </a>
                                                            <a href="shop.html">muscle tee </a>
                                                        </span>
                                                        <span>
                                                            <a href="shop.html" className="mega-title">WOMEN JEWELRY </a>
                                                            <a href="shop.html">necklace </a>
                                                            <a href="shop.html">chunky short striped </a>
                                                            <a href="shop.html">samhar cuff</a>
                                                            <a href="shop.html">nail set </a>
                                                        </span>
                                                        <span className="mega-menu-img">
                                                            <a href="shop.html"><img alt src={menu1} /></a>
                                                        </span>
                                                    </div>
                                                </li>
                                                <li><a href="#">pages</a>
                                                    <ul>
                                                        <li><a href="about.html">about</a></li>
                                                        <li><a href="blog.html">blog</a></li>
                                                        <li><a href="blog-2-column.html">blog 2 column</a></li>
                                                        <li><a href="blog-full-width.html">blog full width</a></li>
                                                        <li><a href="blog-right-sidebar.html">blog right sidebar</a></li>
                                                        <li><a href="single-blog.html">single blog</a></li>
                                                        <li><a href="single-blog-video.html">single blog video</a></li>
                                                        <li><a href="cart.html">shopping cart</a></li>
                                                        <li><a href="checkout.html">checkout</a></li>
                                                        <li><a href="wishlist.html">wishlist</a></li>
                                                        <li><a href="contact.html">contact</a></li>
                                                        <li><a href="login.html">login</a></li>
                                                        <li><a href="shop.html">shop</a></li>
                                                        <li><a href="product-details.html">product details</a></li>
                                                        <li><a href="shop-full-width.html">shop full width</a></li>
                                                        <li><a href="shop-right-sidebar.html">shop right sidebar</a></li>
                                                        <li><a href="404.html">404 error</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-8 col-xs-7 header-right">
                                    <div className="my-cart">
                                        <div className="total-cart">
                                            <a href="cart.html">
                                                <i className="fa fa-shopping-cart" />
                                                <span>2</span>
                                            </a>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="cart-img">
                                                    <a href="#"><img alt src="img/cart/1.jpg" /></a>
                                                </div>
                                                <div className="cart-info">
                                                    <h4><a href="#">Vestibulum suscipit</a></h4>
                                                    <span>£165.00 <span>x 1</span></span>
                                                </div>
                                                <div className="del-icon">
                                                    <i className="fa fa-times-circle" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cart-img">
                                                    <a href="#"><img alt src="img/cart/1.jpg" /></a>
                                                </div>
                                                <div className="cart-info">
                                                    <h4><a href="#">Vestibulum suscipit</a></h4>
                                                    <span>£165.00 <span>x 1</span></span>
                                                </div>
                                                <div className="del-icon">
                                                    <i className="fa fa-times-circle" />
                                                </div>
                                            </li>
                                            <li className="cart-border">
                                                <div className="subtotal-text">Subtotal: </div>
                                                <div className="subtotal-price">£300.00</div>
                                            </li>
                                            <li>
                                                <a className="cart-button" href="checkout.html">view cart</a>
                                                <a className="checkout" href="checkout.html">checkout</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="user-meta">
                                        <a href="#"><i className="fa fa-cog" /></a>
                                        <ul>
                                            <li><a href="#">My Account</a></li>
                                            <li><a href="#">Wish list</a></li>
                                            <li><a href="#">Checkout</a></li>
                                            <li><a href="#">Testimonial</a></li>
                                            <li><a href="#">Log in</a></li>
                                        </ul>
                                    </div>
                                    <div className="header-search">
                                        <i className="fa fa-search" />
                                        <div className="header-form">
                                            <form action="#">
                                                <input type="text" placeholder="search" />
                                                <button><i className="fa fa-search" /></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header-bottom-area end */}
                {/* mobile-menu-area start */}
                {/* <div className="mobile-menu-area visible-xs visible-sm">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mobile-menu">
                                    <nav id="dropdown">
                                        <ul>
                                            <li><a href="index.html">Home</a>
                                                <ul>
                                                    <li><a href="index.html">Homepage Version 1</a></li>
                                                    <li><a href="index-2.html">Homepage Version 2</a></li>
                                                    <li><a href="index-3.html">Homepage Version 3</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="blog.html">blog</a></li>
                                            <li><a href="shop.html">Shop</a>
                                                <ul>
                                                    <li><a href="#">WOMEN CLOTH</a>
                                                        <ul>
                                                            <li><a href="shop.html">casual shirt</a></li>
                                                            <li><a href="shop.html">rikke t-shirt</a></li>
                                                            <li><a href="shop.html">mia top </a></li>
                                                            <li><a href="shop.html">muscle tee</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">MEN CLOTH</a>
                                                        <ul>
                                                            <li><a href="shop.html">casual shirt</a></li>
                                                            <li><a href="shop.html">rikke t-shirt</a></li>
                                                            <li><a href="shop.html">mia top </a></li>
                                                            <li><a href="shop.html">muscle tee</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">WOMEN JEWELRY</a>
                                                        <ul>
                                                            <li><a href="shop.html">necklace </a></li>
                                                            <li><a href="shop.html">chunky short striped</a></li>
                                                            <li><a href="shop.html">samhar cuff </a></li>
                                                            <li><a href="shop.html">nail set</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="shop.html">Footwear </a></li>
                                            <li><a href="#">Pages</a>
                                                <ul>
                                                    <li><a href="about.html">about</a></li>
                                                    <li><a href="blog.html">blog</a></li>
                                                    <li><a href="blog-2-column.html">blog 2 column</a></li>
                                                    <li><a href="blog-full-width.html">blog full width</a></li>
                                                    <li><a href="blog-right-sidebar.html">blog right sidebar</a></li>
                                                    <li><a href="single-blog.html">single blog</a></li>
                                                    <li><a href="single-blog-video.html">single blog video</a></li>
                                                    <li><a href="cart.html">shopping cart</a></li>
                                                    <li><a href="checkout.html">checkout</a></li>
                                                    <li><a href="wishlist.html">wishlist</a></li>
                                                    <li><a href="contact.html">contact</a></li>
                                                    <li><a href="login.html">login</a></li>
                                                    <li><a href="shop.html">shop</a></li>
                                                    <li><a href="product-details.html">product details</a></li>
                                                    <li><a href="shop-full-width.html">shop full width</a></li>
                                                    <li><a href="shop-right-sidebar.html">shop right sidebar</a></li>
                                                    <li><a href="404.html">404 error</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* mobile-menu-area end */}
            </header>


        </>
    )
}

export default Header;
