import React, { useState } from 'react'
import Layout from '../../components/LayoutContainer/Layout'
import { Link } from 'react-router-dom'
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';


const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  
  // navigate 
  
  const navigate = useNavigate();
  
  // location
  

  
  // form function
  // form submit function----->
  
  const handleForgotSubmitForm = async (e) => {
      e.preventDefault();
    
           try{
               let res = await axios.post(`${import.meta.env.VITE_APP_API }/api/v1/auth/forget-password` , 
               {email , newPassword , answer}
               );
               if(res && res.data.success){
                   setTimeout(() => {
                       toast.success(res.data.message);
                   }, 10);
      
                   navigate('/login');
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
      <Layout title={"forget Password - Eccomerce App"}>
         <div className='forgetContainWrapper w-100 h-100 py-5'>
            <div className='container-fluid w-100 h-100 d-flex justify-content-center  align-items-center py-5'>
                <div className="card shadow" style={{width: 400}}>
                    <h4 className='card-header bg-info-subtle shadow-sm text-center text-dark  fw-bold '>Reset Password</h4>
                    <div className="card-body">
                       <form onSubmit={handleForgotSubmitForm}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmailset" className="form-label fw-semibold text-body-secondary" >Username</label>
                                <input type="email" value={email} className="form-control border-secondary-subtle"  id="exampleInputEmailset" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputSecretset" className="form-label fw-semibold text-body-secondary" >Security Answer</label>
                                <input type="text" value={answer} className="form-control border-secondary-subtle"  id="exampleInputSecretset" aria-describedby="emailHelp" onChange={(e) => setAnswer(e.target.value)} />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPasswordset" className="form-label fw-semibold text-body-secondary" >Password</label>
                                <input type="password" value={newPassword}  className="form-control border-secondary-subtle" id="exampleInputPasswordset" onChange={(e) => setNewPassword(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-dark float-end text-white w-100 ">Reset</button>
                        </form>
                    </div>
                    <div className='card-footer'>
                       <div className='linkContain d-flex align-items-center justify-content-between'>
                            <Link to="/login" className="card-link fw-light ">Go to Login ?</Link>
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

export default ForgotPassword;