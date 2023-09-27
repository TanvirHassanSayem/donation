import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donations/Donation";
import Statistics from "../pages/Statistics/Statistics";
import Details from "../pages/details/Details";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
const myCreatedRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
            loader: ()=>fetch('/donation.json')
        },
        {
            path:"/donation",
            element: <Donation></Donation>,
        },
        {
            path:"/statistics",
            element: <Statistics></Statistics>, 
            loader: ()=>fetch('/donation.json')
        },
        {
            path:"/:id",
            element: <Details></Details>,
            loader: ()=>fetch('/donation.json')
        },
        {
            path:"*",
            element: <ErrorPage/>,
            
        },
      ]
    },
  ]);
 
  export default myCreatedRouter;