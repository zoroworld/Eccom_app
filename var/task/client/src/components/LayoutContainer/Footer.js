import React from 'react'
import { FaFacebookF , FaTwitter , FaInstagram} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <>
       <div className='footerWrapper bg-darkLed'>
          <div className="container myfootercontainer">
            <footer className="pb-0 pt-5">
              <div className="row">
              <div className="col-7 mylogotxt col-md-2 mb-3">
                  <div className='footer-logo'>
                     <img className="shadow p-2" src="/logo512.png" alt="keep shopping and be happy" height={100} width={100}/>
                  </div>
                  <div className='footer-summery pe-5'>
                     <p className='mb-0 text-white fw-light'>Welcome to our service we hope you get best.</p>
                  </div>
                </div>
                <div className="col-7 linktxt col-md-2 mb-3">
                  <h5 className='text-white  footer-headline'>Usefull Links</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><NavLink to="/" className="nav-link p-0 text-white fw-light">Home</NavLink></li>
                    <li className="nav-item mb-2"><NavLink to="/about" className="nav-link p-0 text-white fw-light">About</NavLink></li>
                    <li className="nav-item mb-2"><NavLink to="/policy" className="nav-link p-0 text-white fw-light">Policy</NavLink></li>
                    <li className="nav-item mb-2"><NavLink to="/contact" className="nav-link p-0 text-white fw-light">Contact</NavLink></li>
                  </ul>
                </div>

                <div className="col-7 linktxt  col-md-2 mb-3">
                  <h5 className='text-white  footer-headline'>Product list</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><NavLink to="/category" className="nav-link p-0 text-white fw-light" >Category</NavLink></li>
                    <li className="nav-item mb-2"><NavLink to="/" className="nav-link p-0 text-white fw-light">Features</NavLink></li>
                    <li className="nav-item mb-2"><NavLink to="/" className="nav-link p-0 text-white fw-light">Pricing</NavLink></li>
                    <li className="nav-item mb-2"><NavLink to="/faq" className="nav-link p-0 text-white fw-light">FAQs</NavLink></li>
                  </ul>
                </div>

                <div className="col-7 linktxt  col-md-2 mb-3">
                  <h5 className='text-white  footer-headline'>Contact Us</h5>
                  <ul className="nav flex-column lightUrlad">
                    <li className="nav-item mb-2"><span className='text-white font-weight-bold'>Phone:</span><Link to="tel:9185678912" className="nav-link p-0 text-white fw-light">9185678912</Link></li>
                    <li className="nav-item mb-2"><span className='text-white font-weight-bold'>Email:</span><Link to="mailto:someone@example.com" className="nav-link p-0 text-white fw-light">someone@example.com</Link></li>
                  </ul>
                </div>

                <div className="col-md-3 linktxt offset-md-1 mb-3">
                  <form>
                    <h5 className='footer-socialheadline text-white '>Subscribe to our newsletter</h5>
                    <p className='text-white fw-light'>Monthly digest of what's new and exciting from us.</p>
                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                      <label htmlFor="newsletter1" className="visually-hidden text-white fw-light">Email address</label>
                      <input id="newsletter1" type="text" className="form-control text-white fw-light" placeholder="Email address" />
                      <button className="btn btn-primary text-white fw-light" type="button">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="d-flex flex-column flex-sm-row justify-content-between py-4 border-top copyrightcontain">
                <p className='text-white mb-0 copyrighttxled'>© 2022 Company, Inc. All rights reserved.</p>
                <div className='footer-social-icons'>
                   <ul className="nav flex-row g-2 social-media-contain">
                      <li className="nav-item "><Link to="/" className="footer-socialicon nav-link p-0 text-white"><FaFacebookF /></Link></li>
                      <li className="nav-item "><Link to="/" className="footer-socialicon  nav-link p-0 text-white"><FaTwitter /></Link></li>
                      <li className="nav-item "><Link to="/" className="footer-socialicon  nav-link p-0 text-white"><FaInstagram /></Link></li>
                    </ul>
                </div>
              </div>
            </footer>
          </div>
        </div>
    </>
  )
}

export default Footer