# We can use 

### We make component as tag in app.js and take app.js as a childeren because the app.js main part always change.

- App.js
    <Layout>
            <h1 className='text-danger'>Eccomerce App</h1>
    </Layout>
- Layout.js
    
        import React from 'react'
        import Header from "./Header";
        import Footer from "./Footer";

        const Layout = (props) => {
        return (
            <>
            <header>
            <Header />
            </header>
            <main>
            {/* <h1>Layout</h1> */}
            {props.children}
            </main>
            <footer>
            <Footer />
            </footer>
            </>
        )
        }

        export default Layout

- destructuring the layout.js
  

        const Layout = ({children}) => {
        return (
            <>
            <header>
            <Header />
            </header>
            <main>
            {children}
            </main>
            <footer>
            <Footer />
            </footer>
            </>
        )
        }

        export default Layout

## Install router
npm install react-router-dom 

## App.js

        import './App.css';
        import Layout from './components/LayoutContainer/Layout';

        function App() {
        return (
            <>
            {/* --------Making a component tag  and h1 is children to get children we need pass props and props.childern in Layout------- */}

            <Layout>
                <h1 className='text-danger'>Eccomerce App</h1>
            </Layout>
            </>
        );
        }

        export default App;
### react-icons

- npm install react-icons --save

## SEO work meta tag
- npm install react-helmet-async 
  //best way without error
### page will refresh on onsubmit form we nee prevent
## Using of react axios
## Using of npm i react-toastify to get the notification
### set .env the REACT_APP_API always write REACT_APP_(ANY NAME)
### to start both backend and frontend use ---( npm i concurrently )---
### cors package install to not see the error message of cross origin
### npm run dev to start

#### In outer 

- side server can you say outside

    "scripts": {
        "server": "node server.js",
        "start": "nodemon server.js",
        "client": "npm start --prefix ./client",
        "dev": "concurrently \"npm run server\" \"npm run client\""
    },
- client side test
    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }

### server side login in controller seee "Invalid password" to "invalid username and password" for client for security purpose


        export const loginController = async (req , res) => {
        try {
            const{email , password} = req.body
            //   validation
            if(!email || !password)
            {
                return res.status(404).send({
                    success:false,
                    message:"Invalid email and password"
                })
            }
            //check user
            const user = await userModel.findOne({email})
            if(!user){
                return res.status(404).send({
                    success:false,
                    message:'Email is not register'
                })
            }
            const match = await comparePassword(password, user.password);
            if(!match){
                return res.status(200).send({
                    success:false,
                    message:'Invalid password'
                })
            }
            //   token
            const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET , {
                expiresIn:'7d'
            });
            res.status(200).send({
                success:true,
                message:"login successfully",
                user:{
                    name:user.name,
                    email:user.email,
                    phone:user.phone,
                    address:user.address
                },
                token,
            });
        } catch(error) {
            console.log(error);
            res.status(500).send({
                success:false,
                message:"Error In Login",
                error
            })
        }
        };
### there global state management using of contextAPI or redux but we use contextApi useAuth
 - One state to pass multiple component first use of props but wrte now used contextapi and redux
 - give that in root file
### set custom hook 
 - In login page when redirect that help the to get data in home page

    {
        "user": null,
        "token": ""
    }
- The when refresh the data gone so we need local memory

        localStorage.setItem("auth", JSON.stringify(res.data)) ;

     - these code help you to make the code store but when refresh the data gone so we need to useEffect in useAuth

            useEffect(() => {
                const data = localStorage.getItem('auth');
                if(data){
                    const parseData = JSON.parse(data);
                    setAuth({
                        ...auth,
                        user:parseData.user,
                        token:parseData.token
                    });
                }
            }, [auth])

- to change the register and login we need auth header.js
- error of maximum depth so use comment //eslint-disable-next-line only to not see the error 

## Create Protect Route

- In this how to protect dasboard
- client create a new function protected route we have to create one api for that
- We compare with backend token then display page
- Go to backend server write code inroue
- go to client make folder route in components and private.js

- in privte.js  route remove
             const res = await axios.get('/api/v1/auth/user-auth', 
              {
                headers:{
                    "Authorization": auth?.token
                }
              }
              )
- after remove the private the put in auth.js

            // default axios auth.js
        axios.defaults.headers.common['Authorization'] = auth?.token;

