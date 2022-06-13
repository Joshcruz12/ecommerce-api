import React from 'react'

const Cart = () => {

  const { products } = useApi('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories');
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const removeFromCart = (product) => {
        setCart(cart.filter(item => item.id !== product.id));
    }

    const calculateTotal = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.price;
        });
        setTotal(total);
    }

    const clearCart = () => {
        setCart([]);
    }

    useEffect(() => {
        calculateTotal();
    }
        , [cart]);
        
  return (
    <>
            <div className="page-title-overlap bg-dark pt-4">
                <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                    <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                                <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="ci-home"></i>Home</a></li>
                                <li className="breadcrumb-item text-nowrap"><a href="shop-grid-ls.html">Shop</a>
                                </li>
                                <li className="breadcrumb-item text-nowrap active" aria-current="page">Cart</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                        <h1 className="h3 text-light mb-0">Your cart</h1>
                    </div>
                </div>
            </div>
            <div className="container pb-5 mb-2 mb-md-4">
                <div className="row"></div>
                <div className="container pb-5 mb-2 mb-md-4">
                    <div className="row">
                        <section className="col-lg-8">
                            <div className="d-flex justify-content-between align-items-center pt-3 pb-4 pb-sm-5 mt-1">
                                <h2 className="h6 text-light mb-0">Products</h2><a className="btn btn-outline-primary btn-sm ps-2" href="shop-grid-ls.html"><i className="ci-arrow-left me-2"></i>Continue shopping</a>
                            </div>
                            {/* <!-- Item--> */}
                           
                            <div className="d-sm-flex justify-content-between align-items-center my-2 pb-3 border-bottom">
                                <div className="d-block d-sm-flex align-items-center text-center text-sm-start"><a className="d-inline-block flex-shrink-0 mx-auto me-sm-4" href="shop-single-v1.html"><img src='img/shop/cart/02.jpg' width="160" alt="Product"/></a>
                                    <div className="pt-2">
                                       
                                         <h3 className="product-title fs-base mb-2"><a href="shop-single-v1.html"></a></h3>
                                        <div className="fs-lg text-accent pt-2">.<small>00</small></div>
                                    </div>
                                </div>
                                <div className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start" style="max-width: 9rem;">
                                    <label className="form-label" for="quantity1">Quantity</label>
                                    <input className="form-control" type="number" id="quantity1" min="1" value="1"/>
                                        <button className="btn btn-link px-0 text-danger" type="button"  ><i className="ci-close-circle me-2"></i><span className="fs-sm">Remove</span></button>
                                </div>
                            </div>
                        
                            {/* <!-- Item--> */}
                            <div className="d-sm-flex justify-content-between align-items-center my-2 pb-3 border-bottom">
                                <div className="d-block d-sm-flex align-items-center text-center text-sm-start"><a className="d-inline-block flex-shrink-0 mx-auto me-sm-4" href="shop-single-v1.html"><img src="img/shop/cart/02.jpg" width="160" alt="Product"/></a>
                                    <div className="pt-2">
                                        <h3 className="product-title fs-base mb-2"><a href="shop-single-v1.html">TH Jeans City Backpack</a></h3>
                                        <div className="fs-sm"><span className="text-muted me-2">Brand:</span>Tommy Hilfiger</div>
                                        <div className="fs-sm"><span className="text-muted me-2">Color:</span>Khaki</div>
                                        <div className="fs-lg text-accent pt-2">$79.<small>50</small></div>
                                    </div>
                                </div>
                                <div className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start" style="max-width: 9rem;">
                                    <label className="form-label" for="quantity2">Quantity</label>
                                    <input className="form-control" type="number" id="quantity2" min="1" value="1"/>
                                        <button className="btn btn-link px-0 text-danger" type="button"><i className="ci-close-circle me-2"></i><span className="fs-sm">Remove</span></button>
                                </div>
                            </div>
                            {/* <!-- Item--> */}
                            <div className="d-sm-flex justify-content-between align-items-center my-2 pb-3 border-bottom">
                                <div className="d-block d-sm-flex align-items-center text-center text-sm-start"><a className="d-inline-block flex-shrink-0 mx-auto me-sm-4" href="shop-single-v1.html"><img src="img/shop/cart/03.jpg" width="160" alt="Product"/></a>
                                    <div className="pt-2">
                                        <h3 className="product-title fs-base mb-2"><a href="shop-single-v1.html">3-Color Sun Stash Hat</a></h3>
                                        <div className="fs-sm"><span className="text-muted me-2">Brand:</span>The North Face</div>
                                        <div className="fs-sm"><span className="text-muted me-2">Color:</span>Pink / Beige / Dark blue</div>
                                        <div className="fs-lg text-accent pt-2">$22.<small>50</small></div>
                                    </div>
                                </div>
                                <div className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start" style="max-width: 9rem;">
                                    <label className="form-label" for="quantity3">Quantity</label>
                                    <input className="form-control" type="number" id="quantity3" min="1" value="1"/>
                                        <button className="btn btn-link px-0 text-danger" type="button"><i className="ci-close-circle me-2"></i><span className="fs-sm">Remove</span></button>
                                </div>
                            </div>
                            <div className="d-sm-flex justify-content-between align-items-center my-2 pb-3 border-bottom">
                                <div className="d-block d-sm-flex align-items-center text-center text-sm-start"><a className="d-inline-block flex-shrink-0 mx-auto me-sm-4" href="shop-single-v1.html"><img src="img/shop/cart/04.jpg" width="160" alt="Product"/></a>
                                    <div className="pt-2">
                                        <h3 className="product-title fs-base mb-2"><a href="shop-single-v1.html">Cotton Polo Regular Fit</a></h3>
                                        <div className="fs-sm"><span className="text-muted me-2">Size:</span>42</div>
                                        <div className="fs-sm"><span className="text-muted me-2">Color:</span>Light blue</div>
                                        <div className="fs-lg text-accent pt-2">$9.<small>00</small></div>
                                    </div>
                                </div>
                                <div className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start" style="max-width: 9rem;">
                                    <label className="form-label" for="quantity4">Quantity</label>
                                    <input className="form-control" type="number" id="quantity4" min="1" value="1"/>
                                        <button className="btn btn-link px-0 text-danger" type="button"><i className="ci-close-circle me-2"></i><span className="fs-sm">Remove</span></button>
                                </div>
                            </div>
                            <button className="btn btn-outline-accent d-block w-100 mt-4" type="button"><i className="ci-loading fs-base me-2"></i>Update cart</button>
                        </section>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Cart