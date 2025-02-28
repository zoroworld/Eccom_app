import React from 'react'
import { useAuth } from '../../context/Auth';

const AdminDetails = () => {
    const [auth] = useAuth();

  return (
  
    <>
       <div>
          <div className='card px-2 shadow-sm border-0'>
                  <div className='content-title'>
                    <h1>Admin Details</h1>
                    <hr />
                  </div>
                    <div className='admin-lay-container '>
                      <div className='admin-lay-contain '>
                        <div className='row'>
                          <div className='col-md-12'>
                            <div className="card">
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                  <h5 className="card-title fw-bold fs-4">Name</h5>
                                  <p className="card-text">{auth?.user?.name}</p>
                                </li>
                                <li className="list-group-item">
                                  <h5 className="card-title fw-bold fs-4">Email</h5>
                                  <p className="card-text">{auth?.user?.email}</p>
                                </li>
                                <li className="list-group-item">
                                  <h5 className="card-title fw-bold fs-4">Phone</h5>
                                  <p className="card-text">{auth?.user?.phone}</p>
                                </li>
                              </ul>

                            </div>

                          </div>
                        </div>
                      </div>
                  </div>
            
          </div>
       </div>
    </>
  )
}

export default AdminDetails