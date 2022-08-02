import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from "../context/StateContext";


const Navbar = () => {

    const cart = useSelector((state) => state.cart);
    const products = useSelector((state) => state.products);
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { quantity, totalPrice, totalQuantity, cartItem, setShowCart } = useStateContext();


    const submit = (data) => {
        axios
        .post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login", data)
        .then((res) => {
          localStorage.setItem("token", res.data.data.token);      
          alert("Sesión iniciada correctamente");
        })
        .catch((error) => {
          console.log(error.response.status);
          if (error.response.status === 401) {
            alert("Credenciales incorrectas");
          }
        });
    }
    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

   
    /*
    const { products } = useApi('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setShow(false);
        }
    })


    const handleRemove = (id) => {
        const arr = products.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };

    const handlePrice = () => {
        let ans = 0;
        products.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
    };

    useEffect(() => {
        handlePrice();
    });
    */
   
   

    return (
        <>
        <div  className={`modal fade ${isOpen ? 'show' : ''}`} id="signin-modal" tabIndex="-1" role="dialog" style={{ display: isOpen ? 'block' : 'none', background: isOpen ? 'rgba(0, 0, 0, 0.7)': '' }}>
            <div className="modal-dialog modal-dialog-centered" role="document" >
                <div className="modal-content">
                    <div className="modal-header bg-secondary">
                        <ul className="nav nav-tabs card-header-tabs" role="tablist">
                            <li className="nav-item"><a className="nav-link fw-medium active" href="#signin-tab" data-bs-toggle="tab" role="tab" aria-selected="true"><i className="ci-unlocked me-2 mt-n1"></i>Sign in</a></li>
                        </ul>
                        <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" onClick={toggleModal}></button>
                    </div>
                    <div className="modal-body tab-content py-4">
                        <form className="needs-validation tab-pane fade show active" autoComplete="off" noValidate id="signin-tab">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="si-email">Email address</label>
                                <input className="form-control" type="email" id="si-email" {...register("email")} placeholder="johndoe@example.com" required/>
                                    <div className="invalid-feedback">Please provide a valid email address.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="si-password">Password</label>
                                <div className="password-toggle">
                                    <input className="form-control" type="password" id="si-password" {...register("password")} required/>
                                        <label className="password-toggle-btn" aria-label="Show/hide password">
                                            <input className="password-toggle-check" type="checkbox"/><span className="password-toggle-indicator"></span>
                                        </label>
                                </div>
                            </div>
                            <div className="mb-3 d-flex flex-wrap justify-content-between">
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="si-remember"/>
                                        <label className="form-check-label" htmlFor="si-remember">Remember me</label>
                                </div><a className="fs-sm" href="/#">Forgot password?</a>
                            </div>
                            <button className="btn btn-primary btn-shadow d-block w-100" type="submit" onSubmit={handleSubmit(submit)}>Sign in</button>
                        </form>
                        <form className="needs-validation tab-pane fade" autoComplete="off" noValidate id="signup-tab">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="su-name">Full name</label>
                                <input className="form-control" type="text" id="su-name" placeholder="John Doe" required/>
                                    <div className="invalid-feedback">Please fill in your name.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="su-email">Email address</label>
                                <input className="form-control" type="email" id="su-email" placeholder="johndoe@example.com" required/>
                                    <div className="invalid-feedback">Please provide a valid email address.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="su-password">Password</label>
                                <div className="password-toggle">
                                    <input className="form-control" type="password" id="su-password" required/>
                                        <label className="password-toggle-btn" aria-label="Show/hide password">
                                            <input className="password-toggle-check" type="checkbox"/><span className="password-toggle-indicator"></span>
                                        </label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="su-password-confirm">Confirm password</label>
                                <div className="password-toggle">
                                    <input className="form-control" type="password" id="su-password-confirm" required/>
                                        <label className="password-toggle-btn" aria-label="Show/hide password">
                                            <input className="password-toggle-check" type="checkbox"/><span className="password-toggle-indicator"></span>
                                        </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            <nav className="shadow-sm">
                <div className="topbar topbar-dark bg-dark">
                    <div className="container">
                        <div className="topbar-text dropdown d-md-none"><a className="topbar-link dropdown-toggle" href="/#" data-bs-toggle="dropdown">Useful links</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="tel:00331697720"><i className="ci-support text-muted me-2"></i>(00) 33 169 7720</a></li>
                                <li><a className="dropdown-item" href="order-tracking.html"><i className="ci-location text-muted me-2"></i>Order tracking</a></li>
                            </ul>
                        </div>
                        <div className="topbar-text text-nowrap d-none d-md-inline-block"><i className="ci-support"></i><span className="text-muted me-1">Support</span><a className="topbar-link" href="tel:00331697720">(00) 33 169 7720</a></div>
                        <div className="tns-carousel tns-controls-static d-none d-md-block">
                            <div className="tns-carousel-inner" /*data-carousel-options="{&quot;mode&quot;: &quot;gallery&quot;, &quot;nav&quot;: false}"*/>
                                <div className="topbar-text">Free shipping for order over $200</div>
                                <div className="topbar-text">We return money within 30 days</div>
                                <div className="topbar-text">Friendly 24/7 customer support</div>
                            </div>
                        </div>
                        <div className="ms-3 text-nowrap"><a className="topbar-link me-4 d-none d-md-inline-block" href="order-tracking.html"><i className="ci-location"></i>Order tracking</a>
                            <div className="topbar-text dropdown disable-autohide"><a className="topbar-link dropdown-toggle" href="/#" data-bs-toggle="dropdown"><img className="me-2" src="img/flags/en.png" width="20" alt="English" />Eng / $</a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li className="dropdown-item">
                                        <select className="form-select form-select-sm">
                                            <option value="usd">$ USD</option>
                                            <option value="eur">€ EUR</option>
                                            <option value="ukp">£ UKP</option>
                                            <option value="jpy">¥ JPY</option>
                                        </select>
                                    </li>
                                    <li><a className="dropdown-item pb-1" href="/#"><img className="me-2" src="img/flags/fr.png" width="20" alt="Français" />Français</a></li>
                                    <li><a className="dropdown-item pb-1" href="/#"><img className="me-2" src="img/flags/de.png" width="20" alt="Deutsch" />Deutsch</a></li>
                                    <li><a className="dropdown-item" href="/#"><img className="me-2" src="img/flags/it.png" width="20" alt="Italiano" />Italiano</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-sticky bg-light">
                    <div className="navbar navbar-expand-lg navbar-light">
                        <div className="container"><a className="navbar-brand d-none d-sm-block flex-shrink-0" href="index.html"><img src="img/logo-dark.png" width="142" alt="Cartzilla" /></a><a className="navbar-brand d-sm-none flex-shrink-0 me-2" href="index.html"><img src="img/logo-icon.png" width="74" alt="Cartzilla" /></a>
                            <div className="input-group d-none d-lg-flex mx-4">
                                <input className="form-control rounded-end pe-5" type="text" placeholder="Search for products" /><i className="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"></i>
                            </div>
                            <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center" style={{ cursor: 'pointer' }}>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span className="navbar-toggler-icon"></span></button><a className="navbar-tool navbar-stuck-toggler" href="/#"><span className="navbar-tool-tooltip">Expand menu</span>
                                    <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-menu"></i></div></a><a className="navbar-tool d-none d-lg-flex" href="account-wishlist.html"><span className="navbar-tool-tooltip">Wishlist</span>
                                    <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-heart"></i></div></a><a className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" data-bs-toggle="modal">
                                    <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-user" onClick={toggleModal} ></i></div>
                                    <div className="navbar-tool-text ms-n3" ><small>Hello, Sign in</small>My Account</div></a>
                                <div className="navbar-tool dropdown ms-3"><a className="navbar-tool-icon-box bg-secondary dropdown-toggle" href="shop-cart.html"><span className="navbar-tool-label">{quantity}</span><i className="navbar-tool-icon ci-cart"></i></a><a className="navbar-tool-text" href="shop-cart.html"><small>My Cart</small>${quantity * products.price}.00</a>
                                    <div className="dropdown-menu dropdown-menu-end">

                                        <div className="widget widget-cart px-3 pt-2 pb-3" style={{width: 'auto'}}>
                                            <div style={{height: 'auto'}} data-simplebar data-simplebar-auto-hide="false">
                                    
                                                
                                                 {  cart.products.map(( product, quantity ) => 
 
                                                 ( 
                                                    <div className="widget-cart-item pb-2 border-bottom" key={product.name}>
                                                        <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                                                        <div className="d-flex align-items-center"><a className="flex-shrink-0" href="shop-single-v1.html"><img src={product.productImgs?.[0]} width="64" alt="Product" /></a>
                                                            <div className="ps-2">
                                                                <h6 className="widget-product-title"><a href="shop-single-v1.html">{product.title}</a></h6>
                                                                <div className="widget-product-meta"><span className="text-accent me-2">${product.price}.<small>00</small></span><span className="text-muted">x {quantity}</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}  
                                            </div>
                                            <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                                                <div className="fs-sm me-2 py-2"><span className="text-muted">Subtotal:</span><span className="text-accent fs-base ms-1">${totalPrice}<small></small></span></div><a className="btn btn-outline-secondary btn-sm" href="shop-cart.html">Expand cart<i className="ci-arrow-right ms-1 me-n1"></i></a>
                                            </div><a className="btn btn-primary btn-sm d-block w-100" href="checkout-details.html"><i className="ci-card me-2 fs-base align-middle"></i>Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
                        <div className="container">
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="input-group d-lg-none my-3"><i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                                    <input className="form-control rounded-start" type="text" placeholder="Search for products" />
                                </div>
                                <ul className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
                                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle ps-lg-0" href="/#" data-bs-toggle="dropdown"><i className="ci-view-grid me-2"></i>Departments</a>
                                        <div className="dropdown-menu px-2 pb-4">
                                            <div className="d-flex flex-wrap flex-sm-nowrap">
                                                <div className="mega-dropdown-column pt-3 pt-sm-4 px-2 px-lg-3">
                                                    {/* <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="/#"><img src="img/shop/departments/01.jpg" alt="Clothing" /></a>
                                            <h6 className="fs-base mb-2">Clothing</h6>
                                            <ul className="widget-list">
                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="/#">Women's clothing</a></li>
                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="/#">Men's clothing</a></li>
                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="/#">Kid's clothing</a></li>
                                            </ul>
                                        </div> */}
                                                </div>
                                                {/* <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                                        <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="/#"><img src="img/shop/departments/02.jpg" alt="Shoes" /></a>
                                            <h6 className="fs-base mb-2">Shoes</h6>
                                            <ul className="widget-list">
                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="/#">Women's shoes</a></li>
                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="/#">Men's shoes</a></li>
                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="/#">Kid's shoes</a></li>
                                            </ul>
                                        </div>
                                    </div> */}
                                                <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                                                    <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="/#"><img src="img/shop/departments/03.jpg" alt="Gadgets" /></a>
                                                        <h6 className="fs-base mb-2">Gadgets</h6>
                                                        <ul className="widget-list">
                                                            <li className="widget-list-item mb-1"><a className="widget-list-link" href="/#">Smartphones &amp; Tablets</a></li>
                                                            <li className="widget-list-item mb-1"><a className="widget-list-link" href="/#">Wearable gadgets</a></li>
                                                            <li className="widget-list-item mb-1"><a className="widget-list-link" href="/#">E-book readers</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="d-flex flex-wrap flex-sm-nowrap">
                                    <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                                        <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="/#"><img src="img/shop/departments/04.jpg" alt="Furniture" /></a>
                                            <h6 className="fs-base mb-2">Furniture &amp; Decor</h6>
                                            <ul className="widget-list">
                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="/#">Home furniture</a></li>
                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="/#">Office furniture</a></li>
                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="/#">Lighting and decoration</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                                        <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="/#"><img src="img/shop/departments/05.jpg" alt="Accessories" /></a>
                                            <h6 className="fs-base mb-2">Accessories</h6>
                                            <ul className="widget-list">
                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="/#">Hats</a></li>
                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="/#">Sunglasses</a></li>
                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="/#">Bags</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                                        <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="/#"><img src="img/shop/departments/06.jpg" alt="Entertainment" /></a>
                                            <h6 className="fs-base mb-2">Entertainment</h6>
                                            <ul className="widget-list">
                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="/#">Kid's toys</a></li>
                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="/#">Video games</a></li>
                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="/#">Outdoor / Camping</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                                        </div>
                                    </li>
                                </ul>
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown">Home</a>
                                        {/* <ul className="dropdown-menu">
                                <li className="dropdown position-static mb-0"><a className="dropdown-item border-bottom py-2" href="home-nft.html"><span className="d-block text-heading">NFT Marketplace<span className="badge bg-danger ms-1">NEW</span></span><small className="d-block text-muted">NFTs, Multi-vendor, Auctions</small></a>
                                    <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-nft.html" style={{width: '250px;'}}><img src="img/home/preview/th08.jpg" alt="NFT Marketplace" /></a></div>
                                </li>
                                <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-fashion-store-v1.html"><span className="d-block text-heading">Fashion Store v.1</span><small className="d-block text-muted">Classic shop layout</small></a>
                                    <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-fashion-store-v1.html" style={{width: '250px;'}}><img src="img/home/preview/th01.jpg" alt="Fashion Store v.1" /></a></div>
                                </li>
                                <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-electronics-store.html"><span className="d-block text-heading">Electronics Store</span><small className="d-block text-muted">Slider + Promo banners</small></a>
                                    <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-electronics-store.html" style={{width: '250px;'}}><img src="img/home/preview/th03.jpg" alt="Electronics Store" /></a></div>
                                </li>
                                <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-marketplace.html"><span className="d-block text-heading">Marketplace</span><small className="d-block text-muted">Multi-vendor, digital goods</small></a>
                                    <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-marketplace.html" style={{width: '250px;'}}><img src="img/home/preview/th04.jpg" alt="Marketplace" /></a></div>
                                </li>
                                <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-grocery-store.html"><span className="d-block text-heading">Grocery Store</span><small className="d-block text-muted">Full width + Side menu</small></a>
                                    <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-grocery-store.html" style={{width: '250px;'}}><img src="img/home/preview/th06.jpg" alt="Grocery Store" /></a></div>
                                </li>
                                <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-food-delivery.html"><span className="d-block text-heading">Food Delivery Service</span><small className="d-block text-muted">Food &amp; Beverages delivery</small></a>
                                    <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-food-delivery.html" style={{width: '250px;'}}><img src="img/home/preview/th07.jpg" alt="Food Delivery Service" /></a></div>
                                </li>
                                <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-fashion-store-v2.html"><span className="d-block text-heading">Fashion Store v.2</span><small className="d-block text-muted">Slider + Featured categories</small></a>
                                    <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-fashion-store-v2.html" style={{width: '250px'}}><img src="img/home/preview/th02.jpg" alt="Fashion Store v.2" /></a></div>
                                </li>
                                <li className="dropdown position-static mb-0"><a className="dropdown-item py-2" href="home-single-store.html"><span className="d-block text-heading">Single Product Store</span><small className="d-block text-muted">Single product / mono brand</small></a>
                                    <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-single-store.html" style={{width: '250px;'}}><img src="img/home/preview/th05.jpg" alt="Single Product / Brand Store" /></a></div>
                                </li>
                            </ul> */}
                                    </li>
                                    <li className="nav-item dropdown active"><a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown">Shop</a>
                                        {/* <div className="dropdown-menu p-0">
                                <div className="d-flex flex-wrap flex-sm-nowrap px-2">
                                    <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                                        <div className="widget widget-links mb-4">
                                            <h6 className="fs-base mb-3">Shop layouts</h6>
                                            <ul className="widget-list">
                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-ls.html">Shop Grid - Left Sidebar</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-rs.html">Shop Grid - Right Sidebar</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-ft.html">Shop Grid - Filters on Top</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-list-ls.html">Shop List - Left Sidebar</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-list-rs.html">Shop List - Right Sidebar</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-list-ft.html">Shop List - Filters on Top</a></li>
                                            </ul>
                                        </div>
                                        <div className="widget widget-links mb-4">
                                            <h6 className="fs-base mb-3">Marketplace</h6>
                                            <ul className="widget-list">
                                                <li className="widget-list-item"><a className="widget-list-link" href="marketplace-category.html">Category Page</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="marketplace-single.html">Single Item Page</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="marketplace-vendor.html">Vendor Page</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="marketplace-cart.html">Cart</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="marketplace-checkout.html">Checkout</a></li>
                                            </ul>
                                        </div>
                                        <div className="widget widget-links">
                                            <h6 className="fs-base mb-3">Grocery store</h6>
                                            <ul className="widget-list">
                                                <li className="widget-list-item"><a className="widget-list-link" href="grocery-catalog.html">Product Catalog</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="grocery-single.html">Single Product Page</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="grocery-checkout.html">Checkout</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                                        <div className="widget widget-links mb-4">
                                            <h6 className="fs-base mb-3">Food Delivery</h6>
                                            <ul className="widget-list">
                                                <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-category.html">Category Page</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-single.html">Single Item (Restaurant)</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-cart.html">Cart (Your Order)</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-checkout.html">Checkout (Address &amp; Payment)</a></li>
                                            </ul>
                                        </div>
                                        <div className="widget widget-links">
                                            <h6 className="fs-base mb-3">NFT Marketplace<span className="badge bg-danger ms-1">NEW</span></h6>
                                            <ul className="widget-list">
                                                <li className="widget-list-item"><a className="widget-list-link" href="nft-catalog-v1.html">Catalog v.1</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="nft-catalog-v2.html">Catalog v.2</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="nft-single-auction-live.html">Single Item - Auction Live</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="nft-single-auction-ended.html">Single Item - Auction Ended</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="nft-single-buy.html">Single Item - Buy Now</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="nft-vendor.html">Vendor Page</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="nft-connect-wallet.html">Connect Wallet</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="nft-create-item.html">Create New Item</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mega-dropdown-column pt-1 pt-lg-4 px-2 px-lg-3">
                                        <div className="widget widget-links mb-4">
                                            <h6 className="fs-base mb-3">Shop pages</h6>
                                            <ul className="widget-list">
                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-categories.html">Shop Categories</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-single-v1.html">Product Page v.1</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-single-v2.html">Product Page v.2</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-cart.html">Cart</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="checkout-details.html">Checkout - Details</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="checkout-shipping.html">Checkout - Shipping</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="checkout-payment.html">Checkout - Payment</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="checkout-review.html">Checkout - Review</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="checkout-complete.html">Checkout - Complete</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="order-tracking.html">Order Tracking</a></li>
                                                <li className="widget-list-item"><a className="widget-list-link" href="comparison.html">Product Comparison</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                                    </li>
                                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Account</a>
                                        <ul className="dropdown-menu">
                                            {/* <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="/#" data-bs-toggle="dropdown">Shop User Account</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="account-orders.html">Orders History</a></li>
                                        <li><a className="dropdown-item" href="account-profile.html">Profile Settings</a></li>
                                        <li><a className="dropdown-item" href="account-address.html">Account Addresses</a></li>
                                        <li><a className="dropdown-item" href="account-payment.html">Payment Methods</a></li>
                                        <li><a className="dropdown-item" href="account-wishlist.html">Wishlist</a></li>
                                        <li><a className="dropdown-item" href="account-tickets.html">My Tickets</a></li>
                                        <li><a className="dropdown-item" href="account-single-ticket.html">Single Ticket</a></li>
                                    </ul>
                                </li> */}
                                            {/* <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="/#" data-bs-toggle="dropdown">Vendor Dashboard</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="dashboard-settings.html">Settings</a></li>
                                        <li><a className="dropdown-item" href="dashboard-purchases.html">Purchases</a></li>
                                        <li><a className="dropdown-item" href="dashboard-favorites.html">Favorites</a></li>
                                        <li><a className="dropdown-item" href="dashboard-sales.html">Sales</a></li>
                                        <li><a className="dropdown-item" href="dashboard-products.html">Products</a></li>
                                        <li><a className="dropdown-item" href="dashboard-add-new-product.html">Add New Product</a></li>
                                        <li><a className="dropdown-item" href="dashboard-payouts.html">Payouts</a></li>
                                    </ul>
                                </li> */}
                                            {/* <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="/#" data-bs-toggle="dropdown">NFT Marketplace<span className="badge bg-danger ms-1">NEW</span></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="nft-account-settings.html">Profile Settings</a></li>
                                        <li><a className="dropdown-item" href="nft-account-payouts.html">Wallet &amp; Payouts</a></li>
                                        <li><a className="dropdown-item" href="nft-account-my-items.html">My Items</a></li>
                                        <li><a className="dropdown-item" href="nft-account-my-collections.html">My Collections</a></li>
                                        <li><a className="dropdown-item" href="nft-account-favorites.html">Favorites</a></li>
                                        <li><a className="dropdown-item" href="nft-account-notifications.html">Notifications</a></li>
                                    </ul>
                                </li> */}
                                            <li><a className="dropdown-item" onClick={() => navigate(`/login`)}>Sign In / Sign Up</a></li>
                                            <li><a className="dropdown-item" href="account-password-recovery.html">Password Recovery</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Blog</a>

                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )

}

export default Navbar