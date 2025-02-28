import React, { useEffect, useState } from 'react';
import Layout from '../components/LayoutContainer/Layout';
import axios from 'axios';
import {Checkbox, Radio} from 'antd';
import { Prices } from '../components/prices';
import { useNavigate } from 'react-router-dom';
import {useCart} from "../context/Cart"
import { toast } from 'react-toastify';

const Products = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked , setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);


  
  // get all categories

     const getAllcatgory = async () => {
      try {
         const {data} = await axios.get(`${import.meta.env.VITE_APP_API }/api/v1/category/get-category`);
         if(data?.success){
          setCategories(data?.category);
         }
      } catch (error) {
        console.error(error);
      }
    };

 
 
  // get products
  // const getAllProducts = async () => {
  //   try {
  //     const {data} = await axios.get(`${import.meta.env.VITE_APP_API }/api/v1/product/get-product`);
  //     setProducts(data.products);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
 
  // change the get product for pagination load

  const getAllProducts = async () => {
    try {
      setLoading(true)
      const {data} = await axios.get(`${import.meta.env.VITE_APP_API }/api/v1/product/product-list/${page}`);
      setLoading(false)
      setProducts(data.products);
    } catch (error) {
      setLoading(false)
      console.error(error);
    }
  }

  // filter bt category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if(value){
      all.push(id)
    } else {
      all = all.filter(c => c !== id)
    }
    setChecked(all);
  }
  



  // get filter Product
  const filterProduct = async () => {
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_APP_API }/api/v1/product/product-filters`, {checked, radio});
      setProducts(data?.products)
    } catch (error) {
      console.error(error);
    }
  }

  // getTotal Count 
    const getTotal = async () => {
      try {
        const {data} = await axios.get(`${import.meta.env.VITE_APP_API }/api/v1/product/product-count`);
        setTotal(data?.total)
      } catch (error) {
         console.error(error);
      }
    } 
  
  // load more products

    const loadMore = async () => {
       try {
         setLoading(true)
         const {data} = await axios.get(`${import.meta.env.VITE_APP_API }/api/v1/product/product-list/${page}`);
         setLoading(false)
         setProducts([...products, ...data?.products])
       } catch (error) {
         console.error(error);
         setLoading(false)
       }
    }
  useEffect(()=> {
      if(page === 1) return 
      loadMore();
      // eslint-disable-next-line
  },[page])
  
  useEffect(()=> {
      getAllcatgory();
      getTotal();
   },[])

  useEffect(() => {
    if(!checked.length || !radio.length) getAllProducts();
    // eslint-disable-next-line
  },[checked.length , radio.length])

  useEffect(() => {
    if(checked.length || radio.length) filterProduct();
    // eslint-disable-next-line
  },[checked, radio]);


  return (
    <Layout  title={"Privacy Products - Eccomerce"} >
      <div className='allbaseproduct mt-5'>
        <h1 className='fw-bold text-center'>All <span className='bg-warning text-white py-1 px-3 mx-2 rounded-3'>Shopping </span>Products</h1>
      </div>
       <div className='container-fluid p-4'>
          <div className='row mt-3'>
            <div className='col-md-2 mb-3'>
                <h3 className='text-left'>Product Filter</h3>
                <div className="cards-container mt-4">
                  <div className="cards-contain">
                  <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                          Category
                        </button>
                      </h2>
                      <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body p-3">
                          {/* need sit */}
                            <ul className="list-group">
                              {
                                categories?.map(c => (
                                  <li key={c._id}  className="list-group-item">
                                    <Checkbox onChange={(e) => handleFilter (e.target.checked, c._id) }>
                                      {c.name}
                                    </Checkbox>
                                  </li>
                                ))
                              }
                            </ul>
                          
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                          Price
                        </button>
                      </h2>
                      <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body p-3">
                            <ul className="list-group">
                              <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                                {
                                  Prices?.map(p => (
                                    <li key={p._id} className="list-group-item">
                                      <Radio value={p.array}>{p.range}</Radio>
                                    </li>
                                  ))
                                }
                               </Radio.Group>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className='rested-btn-contain mt-5'>
                    <button className='btn btn-danger' onClick={() => window.location.reload()}>RESET FILTERS</button>
                  </div>
                </div>
            </div>
            <div className='col-md-10 '> 
               {/* {JSON.stringify(radio, null, 4)} test case */} 
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
                                                        <button href="#" className="btn btn-secondary ms-3 text-uppercase w-100" 
                                                        onClick={() => {
                                                          setCart([...cart,p]);
                                                          localStorage.setItem('cart', JSON.stringify([...cart, p]))
                                                          toast.success('Item added to cart')
                                                          } }>Add to card</button>
                                                      </div>
                                                  </div>
                                              </div>
                                      </div>
                              
                              ))
                         }
                </div>
                <div className='totalPage'>
                  <div className='pagination'>
                     {products && products.length < total && (
                      <button className='btn btn-warning d-block mx-auto' onClick={(e) => {
                        e.preventDefault();
                        setPage(page + 1);
                      }}>
                        {loading ? "Loading ..." : "Loadmore"}
                      </button>
                     )}
                    {/* {total} */}
                  </div>
                </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Products