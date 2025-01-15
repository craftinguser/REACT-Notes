import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Footer } from "./components/Footer";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import AboutPage from "./components/pages/About";
import ContactPage from "./components/pages/Contact";
import Error from "./components/pages/Error";
import { RestaurantMenu } from "./components/pages/RestarauntMenu";


const AppLayout = () =>{
  console.log("Virtual Dom", <Body/>)
  return (
    <div className = "app">
<Header />
<Outlet/>
<Footer />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {path:"/", element: <AppLayout/>,
  children:[
    {path:"/", element:<Body/> , errorElement:<Error/> },
     {path:"about", element:<AboutPage/> , errorElement:<Error/> },
  {path:"contact", element:<ContactPage/> , errorElement:<Error/>  },
  {path:"/restaraunt/:resId", element:< RestaurantMenu/>  }
],
   errorElement:<Error/>},
 
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router ={appRouter} />);
