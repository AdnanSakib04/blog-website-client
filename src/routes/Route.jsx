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
import UpdateBlog from "../pages/UpdateBlog/UpdateBlog";
import FeaturedBlogs from "../pages/FeaturedBlogs/FeaturedBlogs";



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
        loader: () => fetch('https://blog-website-server-six.vercel.app/allblogs')
      },
      {
        path: "/wishlist",
        element: <PrivateRoute><WishList></WishList></PrivateRoute>,
        loader: () => fetch('https://blog-website-server-six.vercel.app/wishlist')
        
      },

      {
        path: "/blogDetails/:id",
        element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
        loader: () => fetch(`https://blog-website-server-six.vercel.app/allblogs`)
      },

      {
        path: "/updateBlog/:id",
        element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
        loader: ({params}) => fetch(`https://blog-website-server-six.vercel.app/allblogs/${params.id}`)

      },
      {
        path: "/featuredblogs",
        element: <FeaturedBlogs></FeaturedBlogs>,
        // loader: () => fetch('https://blog-website-server-six.vercel.app/featuredBlogs')
        // instead of loader, i used transtack query
      },
  

    ],
  },
]);

export default router;