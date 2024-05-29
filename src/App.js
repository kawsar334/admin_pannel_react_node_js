
import './styles/global.scss';
import Home from './pages/home/Home.tsx';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from './pages/login/Login.tsx';
import Register from './pages/register/Register.jsx';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu.tsx';
import Product from './pages/products/Product';
import { useEffect, useState } from 'react';
import Users from './pages/users/Users';
import UserDetails from './pages/userDetails/UserDetails';
import ProductDetails from './pages/productDetails/ProductDetails';
import EditUser from './pages/edituser/EditUser';
import EditProduct from './pages/editProduct/EditProduct';
import CreateProduct from './pages/createProduct/CreateProduct';
import Notification from './pages/Notification/Notification';
import Message from './message/Message';
import Cat from './pages/cat/Cat';
// import TestDetails from './components/test/TestDetails';



function App() {

  const [open, setOpen] = useState(true);
  const token = localStorage.getItem("user");
  
 
  const ProtectedRoute = ({ children })=>{
    if(token){
      return children
    }else{
      return <Navigate to="/login"/>
    }
  }


  const Layout = () => {
    return (
      <div className='main'>
        {token && <Navbar open={open} setOpen={setOpen} />}
        <div className='contentcontainer'>
          {open && <div className='menucontainer'>
            {token && <Menu open={open} setOpen={setOpen} />}
          </div>}
          <div class="container">
            {token ? <Outlet /> : <Login />}
          </div>
        </div>
        {token && <Footer />}
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: token && <Layout />,
      children: [
        {
          path: "/",
          element: <ProtectedRoute><Home /></ProtectedRoute> 
        },

        {
          path: "/products",
          element: <ProtectedRoute><Product /></ProtectedRoute>
        },
        {
          path: "/users",
          element: <ProtectedRoute><Users /></ProtectedRoute>
        },
        {
          path: "/user/:id",
          element: <ProtectedRoute><UserDetails /></ProtectedRoute>
        },
        {
          path: "/product/:id",
          element: <ProtectedRoute><ProductDetails /></ProtectedRoute>
        },
        {
          path: "/user/edit/:id",
          element: <ProtectedRoute><EditUser /></ProtectedRoute>
        },
        {
          path: "/product/edit/:id",
          element: <ProtectedRoute><EditProduct /></ProtectedRoute>
        },

        {
          path: "/addproduct",
          element: <ProtectedRoute><CreateProduct /></ProtectedRoute>
        },
        {
          path: "/notification",
          element: <ProtectedRoute><Notification /></ProtectedRoute>
        },
        {
          path: "/message",
          element: <ProtectedRoute><Message /></ProtectedRoute>
        },
        {
          path: "/cat",
          element: <ProtectedRoute><Cat /></ProtectedRoute>
        },

      ]
    },
    {
      path: "/login",
      element:  <Login /> },
    {
      path: "/register",
      element: <Register />
    },



  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
