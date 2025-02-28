import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/Auth';
import moment from 'moment';
import { Select } from 'antd';

const {Option} = Select;

const AdminOrder = () => {
    
    const [status, setStatus] = useState(["Not Process", "Processing", "Shipped", "deliverd", "cancel"]);
    const [changeStatus, setChangeStatus] = useState("");
    const [orders, setOrders] = useState([]);
    const [auth, setAuth] = useAuth();
  
    const getOrders = async () => {
      try {
        const {data} = await axios.get(`${import.meta.env.VITE_APP_API }/api/v1/auth/all-orders`);
        setOrders(data);
         } catch (error) {
           console.log(error);
         }
      }

      const handleChange = async (orderId, value) => {
           try {
            const {data} = await axios.put(`${import.meta.env.VITE_APP_API }/api/v1/auth/order-status/${orderId}`, 
            {
                status:value,
            });
            getOrders()
           } catch (error) {
             console.log(error);
           }
      }

    useEffect(() => {
     if(auth?.token) { getOrders(); }
    }, [auth?.token]);

  return (
    <>
    <h1>All Order</h1>
    <div className='OrderCardContain position-relative'>
       <div className='card-container'>
            <div className='card'>
              <div className='container-fluid'>
                  <div className='row '>
                    <div className='col-md-1 fw-bold fs-4'>#</div>
                    <div className='col-md-2 fw-bold fs-4'>Status</div>
                    <div className='col-md-2 fw-bold fs-4'>Buyer</div>
                    <div className='col-md-2 fw-bold fs-4'>Orders</div>
                    <div className='col-md-2 fw-bold fs-4'>Payment</div>
                    <div className='col-md-2 fw-bold fs-4'>Quantity</div>
                    <div className='col-md-1 fw-bold fs-4'>show</div>
                  </div>
              </div>
           
        {
          orders?.map((o,i) => {
            return (
              <div key={i}>
                  <div className='card-container card-d-head-none'>
                    <div className='card'>
                      <div className='container-fluid'>
                          <div className='row '>
                            <div className='col-md-1 fw-bold fs-4'>#</div>
                            <div className='col-md-2 fw-bold fs-4'>Status</div>
                            <div className='col-md-2 fw-bold fs-4'>Buyer</div>
                            <div className='col-md-2 fw-bold fs-4'>Orders</div>
                            <div className='col-md-2 fw-bold fs-4'>Payment</div>
                            <div className='col-md-2 fw-bold fs-4'>Quantity</div>
                            <div className='col-md-1 fw-bold fs-4'>show</div>
                          </div>
                      </div>
                    </div>
                  </div>
   
                  <div class="accordion" id="accordionExample">
                          <div class="accordion-item">
                                <div className='container-fluid accordion-header'>
                                    <div className='row justify-content-center align-items-center'>
                                      <div className='col-md-1 fs-5'>{i + 1}</div>
                                      <div className='col-md-2 fs-5'>
                                       <Select 
                                       bordered={false} 
                                       className='SelectAdminOption' 
                                       onChange={(value) => handleChange(o._id, value)} 
                                       defaultValue={o?.status}>
                                           {
                                             status.map((s,i) => (
                                                <Option key={i} value={s}>{s}</Option>
                                             ))
                                           }
                                       </Select>
                                      </div>
                                      <div className='col-md-2 fs-5'>{o?.buyer.name}</div>
                                      <div className='col-md-2 fs-5'>{moment(o?.createAt).fromNow()}</div>
                                      <div className='col-md-2 fs-5'>{o?.payment.success ? <p className='m-0 text-success'>Success</p> : <p className='m-0 text-danger'>Failed</p> }</div>
                                      <div className='col-md-2 fs-5'>{o?.products?.length}</div>
                                      <div className='col-md-1'> <button class="accordion-button collapsed" style={{width:'fit-content'}} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i + 1}`} aria-expanded="false" aria-controls={`collapse${i + 1}`}>
                                 
                                </button> </div>
                                    </div>
                                </div>
                              </div>
                        
                              <div id={`collapse${i + 1}`}class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    {
                                      o? (
                                        o?.products?.map((p,i) => (
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
                  </div>

              </div>
            )
          })
        }
         </div>
          </div>
    </div>
    </>
  )
}

export default AdminOrder