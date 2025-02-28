import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Singleproduct from "./pages/Singleproduct";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import { HelmetProvider } from "react-helmet-async";
import { Register } from "./pages/Auth/Register";
import { Login } from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Search from "./pages/Search";
import Category from "./pages/Category";
import CategoryProductShow from "./pages/CategoryProductShow";
import CartPage from "./pages/CartPage";

// Dashboard panel
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import AdminPrivate from "./components/Routes/AdminPrivate";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import AdminDetails from "./pages/Admin/AdminDetails";
import UsersList from "./pages/Admin/UsersList";
import AdminOverview from "./pages/Admin/AdminOverview";
import UserOverview from "./pages/user/UserOverview";
import Profile from "./pages/user/Profile";
import Order from "./pages/user/Order";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import AdminProducts from "./pages/Admin/AdminProducts";
import AdminOrder from "./pages/Admin/AdminOrder";

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:slug" element={<CategoryProductShow />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:slug" element={<Singleproduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* User Dashboard Routes */}
      {/* User Dashboard Routes */}
        <Route path="/dashboard/user" element={<PrivateRoute />}>
          <Route element={<Dashboard />}>
            <Route index element={<UserOverview/>}/>
            <Route path="profile"  element={<Profile />} /> 
            <Route path="orders" element={<Order />} />
          </Route>
        </Route>


        {/* Admin Dashboard Routes */}
        <Route path="/dashboard/admin" element={<AdminPrivate />}>
          <Route element={<AdminDashboard />}>
            <Route index element={<AdminOverview />} />
            <Route path="create-category" element={<CreateCategory />} />
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="product/:slug" element={<UpdateProduct />} />
            <Route path="admin-products" element={<AdminProducts />} />
            <Route path="admin-details" element={<AdminDetails />} />
            <Route path="users" element={<UsersList />} />
            <Route path="orders" element={<AdminOrder />} />
          </Route>
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
