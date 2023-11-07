import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    if (loading){
        return <div className="flex flex-col justify-center items-center mt-64">
            <h1 className=" text-4xl"><span className="loading loading-spinner loading-lg"></span></h1>
            <h1 className=" text-4xl">Loading...</h1>
        </div>
    }

    if (user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;