import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const AllBlogs = () => {
   const loadedBlogs = useLoaderData();

  const [blogs, setBlogs] = useState(loadedBlogs);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    // filtering blogs on the selected category
    if (category === "all") {
      setBlogs(loadedBlogs);
    } else {
      const filteredBlogs = loadedBlogs.filter(blog => blog.category === category);
      setBlogs(filteredBlogs);
    }
  };

  const handleSearch = (e) => {
    const searchString = e.target.value;
    setSearch(searchString);

    // filtering blogs on the search title
    const filteredBlogs = loadedBlogs.filter(blog =>
      blog.title.toLowerCase().includes(searchString.toLowerCase())
    );
    setBlogs(filteredBlogs);
  };

  return (
    <div className="m-20">
      <h1 className="mt-10 text-5xl font-bold text-center mb-14 max-w-max mx-auto p-3 rounded-lg text-gray-600">All Blogs</h1>
      <div className="max-w-7xl mx-auto">

        {/* ---------------category dropdown start------------*/}
        <div className="flex justify-center gap-4">
          <h1 className="font-bold text-xl text-gray-600">Filter by Category</h1>
          <select
            
            className="border border-gray-600 rounded-lg p-2"
            value={selectedCategory}
            onChange={handleCategoryChange}>

            <option value="all">all</option>
            <option value="food">food</option>
            <option value="health">health</option>
            <option value="lifestyle">lifestyle</option>
            <option value="travel">travel</option>

          </select>
        </div>
        {/* ---------------category dropdown end------------*/}


        {/* ------------search input start--------------*/}
        <div className="flex justify-center gap-2 mt-3 mb-8">
          <label htmlFor="search" className="mr-2 font-bold text-xl text-gray-600">Search by Title</label>
          <input
            type="text"
            className="border border-gray-600 rounded-lg p-2"
            value={search}
            onChange={handleSearch}
            placeholder="Enter blog title"/>
        </div>
        {/* ------------search input start--------------*/}


        {/*all blog cards*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 md:p-0 gap-y-6 mb-20 justify-items-center">
          {blogs?.map(singleBlog => (
            <BlogCard
              key={singleBlog._id}
              singleBlog={singleBlog}
              blogs={blogs}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
