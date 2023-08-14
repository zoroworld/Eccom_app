import React from 'react'
import { useSearch } from '../../context/search'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Searchinput = () => {

    const navigate = useNavigate();
    
    const[values, setValues] = useSearch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           const {data} = await axios.get(`${process.env.REACT_APP_API}api/v1/product/search/${values.keyword}`)
           setValues({...values, results: data});
           navigate('/search');
        } catch (error) {
            console.log(error);

        }
    }
  return (
    <>
       <form className="d-flex me-3" role="search" onSubmit={handleSubmit}>
            <input 
            className="form-control rounded-0" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            value={values.keyword}
            onChange={(e) => setValues({...values, keyword: e.target.value})}
            />
            <button className="btn btn-outline-light rounded-0" type="submit">Search</button>
        </form>
    </>
  )
}

export default Searchinput