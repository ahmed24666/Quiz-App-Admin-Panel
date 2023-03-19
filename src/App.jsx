import React, { useState } from "react";
import { Login } from "./pages/login/Login";
import "./app.css"
import {createBrowserRouter,RouterProvider, Outlet, useNavigate} from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Quiz from "./pages/Quiz/Quiz";
import Home from "./pages/Home/Home";
import Loader from "./component/Loader/Loader";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    localStorage.setItem('login',JSON.stringify(['']))
}, [])
    var data=['']
    const [post, setPost] = useState('')
    const Layout=()=>{
   
      return( 
          <div className="Layout" style={{backgroundColor:"#EDEDED",minHeight:'100vh',overflow:'hidden'}}>
           <Navbar />
           <Outlet />
          </div> 
      )
    }
    // --------
  
    const router = createBrowserRouter([
      // inserting constants 
      {
        path:"/",
        element:(
            <Layout />
        ),
        // pages where constants will appear in
        children:[
          {
            path:"/",
            element:<Home ifloged={data}/>,
          },
          {
            path:"/quiz",
            element:<Quiz/>,
          },
          {
            path:"/loader",
            element:<Loader/>,
          },
      ]
      },
      // ---------
      {
        path: "/login",
        element: <Login ifloged={data} setPost={setPost} post={post}/>,
      },
    ]);
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );
}

export default App;
