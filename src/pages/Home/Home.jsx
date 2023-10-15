import BottomBanner from "../../components/Banner/BottomBanner";
import HomeBanner from "../../components/Banner/HomeBanner";
import FollowUs from "../../components/FollowUs/FollowUs";
import Hero from "../../components/Hero/Hero";

const Home = () => {
    return (
        <>
        <HomeBanner></HomeBanner>
        <BottomBanner></BottomBanner>
        <Hero></Hero>
        <FollowUs></FollowUs>
        </>
    );
};

export default Home;