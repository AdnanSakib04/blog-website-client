import Swal from "sweetalert2";
import { BiDetail } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const WishListBlogCard = ({wishlistBlog, wishlistBlogs, setWishlistBlogs}) => {
    const { _id, productID, photo, email, shortDescription, category, title } = wishlistBlog;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {



                fetch(`http://localhost:5000/wishlist/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Removed!',
                                'Blog has been removed.',
                                'success'
                            )
                            const remainingBlogs = wishlistBlogs.filter(blog => blog._id !== _id);
                            setWishlistBlogs(remainingBlogs);
                        }
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
                <button onClick={() => handleDelete(_id)} className="btn font-bold text-black   bg-red-500 rounded-lg border-none"><RiDeleteBinLine></RiDeleteBinLine>Remove</button>
            </div>
        </div>
    </div>
    );
};
       {/* <div className="flex justify-around">
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle bg-red-600 font-medium text-white  border-none text-xl font-extrabold"><RiDeleteBinLine></RiDeleteBinLine></button>

                </div> */}
export default WishListBlogCard;