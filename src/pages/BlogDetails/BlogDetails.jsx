import { Link, useLoaderData, useParams } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const BlogDetails = () => {
    const blogData = useLoaderData();
    //console.log(blogData);
    const { id } = useParams();
    //const idInt = parseInt(id);
    console.log("---",id);
    const blog = blogData.find(blog => blog._id === id);
    const { user } = useContext(AuthContext);
    let ownersBlog;

    if (user.email === blog.userEmail) {
        ownersBlog = 1;
    }
    else {
        ownersBlog = 0;
    }



    return (
        <div className="max-w-7xl p-4 mx-auto mb-40 mt-8 text-gray-950">
            <div className="   bg-gray-400 rounded-lg  p-3">
                <img className="w-full lg:h-[700px]" src={blog.photo} alt="" />
                <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-5 mb-5 ">{blog.title}</h2>
                <h2 className="text-base md:text-2xl font-bold text-center mb-3">Category: {blog.category}</h2>

                <p className=" text-xl text-justify mb-10 font-normal"><span className=" font-bold">Short Description:</span> {blog.shortDescription}</p>

                <p className=" text-xl text-justify mb-10  font-normal"><span className=" font-bold">Long Description: </span>{blog.longDescription}</p>
                {ownersBlog ?
                    <div className="flex justify-center">
                       <Link to={`/updateBlog/${id}`}> <button className="btn bg-green-500 border-none text-xl text-gray-950"> <BsFillPencilFill></BsFillPencilFill>Update</button></Link>
                    </div> : <></>
                }
            </div>
        </div>
    );
};

export default BlogDetails;