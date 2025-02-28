import React from 'react'
import Layout from '../components/LayoutContainer/Layout'

const About = () => {
  return (
    <Layout 
    title={"About us - Eccomerce"} 
    description={"Hello this is about ours eccommerce website work"}>
      <section className='AboutSection p-4 my-5'>
        <div>
          <div className='AboutContain'>
              <div className='AboutHeading'>
                <h1 className='fw-bold'><span className='bg-primary py-2 px-3 m-1 rounded-2'>About</span>Us</h1>
              </div>
          </div>
        </div>
        <div  className='mt-5'>
          <div className='Abtwork mt-5'>
              <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="abtimg">
                          <img src="/images/smar2.png" className='img-fluid'  alt="about smart watch" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='AbtDetails h-100'>
                            <div className="card border-0 h-100">
                              <div className="card-body">
                                <h5 className="card-title fw-bold fs-2 mb-3">Best Smartwatch Product</h5>
                                <p className="card-text fw-light fs-5  lh-base"><span className='text-danger fw-bold '>Smartwatch, </span>a small smartphonelike device worn on the wrist. Many smartwatches are connected to a smartphone that notifies the user of incoming calls, e-mail messages, and notifications from applications. Some smartwatches can even make telephone calls. Many smartwatches have colour displays, but some inexpensive models use a black-and-white “e-paper” display. The user can operate the smartwatch through a touch screen, physical buttons, or a combination of the two. Some smartwatches come with pedometers and heart-rate monitors to help users track their health.</p>
                                
                              </div>
                            </div>
                          </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div className='mt-5'>
          <div className='Abtwork mt-5'>
              <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='AbtDetails h-100'>
                            <div className="card border-0 h-100">
                              <div className="card-body">
                                <h5 className="card-title fw-bold fs-2 mb-3">Best Smartwatch Product</h5>
                                <p className="card-text fw-light fs-5  lh-base"><span className='text-danger fw-bold '>Smartwatch, </span>a small smartphonelike device worn on the wrist. Many smartwatches are connected to a smartphone that notifies the user of incoming calls, e-mail messages, and notifications from applications. Some smartwatches can even make telephone calls. Many smartwatches have colour displays, but some inexpensive models use a black-and-white “e-paper” display. The user can operate the smartwatch through a touch screen, physical buttons, or a combination of the two. Some smartwatches come with pedometers and heart-rate monitors to help users track their health.</p>
                                
                              </div>
                            </div>
                          </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="abtimg">
                          <img src="/images/smar1.png" className='img-fluid'  alt="about smart watch" />
                        </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div className='mt-5'>
          <div className='Abtwork mt-5'>
              <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="abtimg">
                          <img src="/images/smar2.png" className='img-fluid'  alt="about smart watch" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='AbtDetails h-100'>
                            <div className="card border-0 h-100">
                              <div className="card-body">
                                <h5 className="card-title fw-bold fs-2 mb-3">Best Smartwatch Product</h5>
                                <p className="card-text fw-light fs-5  lh-base"><span className='text-danger fw-bold '>Smartwatch, </span>a small smartphonelike device worn on the wrist. Many smartwatches are connected to a smartphone that notifies the user of incoming calls, e-mail messages, and notifications from applications. Some smartwatches can even make telephone calls. Many smartwatches have colour displays, but some inexpensive models use a black-and-white “e-paper” display. The user can operate the smartwatch through a touch screen, physical buttons, or a combination of the two. Some smartwatches come with pedometers and heart-rate monitors to help users track their health.</p>
                              </div>
                            </div>
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

export default About