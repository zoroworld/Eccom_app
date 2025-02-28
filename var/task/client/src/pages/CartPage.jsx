import React, { useEffect, useState } from 'react'
import Layout from '../components/LayoutContainer/Layout'
import { useCart } from '../context/Cart';
import { useAuth } from '../context/Auth';
import { useNavigate } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import DropIn from 'braintree-web-drop-in-react';
import axios from 'axios';
import { toast } from 'react-toastify';



const CartPage = () => {
    
    const [auth, setAuth] = useAuth();
    const [cart, setCart] = useCart(); 
    const navigate = useNavigate();
    const[clientToken, setClientToken] = useState("");
    const [instance, setInstance] = useState(null);
    const [loading, setLoading] = useState(false);

    // delete item
    const removeCartItem = (pid) => {
      try {
         let myCart = [...cart];
         let index = myCart.findIndex(item => item._id === pid);
         myCart.splice(index, 1);
         setCart(myCart);
         localStorage.setItem('cart', JSON.stringify(myCart));
      } catch (error) {
        console.error(error);
      }
    }

    // total Price
    const totalPrice = () => {
      try {
         let total = 0;
         cart?.map((item) => {total = total + item.price})
         return total.toLocaleString("en-US", {
          style:"currency",
          currency: "USD",
         });
      } catch (error) {
         console.error(error);
      }
    }

    // get payment gateway token
    const getToken = async () => {
      try {
        const  {data} = await axios.get(`${import.meta.env.VITE_APP_API }/api/v1/product/braintree/token`);
        setClientToken(data?.clientToken)
      } catch (error) {
        console.error(error);
      }
    }


    // handle payment
    const handlePayment = async () => {
        try {
           setLoading(true);
           const {nonce} = await instance.requestPaymentMethod();
           const {data} = await axios.post(`${import.meta.env.VITE_APP_API }/api/v1/product/braintree/payment`,
           {
            nonce, cart
           });
           setLoading(false)
           localStorage.removeItem('cart');
           setCart([])
           navigate('/dashboard/user/order');
           setTimeout(() => { 
            toast.success('Payment Complete Successfully');
           }, 300);
           
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
    };

     useEffect(() => {
      getToken();
      // eslint-disable-next-line
     }, [auth?.token])
     
  return (
    <Layout>
        <div className='container-fluid'>
             <div className='row'>
                <div className='col-md-12'>
                   <h1 className='text-center bg-light p-2 m-3'>
                       Hello go on <span color='red'>shopping </span> {`${ auth?.token && auth?.user?.name}`}
                   </h1> 
                   <h1 className='text-center bg-light p-1'>
                      {
                        cart?.length > 1 ? `You Have ${cart.length} items in your cart ${auth?.token  ? "" : "please login to checkout"}`: "Your Cart is Empty" 
                      }
                   </h1>
                </div>
             </div>
             <div className='row my-5 px-3'>
                <div className='col-md-8'>
                  <div className='card overflow-hidden '>
                    {
                      cart? (
                        cart.map(p => (
                          <div className=' myrelif row p-4' key={p._id}>
                            <div className='col-md-3'>
                              <img src={`${import.meta.env.VITE_APP_API }/api/v1/product/product-photo/${p._id}`} 
                              
                              alt={`about ${p.name}`}
                                width="200px"
                                height="200px"
                              />
                            </div>
                            <div className='col-md-9'>
                              <div className='d-flex justify-content-between'>
                                <div className='details'>
                                  <h4 className='fw-bold text-capitalize'>Name:<span className='fw-light ps-2'>{p.name}</span></h4>
                                  <h4 className='fw-bold text-capitalize'>Description</h4>
                                  <p className='fs-6'><span className='text-capitalize'>{p.description.substring(0, 1)}</span>{p.description.substring(0, 30)}</p>
                                  <h4 className='fw-bold text-capitalize'>Price:<span className='fw-light ps-2'>${p.price}</span></h4>
                                </div>
                                <div>
                                <button className='btn btn-danger d-flex p-2' onClick={() => removeCartItem(p._id)}><ImCross /></button>
                                </div>
                              </div>
                            </div>
                            <hr  className='mt-4 position-relative ' style={{top:20}} />
                           </div>
                        ))  ) : (
                          <p>Loading...</p> // Display a loading message while fetching the product data
                        )
                    }
                  </div>
                </div>
                <div className='col-md-4'>
                   <div className='card p-3 shadow-sm'>
                     <div className='cartSummery'>
                        <h2 className='fw-bold '>Cart Summery</h2>
                        <p>Total | Checkout | Payment</p>
                        <hr />
                        <h4 className='fw-bold '>Total:<span className='fw-light ps-2'>{totalPrice()}</span></h4>
                        <hr />
                     </div>
                     <div className='newaddress'>
                      {
                        auth?.user?.address ? (
                          <>
                             <h4 className='fw-bold'>Current Address:</h4>
                             <h5 className='text-capitalize'>{auth?.user?.address}</h5>
                             <button className='btn btn-outline-warning mt-4' onClick={() => navigate(`/dashboard/user/profile`)}>
                              Uddate Address
                             </button>
                          </>
                        ) : (
                          <div className='mb-3'>
                            {
                               auth?.token ? (
                                <button className='btn btn-outline-warning'  onClick={() => navigate(`/dashboard/user/profile`)}>Update Address</button>
                               ) : (
                                <button className='btn btn-outline-warning'  onClick={() => navigate(`/login`, {state:`/cart`})}>Please Login checkout </button>
                                )
                            }
                          </div>
                        )
                      }
                     </div>
                   </div>
                   <div className='card shadow-sm mt-2'>
                    {
                      !clientToken || !cart?.length ? (""):(
                        <>
                            <DropIn
                        options={{ 
                          authorization:clientToken,
                          paypal:{
                            flow:'vault'
                          }
                        }}
                        onInstance={(instance) => {setInstance(instance)}}

                          />
                        <button  className='btn btn-primary' onClick={() => handlePayment()} disabled={ loading || !instance || !auth?.user?.address}>
                          {loading ? "Processing...." : "Make payment"}
                        </button>
                        </>
                      )
                    }
                   </div>
                </div>
             </div>
        </div>
    </Layout>
  )
}

export default CartPage