import React from 'react';
import Layout from '../components/LayoutContainer/Layout';
import { useSearch } from '../context/search';



const Search = () => {
    const[values] = useSearch();
  return (
    <Layout title={'Search the product'}>
       <div className='container-fluid'>
         <h1>Search Results</h1>
         <h6>{values?.results.length < 1 ? 'No products found' : `found ${values?.results.length}`}</h6>
         <div className='row mb-3 mt-4'>
                {
                              values?.results.map(p => (
                                  
                                      <div className='col-md-3 my-2' key={p._id}>
                                          
                                              <div className="card h-100" >
                                                  <img src={`${process.env.REACT_APP_API}api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={`about ${p.name}`}/>
                                                  <div className="card-body d-flex flex-column justify-content-between">
                                                      <div className='mb-3'>
                                                          <h5 className="card-title fw-bold text-capitalize">{p.name}</h5>
                                                          <h5 className="fw-bold text-capitalize">${p.price}</h5>
                                                          <p className="card-text fw-light">{p.description.substring(0, 30)}...</p>
                                                      </div>
                                                      <div className='d-flex justify-content-center'>
                                                        <button href="#" className="btn btn-primary text-uppercase">View more</button>
                                                        <button href="#" className="btn btn-secondary ms-3 text-uppercase">Add to card</button>
                                                      </div>
                                                  </div>
                                              </div>
                                      </div>
                              
                              ))
                          }
                </div>
       </div>
    </Layout>
  )
}

export default Search