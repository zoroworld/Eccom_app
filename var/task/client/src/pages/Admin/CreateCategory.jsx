import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import CategoryForm from '../../components/Form/CategoryForm';
import {Modal} from 'antd';


const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const[name, setName] = useState("");
  const[visible, setVisible] = useState(false);
  const[selected, setSelected] = useState(null);
  const[updatedName, setUpdateName] = useState("");

  // handle form create category

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_APP_API }/api/v1/category/create-category`, {name})
      if(data?.success){
        toast.success(`${name} is created`)
        getAllcatgory();
        setName("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
       toast.error('Somrthing went wrong in input form');
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


  // update category
  
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.put(`${import.meta.env.VITE_APP_API }/api/v1/category/update-category/${selected._id}`, {name:updatedName})
       if(data.success){
        toast.success(data.message)
        setSelected(null); //input value empty
        setUpdateName(""); // nmae will empty
        setVisible(false); // when submit the popup modal close
        getAllcatgory();  //recall iniitial time get updated value
       } else {
        toast.error(data.message)
       }
    } catch (error) {
      toast.error("Somethings went wrong");
    }
  }

    // delete category
  
    const handleDelete = async (id) => {
      try {
        const {data} = await axios.delete(`${import.meta.env.VITE_APP_API }/api/v1/category/delete-category/${id}`);
         if(data.success){
          toast.success(`category is deleted`)
          getAllcatgory();  //recall iniitial time get updated value
         } else {
          toast.error(data.message)
         }
      } catch (error) {
        toast.error("Somethings went wrong");
      }
    }

  // Always refresh category

  useEffect(()=> {
    getAllcatgory();
 },[])

  return (
    <>
      
      <div className='content-title'>
       <h1>Manage Category</h1>
       <hr />
      </div>
      <div className='py-3'>
        <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName}/>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"><div className='fw-bold fs-5'>Name</div></th>
              <th scope="col"><div className='float-end fw-bold fs-5' style={{paddingRight:82}}>Action </div></th>
            </tr>
          </thead>
          <tbody>    
              {
                categories?.map(c => (
                  <tr key={c._id}>
                    <td><div className='text-capitalize py-2'>{c.name}</div></td>
                    <td>
                       <div className='float-end '>
                          <button className='btn btn-primary ms-2'onClick={(e) => 
                            {setVisible(true) ; 
                            setSelected(c);
                            setUpdateName(c.name)} }>Edit</button>
                          <button className='btn btn-danger mx-2' onClick={()=>{handleDelete(c._id)}}>Delete</button>
                       </div>
                    </td>
                  </tr>
                ))
              }
          </tbody>
        </table>
      </div>
      <Modal onCancel={() => setVisible(false)} footer={null} open={visible} className='modal-form-container' >
        <CategoryForm value={updatedName} setValue={setUpdateName} handleSubmit={handleUpdate}/>
      </Modal>
    </>
  )
}

export default CreateCategory