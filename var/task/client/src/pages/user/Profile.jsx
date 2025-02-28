import React, { useEffect, useState } from 'react'
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from '../../context/Auth';

const Profile = () => {
// cintext
const[auth, setAuth] = useAuth();
// state
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

// get user data
useEffect(() => {
 const{name, email, phone, address} = auth.user;
 setName(name);
 setPhone(phone);
 setEmail(email);
 setAddress(address);
},[auth?.user])



// form function
// form submit function----->

const handleSubmitProfile = async (e) => {
   e.preventDefault();

   if(password === confirmPassword)
   { 
        try{
            const {data} = await axios.put(`${import.meta.env.VITE_APP_API }/api/v1/auth/profile` , 
            {name, email ,phone, address, password}
            );
            if(data?.error){
                toast.error(data?.error);
            } else {
                setAuth({...auth, user:data?.updatedUser});
                let ls = localStorage.getItem("auth");
                ls  = JSON.parse(ls);
                ls.user = data.updatedUser
                localStorage.setItem('auth', JSON.stringify(ls))
                toast.success('Profile Updated Successfully');
            }
        } catch(error){
             console.error(error);
             toast.error('Someting went wrong');
        }
   } else {
        toast.error('paswword  not match');
   }
 
}

  return (
    <>

        <div className='RegistrationForm-container fluid-container h-100 w-100  py-5'>
        <div className="card mb-3 shadow" >
                <h4 className='card-header bg-dark text-white py-3 shadow-sm text-center   fw-bold '>USER PROFILE</h4>
                <div className="row g-0 ">
                 
                    <div className="col-md-12">
                    <div className="card-body">
                       <form onSubmit={handleSubmitProfile}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label fw-bold">Name</label>
                                <input type="text" value={name} className="form-control " id="exampleInputName" onChange={(e) => setName(e.target.value)} aria-describedby="emailHelp" />
                    
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail" className="form-label fw-bold">Email</label>
                                <input  disabled type="email" value={email} className="form-control" id="exampleInputEmail"  onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                               
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPhone" className="form-label fw-bold">Phone</label>
                                <input type="text" value={phone} className="form-control" id="exampleInputPhone"  onChange={(e) => setPhone(e.target.value)} aria-describedby="emailHelp" />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputAddress" className="form-label fw-bold">Address</label>
                                <input type="text" value={address} className="form-control" id="exampleInputAddress"  onChange={(e) => setAddress(e.target.value)} aria-describedby="emailHelp" />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword" className="form-label fw-bold">Password</label>
                                <input type="password" value={password} className="form-control"  onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputCorfoirmPassword" className="form-label fw-bold">Conform Password</label>
                                <input type="password" value={confirmPassword} className="form-control"  onChange={(e) => setConfirmPassword(e.target.value)} id="exampleInputCorfoirmPassword" />
                            </div>
                
                            <button type="submit" className="btn btn-dark float-end mb-4 w-100">Update</button>
                        </form>

                    </div>
                    </div>
                </div>
            </div>

        </div>

    </>
  )
}

export default Profile