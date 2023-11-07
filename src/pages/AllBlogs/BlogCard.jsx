import { Link } from "react-router-dom";
import { BiDetail } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";

const BlogCard = ({ singleBlog }) => {
    const { photo, category, shortDescription, title, _id } = singleBlog;
    return (
        <div className="card w-96 bg-gray-400 shadow-xl">
            <figure><img className="h-[213px] w-full" src={photo} alt="" /></figure>
            <div className="card-body">
                <h2 className="text-[22px] font-bold text-black"> {title}</h2>
                <h2 className="text-xl font-medium text-black">Category: {category}</h2>
                <h2 className=" text-justify"> {shortDescription}</h2>

                <div className="flex justify-evenly mt-2 ">
                    <Link to={`/blogDetails/${_id}`}><button className="btn bg-blue-300 text-black font-bold rounded-lg  border-none"><BiDetail></BiDetail>Details</button></Link>
                    <Link to={`/wishlistBlog/${_id}`}><button className="btn font-bold text-black   bg-orange-300  rounded-lg border-none"><BsBookmarks></BsBookmarks>Wishlist</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;