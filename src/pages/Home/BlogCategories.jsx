import { IoFastFoodOutline } from "react-icons/io5";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { GiLifeBar } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { motion } from "framer-motion"
import { useQuery } from "@tanstack/react-query";


const BlogCategories = () => {

    const { isPending, isError, error, data: blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('https://blog-website-server-six.vercel.app/allblogs');
            return res.json()
        }
    })
    if (isPending) {
        return <span className=" loading loading-spinner text-primary"></span>
    }
    if (isError) {
        return <p>{error.message}</p>
    }

    const foodBlogs = blogs.filter(blog => blog.category === 'food')
    const travelBlogs = blogs.filter(blog => blog.category === 'travel')
    const healthBlogs = blogs.filter(blog => blog.category === 'health')
    const lifestyleBlogs = blogs.filter(blog => blog.category === 'lifestyle')

    return (
        <div>
            <div className="max-w-7xl mx-auto px-8">

                <div className=" bg-gray-600 shadow-lg border mt-40 mb-40 rounded-3xl  text-gray-950">
                    <h1 className="mt-10 text-5xl font-bold text-center  max-w-max mx-auto p-2 rounded-lg text-white">Categories</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 md:p-0  gap-y-6 mb-20 mt-10 justify-items-center">
                        <motion.div whileHover={{ scale: 1.25 }}>
                            <div className="flex flex-col  items-center">
                                <span className=" text-[100px] text-purple-500"><IoFastFoodOutline></IoFastFoodOutline></span>
                                <h1 className="text-3xl text-purple-500 font-bold mt-1">FOOD</h1>
                                {
                                    foodBlogs.length > 1 ?
                                        <h1 className="text-xl bg-purple-500 font-medium p-2  rounded-2xl mt-2">{foodBlogs.length} Blogs</h1>
                                        :
                                        <h1 className="text-xl bg-purple-500 font-medium p-2  rounded-2xl mt-2">{foodBlogs.length} Blog</h1>
                                }
                            </div>
                        </motion.div>


                        <motion.div whileHover={{ scale: 1.25 }}>
                            <div className="flex flex-col  items-center">
                                <span className=" text-[100px] text-blue-200"><GiLifeBar></GiLifeBar></span>
                                <h1 className="text-3xl text-blue-200 mt-1">LIFESTYLE</h1>
                                {
                                    lifestyleBlogs.length > 1 ?
                                        <h1 className="text-xl bg-blue-200 font-medium p-2  rounded-2xl mt-2">{lifestyleBlogs.length} Blogs</h1>
                                        :
                                        <h1 className="text-xl bg-blue-200 font-medium p-2  rounded-2xl mt-2">{lifestyleBlogs.length} Blog</h1>
                                }

                            </div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.25 }}>
                            <div className="flex flex-col  items-center">
                                <span className=" text-[100px] text-orange-700"><BiSolidPlaneAlt></BiSolidPlaneAlt></span>
                                <h1 className="text-3xl text-orange-700 mt-1">TRAVEL</h1>
                                {
                                    travelBlogs.length > 1 ?
                                        <h1 className="text-xl bg-orange-700 font-medium p-2  rounded-2xl mt-2">{travelBlogs.length} Blogs</h1>
                                        :
                                        <h1 className="text-xl bg-orange-700 font-medium p-2  rounded-2xl mt-2">{travelBlogs.length} Blog</h1>
                                }
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.25 }}>
                            <div className="flex flex-col  items-center">
                                <span className=" text-[100px]  text-green-500"><MdOutlineHealthAndSafety></MdOutlineHealthAndSafety></span>
                                <h1 className="text-3xl text-green-500 mt-1">HEALTH</h1>
                                {
                                    healthBlogs.length > 1 ?
                                        <h1 className="text-xl bg-green-500 font-medium p-2  rounded-2xl mt-2">{healthBlogs.length} Blogs</h1>
                                        :
                                        <h1 className="text-xl bg-green-500 font-medium p-2  rounded-2xl mt-2">{healthBlogs.length} Blog</h1>
                                }
                            </div>
                        </motion.div>

                    </div>



                </div>
            </div>
        </div>
    );
};

export default BlogCategories;