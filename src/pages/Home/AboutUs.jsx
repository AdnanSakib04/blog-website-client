import { IoFastFoodOutline } from "react-icons/io5";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { GiLifeBar } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiQuillInk } from "react-icons/gi";

const AboutUs = () => {
    return (
        <div>

            <div className=" bg-gray-600 shadow-lg border mt-40 mb-40 rounded-3xl max-w-7xl px-8 mx-auto text-gray-950 p-2">
                <h1 className="mt-10 text-5xl font-bold text-center  max-w-max mx-auto p-2 rounded-lg text-white">About <br /> Feather Blogs</h1>
                <h1 className=" text-white text-center text-5xl font-bold max-w-max mx-auto"><GiQuillInk></GiQuillInk></h1>

                <div className=" mb-4">
                    <p className=" text-white w-3/4 mx-auto text-center text-xl my-3">Welcome to Feather Blogs, where words take flight and stories unfold. We are more than just a blog website; we are a collective of voices, each feathered with unique perspectives and narratives.</p>
                </div>

               <div className=" text-black  italic">
               <div className="bg-gray-300  border-2   mx-auto rounded-lg mt-4 mb-4  ">
                    <p className="  p-2 mx-auto text-justify text-xl my-3"><span className=" font-bold">Our Mission:</span> Feather Blogs is on a mission to inspire, inform, and uplift. Through the lens of four vibrant categories—Food, Lifestyle, Health, and Travel—we weave a tapestry of diverse content tailored to ignite your curiosity and enrich your daily life.</p>
                </div>

                <div className="bg-gray-300  border-2   mx-auto rounded-lg mt-4 mb-4  ">
                    <p className="  p-2 mx-auto text-justify text-xl my-3"><span className=" font-bold">What Sets Us Apart: </span>
                        At Feather Blogs, we believe that every story is a feather in the cap of shared experiences. We curate content that transcends boundaries, resonates with authenticity, and sparks connections.</p>
                </div>
                <div className="bg-gray-300  border-2   mx-auto rounded-lg mt-4 mb-4  ">
                    <p className="  p-2 mx-auto text-justify text-xl my-3"><span className=" font-bold">Explore, Engage, Evolve: </span>
                        Whether you are here for the latest food trends, lifestyle hacks, health insights, or travel escapades, Feather Blogs invites you to explore, engage with our community, and evolve along with us. Join our flock of readers and contributors, as we navigate the vast skies of inspiration and knowledge.</p>
                </div>
                <div className="bg-gray-300  border-2   mx-auto rounded-lg mt-4 mb-8  ">
                    <p className="  p-2 mx-auto text-justify text-xl my-3"><span className="font-bold">Connect With Us: </span>
                        Feather Blogs is more than a website; it is a conversation. Connect with us on social media, share your thoughts, and let your voice be heard. Together, let us soar to new heights, one feather at a time.</p>
                </div>
               </div>


            </div>
        </div>
    );
};

export default AboutUs;