import AboutUs from "./AboutUs";
import Banner from "./Banner";
import BlogCategories from "./BlogCategories";
import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs/RecentBlogs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <BlogCategories></BlogCategories>
            <AboutUs></AboutUs>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;