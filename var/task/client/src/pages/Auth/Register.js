import React, { useState } from 'react'
import Layout from '../../components/LayoutContainer/Layout'
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

export const Register = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
const [answer, setAnswer] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

// navigate 

const navigate = useNavigate();

// form function
// form submit function----->

const handleSubmitForm = async (e) => {
   e.preventDefault();

   if(password === confirmPassword)
   { 
        try{
            let res = await axios.post(`${process.env.REACT_APP_API}api/v1/auth/register` , 
            {name, email ,phone, address, answer, password}
            );
            if(res.data.success){
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
   } else {
        toast.error('paswword  not match');
   }
 
}

  return (
    <>
      <Layout title={"Eccomerce - Register"}>
        <div className='RegistrationForm-container fluid-container h-100 w-100 d-flex justify-content-center  align-items-center py-5'>
        <div className="card mb-3 shadow" style={{maxWidth: 1200}}>
                <h4 className='card-header bg-info-subtle shadow-sm text-center text-dark  fw-bold '>Registration Form</h4>
                <div className="row g-0 ">
                    <div className="col-md-7">
                    <img src="./images/register.png" className="img-fluid w-100 h-100" alt="..."  />
                    </div>
                    <div className="col-md-5">
                    <div className="card-body">
                       <form onSubmit={handleSubmitForm}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Name</label>
                                <input type="text" value={name} className="form-control" id="exampleInputName" onChange={(e) => setName(e.target.value)} aria-describedby="emailHelp" required/>
                    
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                                <input type="email" value={email} className="form-control" id="exampleInputEmail"  onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" required/>
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                                <input type="text" value={phone} className="form-control" id="exampleInputPhone"  onChange={(e) => setPhone(e.target.value)} aria-describedby="emailHelp" required/>
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                                <input type="text" value={address} className="form-control" id="exampleInputAddress"  onChange={(e) => setAddress(e.target.value)} aria-describedby="emailHelp" required/>
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputAddress" className="form-label">Security Question (Best Friend Name)</label>
                                <input type="text" value={answer} className="form-control" id="exampleInputAddress"  onChange={(e) => setAnswer(e.target.value)} aria-describedby="emailHelp" required/>
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                                <input type="password" value={password} className="form-control"  onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputCorfoirmPassword" className="form-label">Conform Password</label>
                                <input type="password" value={confirmPassword} className="form-control"  onChange={(e) => setConfirmPassword(e.target.value)} id="exampleInputCorfoirmPassword" required/>
                            </div>
                            {/* <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" className="btn btn-dark float-end mb-4 w-100">Submit</button>
                        </form>

                    </div>
                    </div>
                </div>
            </div>

        </div>
      </Layout>
    </>
  )
}
