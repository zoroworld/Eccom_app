import axios from "axios";
import { useState, useEffect } from "react";

export default function useCategory() {
    
    const [categories, setCategories] = useState([]);

    // get categories
    const getCategories = async () => {
        try {
            const {data} = await axios.get(`${import.meta.env.VITE_APP_API }/api/v1/category/get-category`);
            setCategories(data?.category) //from the response in controller get category
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      getCategories();
    }, [])
    
    return categories;
}