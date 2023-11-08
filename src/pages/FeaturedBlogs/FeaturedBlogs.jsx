import { useLoaderData } from "react-router-dom";

const FeaturedBlogs = () => {
    const loadedBlogs = useLoaderData();
    console.log(loadedBlogs);
    return (
        <div>
            
        </div>
    );
};

export default FeaturedBlogs;