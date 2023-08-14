import React, { useState } from 'react'
import Layout from '../../components/LayoutContainer/Layout'
import { Link, useLocation } from 'react-router-dom'
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';


export const Login = () => {


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [auth , setAuth] = useAuth();

// navigate 

const navigate = useNavigate();

// location

const location = useLocation();

// form function
// form submit function----->

const handleLoginSubmitForm = async (e) => {
    e.preventDefault();
  
         try{
             let res = await axios.post(`${process.env.REACT_APP_API}api/v1/auth/login` , 
             {email , password}
             );
             if(res && res.data.success){
                 setTimeout(() => {
                     toast.success(res.data.message);
                 }, 10);
                 setAuth({
                    ...auth,  // privious value as it is
                    user: res.data.user,
                    token: res.data.token
                 });
                  // but when refresh the data gone so we use local storage
                  localStorage.setItem("auth", JSON.stringify(res.data)) ;
                 navigate(location.state || '/');
             } else {
                 toast.error(res.data.message)
             }
         } catch(error){
              console.log(error);
              toast.error('Someting went wrong');
         }
  
 }

  return (
    <>
      <Layout title={"Eccomerce - Login"}>
         <div className='loginContainWrapper w-100 h-100 py-5'>
            <div className='container-fluid w-100 h-100 d-flex justify-content-center  align-items-center py-5'>
                <div className="card shadow" style={{width: 400}}>
                    <h4 className='card-header bg-info-subtle shadow-sm text-center text-dark  fw-bold '>Login Form</h4>
                    <div className="card-body">
                       <form onSubmit={handleLoginSubmitForm }>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-semibold text-body-secondary" >Username</label>
                                <input type="email" value={email} className="form-control border-secondary-subtle"  id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-semibold text-body-secondary" >Password</label>
                                <input type="password" value={password}  className="form-control border-secondary-subtle" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-dark float-end text-white w-100 ">Submit</button>
                        </form>
                    </div>
                    <div className='card-footer'>
                       <div className='linkContain d-flex align-items-center justify-content-between'>
                            <Link to="/forgot-password" className="card-link fw-light ">forgot Password ?</Link>
                            <Link to="/register" className="card-link fw-light ">Registration now </Link>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </Layout>
    </>
  )
}
