import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Layout = ({children , title , description , author , keywords}) => {
  return (
    <>
   <section style={{minHeight:`100%`,height:`100vh`,display:'flex',flexDirection:'column'}}>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <title>{title}</title>
         </Helmet>
        <header>
          <Header />
        </header>
        <main style={{flex:1}}>
             <ToastContainer />
             {children}
        </main>
        <footer style={{marginTop:0}}>
          <Footer />
        </footer>
     </section>
    </>
  )
}

// Useing of default meta helmet
Layout.defaultProps = {
   title:"Eccomerce Website paga",
   description:"Keep Shopping and get new things always.",
   keywords:"node , react",
   author:"manishpanda.tech"
}

export default Layout