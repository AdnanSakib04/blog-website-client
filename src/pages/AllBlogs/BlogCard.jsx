import { Link } from "react-router-dom";
import { BiDetail } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const BlogCard = ({ singleBlog }) => {
    const { photo, category, shortDescription, title, _id } = singleBlog;
    console.log(_id);

    const { user} = useContext(AuthContext);


    const handleAddToWishlist = () => {

        const wishlistBlog = {
            productID: _id,
            email: user.email,
            photo: photo,
            shortDescription: shortDescription,
            category: category,
            title: title
        }

        console.log(wishlistBlog);

        fetch('https://blog-website-server-3gitcue2i-navids-projects-b76e6fb9.vercel.app/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishlistBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Blog Added to Wishlist Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }
    return (
        <div className="card w-96 bg-gray-400 shadow-xl">
            <figure><img className="h-[213px] w-full" src={photo} alt="" /></figure>
            <div className="card-body">
                <h2 className="text-[22px] font-bold text-black"> {title}</h2>
                <h2 className="text-xl font-medium text-black">Category: {category}</h2>
                <h2 className=" text-justify"> {shortDescription}</h2>

                <div className="flex justify-evenly mt-2 ">
                    <Link to={`/blogDetails/${_id}`}><button className="btn bg-blue-300 text-black font-bold rounded-lg  border-none"><BiDetail></BiDetail>Details</button></Link>
                    <button onClick={handleAddToWishlist} className="btn font-bold text-black   bg-orange-300  rounded-lg border-none"><BsBookmarks></BsBookmarks>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;