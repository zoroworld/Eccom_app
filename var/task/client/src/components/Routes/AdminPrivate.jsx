import { useEffect, useState } from "react";
import { useAuth } from "../../context/Auth";
import { Outlet } from "react-router-dom";
import  axios  from "axios";
import Spinner from "./Spinner";

export default function AdminPrivate  () {

     const[ok , setOk] = useState(false);
     const[auth] = useAuth();

     useEffect(() => {
        const authCheck = async() => {
            const res = await axios.get(`${process.env.REACT_APP_API}api/v1/auth/admin-auth`);
            // console.log(res);
            try{
                if(res.data.ok){
                  setOk(true)
                } else {
                  setOk(false)
                }
             } catch(error) {
                  console.log(error);
              }
            } ;
        if(auth?.token) authCheck();
        
     }, [auth?.token] );

     return ok ? <Outlet /> : <Spinner path = '' />;


}