- Instead of dasboard it goes to Home page
  -We can access the location history
    - its benefits
       1. In card product save / or it will direct check out link and the he after login it go to home page which is wrong... So we need to prevent
    - give location in sppiner and in login.js (in login page you have give condition)
        
   
## Starting of forgot password work 
   
   - We have to work on backend and frontend both
   - OTP based is paid (But you have to try)
   - In SERVER We add secret key in modal ---> userModels.js
   - make forgor password route in authRoute
   - make forgot password controller -->authController
   - make ui 
   - In authController you have to set answer in ---> register also

## Roll base Autentication :--means  Where in header we see the cureen user name
  - and also make page for dasboard (and then redirect )

## Work on admin route protected route we have to made 
  - make admin folder --> admindasboard.jd
  - make the authroute.js
  - like private.js route make adminprivate.js
# Note
 - When we need something dyanamix we need model and controller
 - and in modal we make schema
## using of slugify

   use on whitespace in  '-' beset for seo

## to make the category in backend make
   - models
   - controller
   - routes
   - then make routes inserver
## In controler we make function async
## CastError: Cast to ObjectId failed for value "kids" (type string) at path "_id" for model "category" :
## please give http://localhost:8080/api/v1/category/update-category/64b6d1b2a11176126b41a469
## where 64b6d1b2a11176126b41a469 ---> id name
## model folder spelling write in scehma for controller work... 

## photo we cannot get string 
## npm install express-formidable
    const {name ,slug, description, price,  category, quantity, shipping} = req.fields
    const {photo} = req.files
## How we get photo files
    const products = await productModel.find({}).select("-photo");
## dont need photo in initial state (-photo) or any other 
## we can create diffrent api for photo merge them beacuse we don't need the get size more.
## using of ant design to get modal in client

## product filter in backend more efficien or we can do filter in frontend

## In post pass the value

## we cannot store many product in one at a time because it will load in api so use pagination or load more

## server side best for pagination

## in node js if category is in product and you have call category the make a codition or it will not load 
    
    products {
        category:
    }


- use like these

      {
            product._id ? (
              <div className='row'>
                <div className='col-md-4'>
                  <div className='singleProdimageContainer'>
                    <img
                      src={`${process.env.REACT_APP_API}api/v1/product/product-photo/${product._id}`}
                      className='card-img-top img-fluid '
                      alt={`about ${product.name}`}
                    />
                  </div>
                </div>
                <div className='col-md-8'>
                  <div className='singleproductdetails'>
                    <div className='card pb-4'>
                      <div className='card-body'>
                        <h1 className='card-title mb-3'>Product details</h1>
                        <hr />
                        <h5 className='text-capitalize mb-2'>
                          <span className='fw-bold pe-2'>Name:</span>
                          {product.name}
                        </h5>
                        <div className='price mb-2'>
                          <p className='text-capitalize fs-5'>
                            <span className='fw-bold pe-2'>Price:</span>
                            <span>$</span>
                            {product.price}
                          </p>
                        </div>
                        <div className='quantity'>
                          <p className='text-capitalize fs-5'>
                            <span className='fw-bold pe-2'>Quantity:</span>
                            {product.quantity}
                          </p>
                        </div>
                        {product.category && product.category.name ? ( // Check if product.category and product.category.name exist
                          <div className='category'>
                            <p className='fs-5'>
                              <span className='fw-bold pe-2'>Category:</span>
                              {product.category.name}
                            </p>
                          </div>
                        ) : (
                          <p>No category available</p>
                        )}
                        {/* Add the rest of the product details here */}
                      </div>
                      <div className='card-body'>
                        <button className='btn btn-secondary ms-1'>ADD TO CART</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading...</p> // Display a loading message while fetching the product data
            )
          }
## localstorage is mostly use for storage
## in modal we make the userModal 
## --> address as string to objects '{}' multiple line if you work in textarea then there is more format then they will not save directly in string. thas why we make objects.

## braintreepayments.com make payment gateway and support for paypal also
## to package braintree // braintree-web-drop-in -react 
## see orders        <p>{JSON.stringify(orders, null, 4)}</p>

# deploy work --> render cyclic
## using cyclic
## go server package.json change
## "dev": "concurrently \"npm run start\" \"npm run client\""
## nighther np server 
## go to cd client --> npm run build
## before build remove all console from server and client
## then go to server.js