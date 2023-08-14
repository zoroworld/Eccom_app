import React from 'react'
import Layout from '../components/LayoutContainer/Layout'

const Contact = () => {
  return (
    <Layout  title={"Contact Us - More Query"} >
         <section className='contactSection my-5 p-4'>
         <div className='cntContain container'>
            <div className='cntContent'>
                <div className='cntHeading'>
                  <h1 className=' fw-bold'>Contact Us</h1>
                </div>
            </div>
            <div className='formControlContain mt-4'>
               <div className='container-fluid'>
                 <div className='row'>
                   <div className='col-md-6'>
                       <div className="cntimg h-100">
                          <img src="/images/smar2.png" className='h-100 w-100 object-fit-cover'  alt="about smart watch" />
                      </div>
                   </div>
                   <div className='col-md-6'>
                      <div className='formControllerContain'>
                        <form>
                          <div className="mb-3">
                            <label htmlFor="exampleInputname" className="form-label ">Your name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailName" />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label ">Your email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                          </div>
                          <div className="mb-3">
                             
                                <label htmlFor="floatingTextarea2" className="form-label ">comments</label>
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

export default Contact