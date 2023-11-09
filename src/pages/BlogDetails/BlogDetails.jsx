import { Link, useLoaderData, useParams } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import CommentCard from "./CommentCard";
import { useQuery } from "@tanstack/react-query";


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




    // fetch all the comments for the specific blogs
    const { isPending, isError, error, data: comments } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await fetch(`https://blog-website-server-six.vercel.app/comments/${id}`);
            return res.json();
        },
        refetchInterval: 1000, // for refetching the data every 1 seconds
    });
    if (isPending) {
        return <span className=" loading loading-spinner text-primary"></span>
    }
    if (isError) {
        return <p>{error.message}</p>
    }


    // ---------i will use transtack query instead of useEffect
    // const [comments, setComments] = useState();

    // useEffect(() => {
    //     fetch(`https://blog-website-server-six.vercel.app/comments/${id}`)
    //         .then((res) => res.json())
    //         .then((data) => setComments(data));
    //     console.log(comments);
    // });


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

            <div className="max-w-7xl  mx-auto">
                <h1 className="text-4xl font-bold lg:text-5xl mb-8 text-center text-gray-600">Comment Section</h1>
                {ownersBlog ?
                    <><h1 className="text-center text-2xl mb-4  text-red-500">Can not comment on own blog</h1></>
                    :
                    <div className=" p-4">
                        <form onSubmit={handleAddComment} className=" mx-auto card-body bg-gray-300  rounded-3xl  mb-10">
                            <div className="md:flex gap-4 items-center">
                               <div className=" md:w-3/4">
                              
                                <div className="form-control ">
                                    <textarea
                                        name="comment"
                                        placeholder="comment"
                                        className="input input-bordered border-4 "
                                        required
                                    ></textarea>
                                </div>

                               </div>
                                <div className="form-control mt-6 w-1/2 mx-auto md:w-1/4 ">
                                    <input type="submit" className="btn md:mb-6 bg-green-500 border-none font-bold md:text-xl text-white" value="Add comment" />
                                </div>
                            </div>


                        </form >
                    </div>
                }
            </div>

            <div className="mb-6 p-4">
                <div className="max-w-7xl px-4 pt-4 pb-2 mx-auto bg-gray-300  rounded-3xl">
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
        </div>

    );
};

export default BlogDetails;