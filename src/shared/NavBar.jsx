import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { GiQuillInk } from "react-icons/gi";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    // console.log("---------",user?.displayName);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLinks = <>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold  text-gray-950 lg:text-gray-600 p-2 rounded-lg" : ""} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " font-bold  text-gray-950 lg:text-gray-600 p-2 rounded-lg" : ""} to="/addblog">Add Blog</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " font-bold  text-gray-950 lg:text-gray-600 p-2 rounded-lg" : ""} to="/allblogs">All Blogs</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " font-bold  text-gray-950 lg:text-gray-600 p-2 rounded-lg" : ""} to="/featuredblogs">Featured Blogs</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " font-bold  text-gray-950 lg:text-gray-600 p-2 rounded-lg" : ""} to="/wishlist">Wishlist</NavLink></li>

    </>
    return (
        <div className="">
            <div className="navbar  max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">Event Management</a> */}
                    <div className="flex items-center gap-2">
                        <div>

                            <GiQuillInk className=" text-4xl  text-gray-600">

                            </GiQuillInk>
                        </div>
                        <div className="text-center font-medium text-xl ">
                            <h1>Feather Blogs</h1>
                            {/* <h1>Blogs</h1> */}
                        </div>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4 px-1">
                        {navLinks}
                    </ul>

                </div>
                <div className="navbar-end">


                    {
                        user ?
                            <div className="flex items-center gap-3">
                                {/* <p className=" font-medium">{user?.displayName}</p> */}
                                <label className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 h-10 rounded-[40px] ">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <button onClick={handleSignOut} className="btn bg-gray-600 font-bold text-white">Log Out</button>
                            </div>
                            :
                            <>
                                <Link to="/register">
                                    <button className="btn bg-gray-600 text-white w-[90px]">Register</button>
                                </Link>
                                <Link to="/login">
                                    <button className="btn bg-gray-600 text-white w-[90px]">Login</button>
                                </Link>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;