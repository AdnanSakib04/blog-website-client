import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddBlog from "../pages/AddBlog/AddBlog";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import WishList from "../pages/WishList/WishList";
import PrivateRoute from "./PrivateRoute";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import RecentBlogs from "../pages/Home/RecentBlogs/RecentBlogs";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addblog",
        element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>,
      },
      {
        path: "/allblogs",
        element: <AllBlogs></AllBlogs>,
        loader: () => fetch('http://localhost:5000/allblogs')
      },
      {
        path: "/wishlist",
        element: <PrivateRoute><WishList></WishList></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/wishlist')
        
      },

      {
        path: "/blogDetails/:id",
        element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
        loader: () => fetch(`http://localhost:5000/allblogs`)
      },
  

    ],
  },
]);

export default router;