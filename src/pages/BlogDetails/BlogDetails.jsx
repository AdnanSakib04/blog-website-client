import { Link, useLoaderData, useParams } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import CommentCard from "./CommentCard";


const BlogDetails = () => {
    const blogData = useLoaderData();
    //console.log(blogData);
    const { id } = useParams();
    //const idInt = parseInt(id);
    console.log("---", id);
    const blog = blogData.find(blog => blog._id === id);
    const { user } = useContext(AuthContext);
    
    let ownersBlog;

    if (user.email === blog.userEmail) {
        ownersBlog = 1;
    }
    else {
        ownersBlog = 0;
    }


    // -----------------comment section starts ----------------



    const [comments, setComments] = useState();
    //  const [specificPostComments, setSpecificPostComments] = useState();

    // fetch all the comments for all the blogs
    useEffect(() => {
        fetch(`https://blog-website-server-six.vercel.app/comments/${id}`)
            .then((res) => res.json())
            .then((data) => setComments(data));
        console.log(comments);
        //const filterComments = comments?.filter(comment => comment.blogId === id);
        //  setSpecificPostComments(filterComments);

    });


    const handleAddComment = event => {
        event.preventDefault();

        const form = event.target;

        const comment = form.comment.value;
        const blogId = id;

        // current user email and photoURL
        const userEmail = user.email;
        const userName = user.displayName;
        const userPhoto = user.photoURL;

        const newComment = { comment, blogId, userEmail, userPhoto, userName };

        console.log(newComment);

        fetch('https://blog-website-server-six.vercel.app/addComment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Comment Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }
    // -----------------comment section ends ----------------




    return (
        <div>
            <div className="max-w-7xl p-4 mx-auto mb-20 mt-8 text-gray-950">
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



            {/* ----------------comment section-------------------- */}

            <h1 className="text-4xl font-bold lg:text-5xl mb-8 text-center text-gray-600">Comment Section</h1>
            {ownersBlog ?
                <><h1 className="text-center text-2xl  text-red-500">Can not comment on own blog</h1></>
                :
                <div className=" p-4">
                    <form onSubmit={handleAddComment} className="md:w-1/2 mx-auto card-body  rounded-3xl border-2 border-gray-600 mb-10">
                        <h1 className="text-xl font-bold lg:text-2xl  text-center text-gray-600">Add Comment</h1>
                        <div className="form-control">

                            {/* <input type="text" name="comment" placeholder="comment" className="input input-bordered " required /> */}
                            <textarea
                                name="comment"
                                placeholder="comment"
                                className="input input-bordered"
                                required
                            ></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" className="btn bg-green-500 border-none font-bold text-xl text-white" value="Add comment" />
                        </div>


                    </form >
                </div>
            }

            <div className="max-w-7xl p-4 mx-auto">
                {comments?.map(singleComment => (
                    <CommentCard
                        key={singleComment._id}
                        singleComment={singleComment}
                        comments={comments}
                    >
                    </CommentCard>
                ))}


            </div>
        </div>

    );
};

export default BlogDetails;