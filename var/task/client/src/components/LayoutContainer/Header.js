import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'


import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import { toast } from 'react-toastify'
import Searchinput from '../Form/Searchinput'
import useCategory from '../../hooks/useCategory'
import { useCart } from '../../context/cart'






const Header = () => {

  const [cart] = useCart();
  const [auth , setAuth] = useAuth();

  const category = useCategory();
  
  const handleLogOut = () => {
    setAuth({
      ...auth,
      user:null,
      token:''
    });
    setTimeout(() => {
      toast.success("Logout Successfully");
    }, 10);
    localStorage.removeItem('auth');
  }

  return (
    <>
       <div className='headerWrapper bg-dark'>
         <div className="fluid-container px-3">
            <nav className="mynavbarcont navbar navbar-expand-lg  nav Navbar d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <Link  to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none d-flex align-items-center">
                  <img className="shadow p-2" src="/logo512.png" alt="keep shopping and be happy" height={60} width={60}/>
                  <h4 className='mb-0 font-weight-bold logotag'>eccomerce App</h4>
                </Link>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav col-12 col-lg-auto ms-auto mb-2  me-3  justify-content-center mb-md-0">
                        <li><NavLink to="/" className="nav-link px-2 text-white ">Home</NavLink></li>
                        {/* <li><NavLink  className="nav-link px-2 text-white">Category</NavLink></li> */}
                        <li className="dropdown">
                          <NavLink  to="/category" className="nav-link dropdown-toggle px-2 text-white"  data-bs-toggle="dropdown">
                            Category
                          </NavLink >
                          <ul className="dropdown-menu">
                             <li><Link  className="dropdown-item" to={`/category`}>All Categories</Link ></li>
                            {
                              category?.map(c =>(
                               <li key={c._id}><Link  className="dropdown-item" to={`/category/${c.slug}`}>{c.name}</Link ></li>
                            ))}
                          </ul>
                        </li>
                        <li><NavLink to="/products" className="nav-link px-2 text-white">Product</NavLink></li>
                        <li><NavLink to="/About" className="nav-link px-2 text-white">About</NavLink></li>
                        <li><NavLink to="/contact" className="nav-link px-2 text-white">Contact</NavLink></li>
                        
                    </ul>
                    <div className='formDiv'>
                      {/* search bar */}
                      <Searchinput />
                      <div className='logRegCart d-flex align-items-center'>
                        <div className="text-end mytextlogrecart">
                            {/*-------to see the value --------- */}

                            {/* <NavLink to="/login" className="btn btn-outline-light me-3 rounded-0">Login</NavLink>
                            <NavLink to="/register" className="btn btn-outline-light me-3 rounded-0">Register</NavLink> */}
                            
                            {
                              !auth.user ? (
                                <>
                                  <NavLink to="/login" className="btn btn-outline-light me-3 rounded-0">Login</NavLink>
                                  <NavLink to="/register" className="btn btn-outline-light me-3 rounded-0">Register</NavLink>
                                </>
                              ):(
                                <>
                                    
                                    <div className="dropdown logoutprofilework me-3">
                                  
                                      <span className="dropdown-toggle badge d-flex align-items-center p-1 pe-2  border border-outline-light rounded-pill" role="button"  data-bs-toggle="dropdown" aria-expanded="false">
                                        <img className="rounded-circle me-1" width={30} height={30} src="https://github.com/mdo.png" alt="profile" />
                                        <span className='profile-name text-white'>{auth?.user?.name}</span>
                                
                                      </span>
              
                                      <ul className="dropdown-menu">
                                        <li><NavLink className="dropdown-item fw-100" 
                                        to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}>Dashboard</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/act">Another action</NavLink></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><NavLink className="dropdown-item btn btn-outline-light me-3 rounded-0 d-flex align-items-center logOutsvg" to="/login" onClick={handleLogOut} >
                                          <FiLogOut /><span className='px-2'>Logout</span></NavLink>
                                        </li>
                                      </ul>
                                    </div>
                                </>
                              )
                            }
                        </div>
                        <div className='eccomerce-card pe-3'>
                          <Link to="/cart" className="text-white">
                              <button type="button" className="btn btn-outline-light  position-relative">
                                <FaShoppingBag />
                                <span className="position-absolute  translate-middle badge rounded-pill bg-danger">
                                  {
                                  cart?.length > 99 ?  (99+"+") : cart?.length 
                                  }
                                  <span className="visually-hidden">unread messages</span>
                                </span>
                              </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                </div>
           </nav>

         </div>
        </div>
    </>
  )
}

export default Header