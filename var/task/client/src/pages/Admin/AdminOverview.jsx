import React from 'react';


const AdminOverview = () => {
  return (
    <> 
    <div title='Overview'>
      <div className='card px-2 shadow-sm border-0 h-100'>
      <div className='content-title'>
        <h1>Overview</h1>
        <hr />
      </div>
        <div className='admin-lay-container '>
          <div className='admin-lay-contain '>
            <div className='row'>
              <div className='col-md-3'>
                  <div className="card bg-dark mb-3 shadow-sm p-2" >
                      <div className="card-body">
                          <h5 className="card-title text-white  fs-4">No of Product</h5>
                          <p className="card-text text-white fs-1 opacity-50">400</p>
                      </div>
                  </div>
              </div>
              <div className='col-md-3'>
                  <div className="card bg-dark mb-3 shadow-sm p-2">
                      <div className="card-body">
                          <h5 className="card-title text-white  fs-4">No of Cartegory</h5>
                          <p className="card-text text-white fs-1 opacity-50">600</p>
                      </div>
                  </div>
              </div>
              <div className='col-md-3'>
                  <div className="card bg-dark mb-3 shadow-sm p-2" >
                      <div className="card-body">
                      <h5 className="card-title text-white  fs-4">No of Users</h5>
                          <p className="card-text text-white fs-1 opacity-50">200</p>
                      </div>
                  </div>
              </div>
              <div className='col-md-3'>
                  <div className="card bg-dark mb-3 shadow-sm p-2" >
                      <div className="card-body">
                      <h5 className="card-title text-white  fs-4">Site Performance</h5>
                          <p className="card-text text-white fs-1 opacity-50">20%</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <div className='admin-lay-sale'>
            <div className='row'>
              <div className='col-md-6'>
                  <div className="card">
                    <h5 className="card-header bg-dark p-3 fs-4 text-white fw-bold">Daly Sales</h5>
                    <div className="card-body">
                        <h1>Charts Need</h1>
                    </div>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className="card">
                    <h5 className="card-header bg-dark p-3 fs-4 text-white fw-bold">Daly Sales</h5>
                    <div className="card-body">
                        <h1>Charts Need</h1>
                    </div>
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

export default AdminOverview