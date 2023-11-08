import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiCustomerServiceFill } from "react-icons/ri";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { GiLifeBar } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const BlogCategories = () => {
    return (
        <div>

            <div className=" bg-gray-600 shadow-lg border mt-40 mb-40 rounded-3xl max-w-7xl mx-auto text-gray-950">
                <h1 className="mt-10 text-5xl font-bold text-center  max-w-max mx-auto p-2 rounded-lg text-white">Categories</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 md:p-0  gap-y-6 mb-20 mt-10 justify-items-center">
                    <div>
                        <div className="flex flex-col  items-center">
                            <span className=" text-[100px] text-purple-500"><IoFastFoodOutline></IoFastFoodOutline></span>
                            <h1 className="text-3xl text-purple-500 mt-1">FOOD</h1>
                        </div>
                    </div>
                    
                    
                    <div>
                        <div className="flex flex-col  items-center">
                            <span className=" text-[100px] text-blue-200"><GiLifeBar></GiLifeBar></span>
                            <h1 className="text-3xl text-blue-200 mt-1">LIFESTYLE</h1>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col  items-center">
                            <span className=" text-[100px] text-orange-700"><BiSolidPlaneAlt></BiSolidPlaneAlt></span>
                            <h1 className="text-3xl text-orange-700 mt-1">TRAVEL</h1>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col  items-center">
                            <span className=" text-[100px]  text-green-500"><MdOutlineHealthAndSafety></MdOutlineHealthAndSafety></span>
                            <h1 className="text-3xl text-green-500 mt-1">HEALTH</h1>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default BlogCategories;