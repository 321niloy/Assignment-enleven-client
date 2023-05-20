import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './pages/Main.jsx';
import Home from './pages/home/Home.jsx';
import Blogs from './pages/blogs/Blogs.jsx';
import Error from './pages/error/Error.jsx';
import Login from './pages/login/Login.jsx';
import Signin from './pages/sign/Signin.jsx';
import Authprovider from './Provider/Authprovider.jsx';
import Alltoys from './pages/alltoys/Alltoys.jsx';
import Detailsall from './pages/viewalltoysDetails/Detailsall.jsx';
import AddProject from './pages/AddProject/AddProject.jsx';
import Mytoys from './pages/mytoys/Mytoys.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'blog',
        element:<Blogs></Blogs>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signin',
        element:<Signin></Signin>
      },
      {
        path:'alltoys',
        element:<Alltoys></Alltoys>,
        loader:() => fetch('http://localhost:3000/alltoys')
      },
      {
        path:'alltoys/:id',
        element:<Detailsall></Detailsall>,
        loader:({params}) => fetch(`http://localhost:3000/alltoys/${params.id}`)
      },
      {
        path:'addtoy',
        element:<AddProject  ></AddProject>,
      },
      {
        path:'mytoy',
        element:<Mytoys></Mytoys>,
        loader:() => fetch('http://localhost:3000/addtoys')
      }
    ]
  },
  {
    path:'*',
    element:<Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
   
  </React.StrictMode>,
)
