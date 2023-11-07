import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";



const AllBlogs = () => {
    const loadedBlogs = useLoaderData();
    const [blogs, setBrands] = useState(loadedBlogs);
    return (
        <div className='m-20'>
        <h1 className="mt-10 text-5xl font-bold text-center mb-14  max-w-max mx-auto p-3 rounded-lg text-[#66b2b2] ">All Blogs</h1>
        <div className="max-w-7xl mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 md:p-0  gap-y-6 mb-20 justify-items-center'>
          {
            blogs.map(singleBlog => <BlogCard
                key={singleBlog._id}
                singleBlog={singleBlog}
                blogs={blogs}>
            </BlogCard>)
          }
        
        </div>
        </div>
       
      </div>
    );
};

export default AllBlogs;