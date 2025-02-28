import {  createContext, useContext,  useState } from "react";



const SearchContext = createContext();



const Searchprovider = ({children}) => {
    const [search, setSearch] = useState({
         keyword:"",
         results:[],
    });


    return(
        <SearchContext.Provider value={[search, setSearch]}>
            {children}
        </SearchContext.Provider>
    );
}

// custom hook
const useSearch = () => useContext(SearchContext)

export {useSearch, Searchprovider};