import React, { useState } from 'react'
import Layout from '../../components/LayoutContainer/Layout'
import { Outlet} from 'react-router-dom';
import UserMenu from '../../components/LayoutContainer/UserMenu';


const Dashboard = () => {
   const [showOffcanvas, setShowOffcanvas] = useState(true);

   const toggleOffcanvas = () => {
     setShowOffcanvas(!showOffcanvas);
   };
  return (
   <>
      <Layout title={"Dashboard - Ecommerce App"}>
      <div className='container-fluid h-100'>
         <div className='row h-100'>
           <div className={`${showOffcanvas ? 'col-md-2' : 'col-md-1'}`}>
              <UserMenu toggleOffcanvas={toggleOffcanvas} showOffcanvas={showOffcanvas}/>
           </div>
           <div  className={`${showOffcanvas ? 'col-md-10' : 'col-md-11'}`}>
             <div className='dashboard-content w-100 h-100'>
                <div className='dashboard-content-container py-4 h-100'>
                   <Outlet />
                </div>
              </div>
           </div>
         </div>
      </div>
      </Layout>
   </>
  )
}

export default Dashboard;