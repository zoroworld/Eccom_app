import React, { useEffect, useState } from 'react'
import Layout from '../components/LayoutContainer/Layout'
import axios from 'axios';
import {  useNavigate, useParams } from 'react-router-dom';


const Singleproduct = () => {
const navigate = useNavigate();
const params = useParams();
const[product , setProduct] = useState({})
const[relativeProduct, setRealativeProduct]  = useState([])






// get prodaucts
const getProduct = async () => {
    try {
        const {data} =  await axios.get(`${process.env.REACT_APP_API}api/v1/product/get-product/${params.slug}`);
        setProduct(data.product);
        getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
}


//get similar product
const getSimilarProduct = async(pid,cid) => {
  try {
     const {data} = await axios.get(`${process.env.REACT_APP_API}api/v1/product/related-product/${pid}/${cid}`);
     setRealativeProduct(data?.products);
  } catch (error) {
     console.log(error);
  }
}

// initial details
useEffect(() => {
   getProduct(); 

   // eslint-disable-next-line
}, [])

  return (
    <div className='singleProduct'>
      {/* {JSON.stringify(product.category.name, null, 4)}  */}
      <Layout title={'Single product'}>
        <div className='container-fluid my-5 px-4'>
          {
            product._id ? (
              <div className='row'>
                <div className='col-md-4'>
                  <div className='singleProdimageContainer'>
                    <img
                      src={`${process.env.REACT_APP_API}api/v1/product/product-photo/${product._id}`}
                      className='card-img-top img-fluid '
                      alt={`about ${product.name}`}
                    />
                  </div>
                </div>
                <div className='col-md-8'>
                  <div className='singleproductdetails'>
                    <div className='card pb-4'>
                      <div className='card-body'>
                        <h1 className='card-title mb-3'>Product details</h1>
                        <hr />
                        <h5 className='text-capitalize mb-2'>
                          <span className='fw-bold pe-2'>Name:</span>
                          {product.name}
                        </h5>
                        <div className='price mb-2'>
                          <p className='text-capitalize fs-5'>
                            <span className='fw-bold pe-2'>Price:</span>
                            <span>$</span>
                            {product.price}
                          </p>
                        </div>
                        <div className='quantity'>
                          <p className='text-capitalize fs-5'>
                            <span className='fw-bold pe-2'>Quantity:</span>
                            {product.quantity}
                          </p>
                        </div>
                        {product.category && product.category.name ? ( // Check if product.category and product.category.name exist
                          <div className='category'>
                            <p className='fs-5'>
                              <span className='fw-bold pe-2'>Category:</span>
                              {product?.category?.name}
                            </p>
                          </div>
                        ) : (
                          <p>No category available</p>
                        )}
                        {/* Add the rest of the product details here */}
                      </div>
                      <div className='card-body'>
                        <button className='btn btn-secondary ms-1'>ADD TO CART</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading...</p> // Display a loading message while fetching the product data
            )
          }
          <hr />
          
          <div className='similarProducts mt-4'>
            <h2 className='fw-bold'>Similar Products</h2>
            {relativeProduct.length<1 && <p className='text-center text-warning fw-bold'>No Similar Products found</p>}
            <div className='row'>
            
                {
                 product._id ? (
                  
                  relativeProduct?.map(p => (
                        
                            <div className='col-md-3 my-2' key={p._id}>
                                
                                    <div className="card h-100" >
                                        <img src={`${process.env.REACT_APP_API}api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={`about ${p.name}`}/>
                                        <div className="card-body d-flex flex-column justify-content-between">
                                            <div className='mb-3'>
                                                <h5 className="card-title fw-bold text-capitalize">{p.name}</h5>
                                                <h5 className="fw-bold text-capitalize">${p.price}</h5>
                                                <p className="card-text fw-light">{p.description.substring(0, 30)}...</p>
                                            </div>
                                            <div className='d-flex justify-content-end'>
                                                <button  className="btn btn-primary text-uppercase" 
                                                  onClick={() => window.location.reload(navigate(`/product/${p.slug}`))}>View more</button>
                                                 
                                            </div>
                                        </div>
                                    </div>
                            </div>
                    
                    ))
                 ) : (
                  <p>Loading...</p> 
                 )
                }
             
            </div>
          </div>
         
        </div>
      </Layout>
    </div>
  )
}

export default Singleproduct