import React, {  lazy , Suspense } from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";

import Header from "./component/Header"
import Body from "./component/Body"
import About from "./component/About"
import ContactUs from "./component/ContactUs"
import Error from "./component/Error"
import Footer from "./component/Footer"
import RestaurantMenu from "./component/RestaurantMenu"
//import Grocery from "./component/Grocery"

// const IMG_CDN_URL= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";


const Grocery = lazy(()=>import ("./component/Grocery"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    
    children :
      [
        {
          path: "/",
          element: <Body />
        },
         {
        path: "contact",
        element: <ContactUs />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading s...</h1>}><Grocery /></Suspense>
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
     ],
      errorElement: <Error />,
  },
 
]);

const head = ReactDOM.createRoot(document.getElementById("head"));
head.render(<RouterProvider router={appRouter} />);

// RestaurantList is JSON Data for displaying cards
