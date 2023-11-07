import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddBlog from "../pages/AddBlog/AddBlog";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import WishList from "../pages/WishList/WishList";



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
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/allblogs",
        element: <AllBlogs></AllBlogs>,
        loader: () => fetch('http://localhost:5000/allblogs')
      },
      {
        path: "/wishlist",
        element: <WishList></WishList>,
        loader: () => fetch('http://localhost:5000/wishlist')
        
      },

    ],
  },
]);

export default router;