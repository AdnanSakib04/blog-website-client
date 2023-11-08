import AboutUs from "./AboutUs";
import Banner from "./Banner";
import BlogCategories from "./BlogCategories";
import NewsLetter from "./NewsLetter";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BlogCategories></BlogCategories>
            <AboutUs></AboutUs>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;