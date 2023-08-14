import React from 'react'
import Layout from '../components/LayoutContainer/Layout'
import useCategory from '../hooks/useCategory'
import { Link } from 'react-router-dom';


const Category = () => {
    const categories = useCategory();
  return (
    <Layout title={'All Categories'}>
       <div className='container-fluid mt-5 px-4'>
         <div className='p-4'>
           <div className='catHeading'>
              <h1 className='fw-bold text-capitalize'>All categories</h1>
            </div>
            <div className='mt-4'>
              <div className='row'>
                
                    {
                      categories.map((c) => (
                        <div className='col-md-3'> 
                          <Link to={`/category/${c.slug}`} className="btn btn-outline-dark  w-100 py-4 fs-3 text-capitalize shadow-sm">{c.name}</Link>         
                        </div>
                      ))
                    }
      
              </div>
            </div>
         </div>
       </div>
    </Layout>

  )
}

export default Category