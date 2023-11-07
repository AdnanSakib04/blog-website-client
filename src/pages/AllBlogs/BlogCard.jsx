import { Link } from "react-router-dom";
import { BiDetail } from "react-icons/bi";
import { BsPen } from "react-icons/bs";

const BlogCard = ({ singleBlog }) => {
    const { photo, category, shortDescription, title, _id } = singleBlog;
    return (
        <div className="card w-96 bg-[#b2d8d8] shadow-xl">
            <figure><img className="h-[213px] w-full" src={photo} alt="" /></figure>
            <div className="card-body">
                <h2 className="text-[22px] font-bold text-gray-950">Name: {title}</h2>
                <h2 className="text-xl font-medium text-gray-950">Brand: {category}</h2>
                <h2 className="text-xl font-medium text-gray-950">Type: {shortDescription}</h2>

                <div className="flex justify-evenly mt-2 ">
                    <Link to={`/productdetails/${_id}`}><button className="btn bg-[#66b2b2] text-gray-950 font-bold rounded-lg  border-none"><BiDetail></BiDetail>Details</button></Link>
                    <Link to={`/updateproduct/${_id}`}><button className="btn font-bold text-gray-950   bg-[#66b2b2]  rounded-lg border-none"><BsPen></BsPen>Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;