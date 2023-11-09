import { useEffect, useState } from "react";
import RecentBlogCard from "./RecentBlogCard";
import { useQuery } from "@tanstack/react-query";
const RecentBlogs = () => {


  // ------instead of using useEffect i will use transtack query-------
  // const [blogs, setBlogs] = useState();

  // useEffect(() => {
  //     fetch('https://blog-website-server-six.vercel.app/recentBlogs')
  //       .then((res) => res.json())
  //       .then((data) => setBlogs(data));
  //   console.log(blogs);
  // } );



  const { isPending, isError, error, data: blogs } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const res = await fetch('https://blog-website-server-six.vercel.app/recentBlogs');
      return res.json()
    }
  })
  if (isPending) {
    return <span className=" loading loading-spinner text-primary"></span>
  }
  if (isError) {
    return <p>{error.message}</p>
  }


  return (
    <div className="m-20">
      <h1 className="mt-10 text-5xl font-bold text-center mb-14 max-w-max mx-auto p-3 rounded-lg text-gray-600">Recent Blogs</h1>
      <div className="max-w-7xl mx-auto">






        {/*all blog cards*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 md:p-0 gap-y-6 mb-20 justify-items-center">
          {blogs?.slice(0, 6).map(singleBlog => (
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