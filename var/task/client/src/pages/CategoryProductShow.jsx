import React, {  useEffect, useState } from 'react'
import Layout from '../components/LayoutContainer/Layout'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const CategoryProductShow = () => {


  const navigate = useNavigate();
  const  params = useParams();
  const [products, setProducts] = useState([]);
  const [category , setCategory] = useState([]);

  const getProductByCat = async () => {
    try {
       const {data} = await axios.get(`${import.meta.env.VITE_APP_API }/api/v1/product/product-category/${params.slug}`);
       setProducts(data?.products);
       setCategory(data?.category);
    } catch (error) {
       console.log(error);
    }
  }


  useEffect(() => {
    if(params?.slug) { getProductByCat()}
    // eslint-disable-next-line
  }, [params?.slug]);

  return (
    <Layout>
        <div className='container-fluid px-4'>
          {
             (category._id || products._id) ? (
                 <>
                 <div className='p-4 mt-5'>
                    <div className='catHeading'>
                      <h1 className='fw-bold text-capitalize'><span className='bg-primary py-2 px-3 m-1 rounded-2'>Category:</span>{category?.name}</h1>
                    </div>
                    <div className='catSubHeading mt-3'>
                       <h5 className='text-capitalize text-end text-primary fs-3'><span className='fw-bold'>{products?.length}</span> Result found</h5>
                    </div>
                    <div className='allprd'>
                        <div className='conatiner-fluid'>
                          <div className='row mb-3'>
                            {
                              products?.map(p => (
                                  
                                      <div className='col-md-3 my-2' key={p._id}>
                                          
                                              <div className="card h-100" >
                                                  <img src={`${import.meta.env.VITE_APP_API }/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={`about ${p.name}`}/>
                                                  <div className="card-body d-flex flex-column justify-content-between">
                                                      <div className='mb-3'>
                                                         <div className="d-flex justify-content-between">
                                                            <h5 className="card-title fw-bold text-capitalize">{p.name}</h5>
                                                            <h5 className="fw-bold text-capitalize text-primary">${p.price}</h5>
                                                         </div>
                                                          <p className="card-text fw-light">{p.description.substring(0, 30)}...</p>
                                                      </div>
                                                      <div className='d-flex justify-content-center'>
                                                        <button href="#" className="btn btn-primary text-uppercase w-100" 
                                                          onClick={() => navigate(`/product/${p.slug}`)}>View more</button>
                                                        <button href="#" className="btn btn-secondary ms-3 text-uppercase w-100">Add to card</button>
                                                      </div>
                                                  </div>
                                              </div>
                                      </div>
                              
                              ))
                            }
                          </div>
                        </div>
                    </div>
                  </div>
                 </>
             ) : (
              <p>Loading...</p> 
             )
          }
        </div>
    </Layout>
  )
}

export default CategoryProductShow