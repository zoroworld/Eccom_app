import React from 'react'
import { RiBarChartHorizontalFill , RiDashboardFill } from 'react-icons/ri';
import { MdAdminPanelSettings } from 'react-icons/md';
import { AiOutlineForm} from 'react-icons/ai';
// import { FiUsers} from 'react-icons/fi';
import {MdLibraryAdd} from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom'


const UserMenu = (props) => {


  // const location = useLocation();

    const toggleOffcanvas = props.toggleOffcanvas;
    const showOffcanvas = props.showOffcanvas;

  return (
    <>
      <div className='dashboard-sidebar h-100'>
                <div className='dashboard-sidebar-contain position-relative h-100'>
                    <div>
                    <button style={{position:'absolute',right:-8, top:32, zIndex:1}}className="btn btn-dark sidebar-btn " onClick={toggleOffcanvas}>
                      <RiBarChartHorizontalFill  /> 
                    </button>
                    {/* ---For hole sidebar name start --- */}
                    <div style={{position:'absolute', zIndex:0, left:-18}} className={`sidebar-ofcn sidebar-ofcn-name d-flex py-4 flex-column flex-shrink-0  bg-body-tertiary offcanvas offcanvas-start ${showOffcanvas ? 'show' : ''}`} tabIndex="-1" data-bs-backdrop="false">
                      <div className="offcanvas-header py-2">
                        <div className="offcanvas-title">
                           <Link to="/dashboard/user" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                            <MdAdminPanelSettings  size={35} />
                            <span className="fs-4 px-2">User</span>
                          </Link >
                        </div>
                      </div>
                      <div className={`offcanvas-body ${showOffcanvas ? 'show' : ''}`}>
                          <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                              <NavLink  end style={styleworkDone}  to="/dashboard/user"   className={`nav-link link-body-emphasis d-flex align-items-center`} aria-current="page">
                                <RiDashboardFill size={20}  />
                                 <span className='px-2'>Dashboard</span>
                              </NavLink >
                            </li>
                            <li>
                              <NavLink   style={styleworkDone} to="profile"   className={`nav-link link-body-emphasis d-flex align-items-center `}>
                                <AiOutlineForm size={20}/>
                                <span className='px-2'>Profile</span>
                              </NavLink >
                            </li>
                            <li>
                            <NavLink style={styleworkDone} to="orders" className={`nav-link link-body-emphasis nav-link d-flex align-items-center `}>
                                <MdLibraryAdd size={20}/>
                                <span className='px-2'>Order</span>
                            </NavLink >
                            </li>
                          </ul>
                      </div>
                    </div>
                     {/* ---For hole sidebar name end--- */}
                    {/* ---For hole sidebar icons start--- */}
                    <div style={{position:'absolute', zIndex:0, left:-18}} className={` sidebar-ofcn  sidebar-ofcn-icons d-flex align-items-center py-4 flex-column flex-shrink-0  bg-body-tertiary  offcanvas offcanvas-start  ${showOffcanvas ? '' : 'show'}`} tabIndex="-1" data-bs-backdrop="false">
                      <div className="offcanvas-header p-2">
                        <div className="offcanvas-title">
                          <Link  to="/dashboard/user" className=" mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                            <MdAdminPanelSettings  size={40} />
                           </Link >
                        </div>
                      </div>
                      <div className={`offcanvas-body p-2 ${showOffcanvas ? '' : 'show'}`}>
                      <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                              <NavLink end style={styleworkDone} to="/dashboard/user" className="nav-link link-body-emphasis " aria-current="page">
                                <RiDashboardFill size={25}  />
                               
                              </NavLink >
                            </li>
                            <li>
                              <NavLink style={styleworkDone}  to="profile" className="nav-link link-body-emphasis  ">
                                <AiOutlineForm size={25}/>
                             
                              </NavLink >
                            </li>
                            <li>
                            <NavLink style={styleworkDone}  to="orders" className="nav-link link-body-emphasis">
                                <MdLibraryAdd size={25}/>
                              
                            </NavLink >
                            </li>
    
                          </ul>
                      </div>
                    </div>
                     {/* ---For hole sidebar icons end--- */}
                    </div>
                </div>
      </div>
    </>
  )
}

export default UserMenu

const styleworkDone = {
    with:'fit-content',
  }