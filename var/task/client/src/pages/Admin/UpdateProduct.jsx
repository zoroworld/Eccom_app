import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import {Select} from 'antd';
import { toast } from 'react-toastify';
import { BsArrowLeft } from 'react-icons/bs';

// option antd
const{Option} = Select

const UpdateProduct = () => {

  const navigate = useNavigate();
  const params = useParams();

  const [categories, setCategories] = useState([]);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");

  // get categor because it is id based  for get immage
  const [id,setId] = useState("");

  // get single product 
  const getSingleProduct = async () => {
    try {
       const {data} = await axios.get(`${import.meta.env.VITE_APP_API }/api/v1/product/get-product/${params.slug}`);
       setName(data.product.name);
       setId(data.product._id)
       setPhoto(data.product.photo);
       setDescription(data.product.description);
       setQuantity(data.product.quantity);
       setShipping(data.product.shipping);
       setPrice(data.product.price);
       setCategory(data.product.category._id);
       setCategories(data.product.categories);
    } catch (error) {
       console.log(error);
    }
  }
  // get all categories

    const getAllcatgory = async () => {
      try {
        const {data} = await axios.get(`${import.meta.env.VITE_APP_API }/api/v1/category/get-category`);
        if(data?.success){
          setCategories(data?.category);
        }
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong get category');
      }
    };

    // create product function
    const handleUpdate = async (e) => {
       e.preventDefault()
       try {
             // If you dont want to use formData than wrap all input and select tag tags with in form  tag and add handle create function on form onSubmit event.
             const productData = new FormData();
             productData.append("name" ,  name);
             productData.append("description" ,  description);
             productData.append("price" ,  price);
             productData.append("category" ,  category);
             productData.append("quantity" ,  quantity);
             photo && productData.append("photo" ,  photo);
             productData.append("shipping" ,  shipping);

          const {data} = axios.put(`${import.meta.env.VITE_APP_API }/api/v1/product/update-product/${id}`, productData)
          if(data?.success){
            toast.error(data?.message)
          } else {
            setTimeout(() => {
              toast.success('Product Updated Successfully');
              navigate('/dashboard/admin/products');
            }, 100);
 
          }
       } catch (error) {
          console.log(error);
          toast.error(`Something went wrong`)
       }
    }
    useEffect(()=> {
      getSingleProduct();
      // eslint-disable-next-line
  },[])
      useEffect(()=> {
        getAllcatgory();
    },[])

  return (
    <>
       <div className='content-title'>
       <h1>Update Product</h1>
       <hr />
      </div>
      <div className='m-1'> 
        <div className='container-fluid p-0'>
          <div className='backbtn mb-3 w-20 d-flex justify-content-end '>
             <Link  to={`/dashboard/admin/products`} className="btn btn-outline-info d-inline-flex justify-content-center  align-items-center " ><BsArrowLeft /><span className='pe-2'>Back</span></Link>
          </div>
          <div className='row'>
            <div className='col-md-8'>
                <div className='card shadow-sm p-2'>
                  <div className='myselectnewcontroller'>
                    <Select  bordered={false} placeholder="Select a category" size='large' showSearch className='form-control mb-3 p-0 prdr-contain' onChange={(value)=>{setCategory(value)}} value={category}>
                      {
                        categories?.map(c => (
                          <Option key={c._id} value={c._id}>{c.name}</Option>
                        ))
                      }
                    </Select>
                  </div>
                  <div className='mb-3 name-work'>
                    <input type='text' 
                    value={name} 
                    placeholder='Enter a name' 
                    className='form-control form-change-bg' 
                    onChange={(e)=>setName(e.target.value)} 
                    ></input>
                  </div>
                  <div className='mb-3 name-work'>
                    <textarea type='text' 
                    value={description} 
                    rows="3"
                    placeholder='Enter a description' 
                    className='form-control form-change-bg' 
                    onChange={(e)=>setDescription(e.target.value)} 
                    ></textarea>
                  </div>
                  <div className='mb-3 name-work'>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="price-addon">$</span>
                      <input type="number" className="form-control form-change-bg"     value={price}  placeholder='Enter a price'  aria-label="price" aria-describedby="price-addon"  onChange={(e)=>setPrice(e.target.value)}  />
                    </div>
                  </div>
                  <div className='mb-3 name-work'>
                    <input type='number' 
                    value={quantity} 
                    placeholder='Enter a quantity' 
                    className='form-control form-change-bg' 
                    onChange={(e)=>setQuantity(e.target.value)} 
                    ></input>
                  </div>
                  <div className='myselectnewcontroller'>
                    <Select  bordered={false} placeholder="Select a shipping" size='large'  showSearch className='form-control mb-3 p-0 prdr-contain' 
                    onChange={(value)=>{setShipping(value)}} value={shipping ? "yes" : "No"}>
                       <Option value="1">Yes</Option>
                       <Option value="0">No</Option>
                    </Select>
                  </div>
                  <div className='mb-3'>
                    <button className='btn btn-primary' onClick={handleUpdate}>UPDATE PRODUCT</button>
                  </div>
                </div>
            </div>
            <div className='col-md-4'>
              <div className='card shadow-sm p-2'>
                <div className='img-preview card-img-top' >
                  {
                  photo? photo && (
                    <div className='text-center mx-auto d-block bg-body-tertiary d-flex justify-content-center align-items-center' style={{height:200}}>
                      <img src={URL.createObjectURL(photo)} alt="Updated product"  className=' img-thumbnail' height={200} width={200}/>
                    </div>
                  ):  <div className='text-center mx-auto d-block bg-body-tertiary d-flex justify-content-center align-items-center' style={{height:200}}>
                        <img src={`${import.meta.env.VITE_APP_API }/api/v1/product/product-photo/${id}`} alt="Preview product"  className=' img-thumbnail' height={200} width={200}/>
                     </div>
                     }
                </div>
                <div className='mb-3 w-100 card-body'>
                  <label className='btn btn-outline-dark w-100'>
                    {photo ? photo.name: "Upload Photo"}
                    <input type='file' name='photo' accept='image/*'  onChange={(e) =>  setPhoto(e.target.files[0])} hidden/>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateProduct;