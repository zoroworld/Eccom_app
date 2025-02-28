import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'


const AdminProducts = () => {
    const navigate = useNavigate();
    const[products, setProducts] = useState([]);
    

    // delete products
    const handleDelete = async (id) => {
        try {
          
            let answer = window.prompt('Are you sure want to delete this product ?');
            if(!answer) return ;
            await axios.delete(`${import.meta.env.VITE_APP_API }/api/v1/product/del-product/${id}`);
            setTimeout(() => {
                toast.success('product Seleted Succesfully');
                navigate('/dashboard/admin/products');
            }, 100);
        } catch (error) {
           console.error(error); 
           toast.error('Someting went wrong');
        }
    }

    // get all products
    const getAllProducts = async () => {
        try {
            const {data} =  await axios.get(`${import.meta.env.VITE_APP_API }/api/v1/product/get-product`);
            setProducts(data.products);
            
        } catch (error) {
            console.error(error);
            toast.error('Somehins went wrong')
        }
    }
  

    // lifecycle method
    useEffect(() => {
      getAllProducts();
    }, []);
    
  return (
    <>
     
        <div className='container-fluid'>
                <div className='content-title'>
                    <h1>All Products List </h1>
                    <hr />
                </div>
                <div className='product-container'>
                    <div className='row' >
                        {
                            products?.map(p => (
                                
                                    <div className='col-md-3 my-2' key={p._id}>
                                        
                                            <div className="card h-100" >
                                                <img src={`${import.meta.env.VITE_APP_API }/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={`about ${p.name}`}/>
                                                <div className="card-body d-flex flex-column justify-content-between">
                                                    <div className='mb-3'>
                                                        <h5 className="card-title fw-bold text-capitalize">{p.name}</h5>
                                                        <p className="card-text fw-light">{p.description}</p>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <Link  className="card-link btn btn-primary"  to={`/dashboard/admin/product/${p.slug}`} >Update</Link>
                                                        {/* <Link  className="card-link btn btn-danger"  to={`/dashboard/admin/product/${p.slug}`} >Delete</Link> */}
                                                        <button  className="card-link btn btn-danger" onClick={() => handleDelete(p._id)}>Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                            
                            ))
                        }
                    </div>
                </div>
        </div>
   
    </>
  )
}

export default AdminProducts