import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecentBlogCard from "./RecentBlogCard";
const RecentBlogs = () => {
    // const loadedBlogs = useLoaderData();
    const [blogs, setBlogs] = useState();
    // console.log(loadedBlogs);

    useEffect(() => {
        fetch('http://localhost:5000/allblogs')
          .then((res) => res.json())
          .then((data) => setBlogs(data));
      console.log(blogs);
    } );


    // const {isPending, isError, error, data: users} = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch('https://localhost:5000/user');
    //         return res.json()
    //     }
    // })

  
    return (
      <div className="m-20">
        <h1 className="mt-10 text-5xl font-bold text-center mb-14 max-w-max mx-auto p-3 rounded-lg text-gray-600">All Blogs</h1>
        <div className="max-w-7xl mx-auto">
  
          
  

  
  
          {/*all blog cards*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 md:p-0 gap-y-6 mb-20 justify-items-center">
            {blogs?.map(singleBlog => (
              <RecentBlogCard
                key={singleBlog._id}
                singleBlog={singleBlog}
                blogs={blogs}
              >
                </RecentBlogCard>
            ))}
            
            </div>
      </div>
    </div>
  );
};

export default RecentBlogs;