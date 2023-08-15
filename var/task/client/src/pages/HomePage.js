import React, { useEffect, useState } from 'react';
import Layout from '../components/LayoutContainer/Layout';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useCart} from "../context/cart";
import useCategory from '../hooks/useCategory'


const HomePage = () => {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const categorylist = useCategory();
  const [checked] = useState([]);
  const [radio] = useState([]);
  const [page] = useState(1);
  const [ , setLoading] = useState(false);

  const getAllProducts = async () => {
    try {
      setLoading(true)
      const {data} = await axios.get(`${process.env.REACT_APP_API}api/v1/product/product-list/${page}`);
      setLoading(false)
      setProducts(data.products);
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }
  useEffect(() => {
    if(!checked.length || !radio.length) getAllProducts();
    // eslint-disable-next-line
  },[checked.length , radio.length])

  return (
    <Layout>
      <section className='heroSection'>
         <div className='smartWatchContaioner'>
          <div className="ratio-my">
              <div style={{padding: '56.25% 0 0 0', position: 'relative'}}><iframe src="https://player.vimeo.com/video/851998088?autoplay=1&loop=1&autopause=0&muted=1" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen frameBorder={0} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} /></div>
          </div>
         </div>
      </section>
      <section className='AboutSection p-4 mt-5'>
         <div className='AboutContain'>
            <div className='AboutHeading'>
              <h1 className='fw-bold myworp'><span className='bg-primary py-2 px-3 m-1 rounded-2'>Regarding</span>Our Products</h1>
            </div>
         </div>
         <div className='Abtwork mt-5'>
            <div className='container-fluid'>
               <div className='row'>
                   <div className='col-md-6'>
                      <div className="abtimg">
                        <img src="/images/smar1.png" className='img-fluid'  alt="about smart watch" />
                      </div>
                   </div>
                   <div className='col-md-6'>
                       <div className='AbtDetails h-100'>
                          <div className="card border-0 h-100">
                            <div className="card-body">
                              <h5 className="card-title fw-bold fs-2 mb-3">Best Smartwatch Product</h5>
                              <p className="card-text fw-light fs-5  lh-base"><span className='text-danger fw-bold '>Smartwatch, </span>a small smartphonelike device worn on the wrist. Many smartwatches are connected to a smartphone that notifies the user of incoming calls, e-mail messages, and notifications from applications. Some smartwatches can even make telephone calls. Many smartwatches have colour displays, but some inexpensive models use a black-and-white “e-paper” display. The user can operate the smartwatch through a touch screen, physical buttons, or a combination of the two. Some smartwatches come with pedometers and heart-rate monitors to help users track their health.</p>
                              
                            </div>
                            <div className='card-footer bg-transparent border-0'>
                               <Link className='btn btn-outline-primary float-end py-2 px-4 rounded-0' to={'/About'}>Read More</Link>
                            </div>
                          </div>
                        </div>
                   </div>
               </div>
            </div>
         </div>
      </section>
      <section className='categorySection mt-5 p-4'>
         <div className='catcontain'>
            <div className='catContent'>
                <div className='catHeading'>
                  <h1 className='fw-bold text-center myworp'><span className='bg-success py-2 px-3 m-1 rounded-2'>Category</span>Of Our Products</h1>
                </div>
                <div className='catpara mt-4'>
                  <p className='text-center fs-5 fw-light'>Category wise divide of product which make you choose better.</p>
                </div>
            </div>
            <div className='catSetiodetails mt-4'>
              <div className='container-fluid'>
                <div className='row'>
                  
                  {
                    categorylist.map((c) => (
                      <div className='col-md-3' key={c._id}>
                              <Link to={`/category/${c.slug}`}  className=" w-100 py-4 fs-3 text-capitalize text-center">
                                 <div className='card  bg-transparent'>
                                  <div className='card-body p-0'>  
                                     <img src="/images/smar1.png" className='img-fluid'  alt="about smart watch" />
                                   </div>
                                   <div className='card-header p-0 bg-transparent'>
                                     <h3 className='py-3'>{c.name}</h3>
                                  </div>
                                </div>
                              </Link>  
                      </div>
                    ))
                  }

                </div>
              </div>
            </div>
         </div>
      </section>
      <section className='productSection mt-5 p-4'>
        <div className='prdContain'>
            <div className='prdContent'>
                <div className='prdHeading'>
                  <h1 className='fw-bold text-end myworp'><span className='bg-warning py-2 px-3 m-1 rounded-2'>Choose</span>Your Products</h1>
                </div>
                <div className='prdpara mt-4'>
                  <p className='text-end fs-5 fw-light'>Category wise divide of product which make you choose better.</p>
                </div>
            </div>
            <div className='allProductContain'> 
                <div className='container-fluid'>        
                  <div className='row'>
                    {
                      products?.map(p => (
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
                                        <button href="#" className="btn btn-primary text-uppercase" 
                                        onClick={() => navigate(`/product/${p.slug}`)}>View more</button>
                                        <button href="#" className="btn btn-secondary ms-3 text-uppercase" 
                                        onClick={() => {
                                          setCart([...cart,p]);
                                          localStorage.setItem('cart', JSON.stringify([...cart, p]))
                                          } }>Add to card</button>
                                      </div>
                                  </div>
                              </div>
                      </div>
                      ))
                    }
                  </div> 
                </div>              
            </div>
            <div className='allProdbtn d-flex align-items-center justify-content-center my-3'>
               <Link className='btn btn-outline-primary py-2 px-4 rounded-0' to={'/products'}>Shop more</Link>
            </div>
        </div>
      </section>
      <section className='contactSection mt-5 p-4 bg-dark'>
         <div className='cntContain container'>
            <div className='cntContent'>
                <div className='cntHeading'>
                  <h1 className='text-white fw-bold text-center'>Get In Touch</h1>
                </div>
            </div>
            <div className='formControlContain mt-4'>
               <div className='container-fluid'>
                 <div className='row'>
                   <div className='col-md-6'>
                       <div className="cntimg h-100">
                          <img src="/images/smar1.png" className='h-100 w-100 object-fit-cover'  alt="about smart watch" />
                      </div>
                   </div>
                   <div className='col-md-6'>
                      <div className='formControllerContain'>
                        <form>
                          <div className="mb-3">
                            <label htmlFor="exampleInputname" className="form-label text-white">Your name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailName" />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label text-white">Your email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                          </div>
                          <div className="mb-3">
                             
                                <label htmlFor="floatingTextarea2" className="form-label text-white">comments</label>
                                <textarea className="form-control" rows={10} id="floatingTextarea2"  />
                            
                          </div>
                          <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                      </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
      </section>
    </Layout> 
  )
}

export default HomePage
