import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { filterCategory, filterProductsByName, getProducts } from '../store/slices/products.slice';


const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [ search, setSearch ] = useState("");
  
      let products = useSelector(state => state.products);

      useEffect(() => {
        dispatch(getProducts());
    
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
          .then(res => setCategories(res.data.data))
    
          
      }, [dispatch]);

      const selectCategory = (id) => {
        dispatch(filterCategory(id))
      }
    
      const searchProduct = (id) => {
        dispatch(filterProductsByName(id))
      }


    return (
        <section className="container pt-5">
            <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
                <h2 className="h3 mb-0 pt-3 me-2">Trending products</h2>
                <div className="pt-3"><a className="btn btn-outline-accent btn-sm" href="shop-grid-ls.html">More products<i className="ci-arrow-right ms-1 me-n1"></i></a></div>
            </div>

            <div className="row pt-2 mx-n2">
                {
                    products.map(product => (
                        /*Se cambió el tamaño de la imagenn y el product card*/
                        <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                            <div style={{ width: '300px', height: '300px' }} className="card product-card"  onClick={() => navigate(`/product/${product.id}`)}>
                                <div className="product-card-actions d-flex align-items-center"><a className="btn-action nav-link-style me-2" href="/#"><i className="ci-compare me-1"></i>Compare</a>
                                    <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button>
                                </div><a className="container card-img-top d-block overflow-hidden"><img style={{ width: '200px', height: 'auto' }} src={product.productImgs[0]} alt="Product" /></a>
                                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="/#">{product.category?.name}</a>
                                    <h3 className="product-title fs-sm"><a>{product.title}</a></h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price"><span className="text-accent">{product.price}.<small>00</small></span></div>
                                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body card-body-hidden">
                                    <button className="btn btn-primary btn-sm d-block w-100 mb-2" type="button"><i className="ci-cart fs-sm me-1"></i>Add to Cart</button>
                                    <div className="text-center"><a className="nav-link-style fs-ms" href="#quick-view-electro" data-bs-toggle="modal"><i className="ci-eye align-middle me-1"></i>Quick view</a></div>
                                </div>
                            </div>
                            <hr className="d-sm-none" />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Home