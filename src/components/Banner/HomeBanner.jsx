import banner from "../../assets/images/more/3.png"

const HomeBanner = () => {
    return (
        <div>
            <div>
                <img src={banner} alt="" />
            </div>
            <div className=" z-50 absolute top-[100px] md:top-[200px] lg:top-[300px] md:left-[290px] lg:left-[500px] left-48 flex flex-col w-1/2 md:w-3/5 lg:px-10">
                <h2 className=" md:text-3xl lg:text-5xl font-normal font-rancho text-white">Would you like a Cup of Delicious Coffee?</h2>
                <p className=" hidden md:block mt-4 mb-8 text-sm lg:text-lg font-raleway text-white">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className=" bg-[#E3B577] mt-3 md:mt-0 font-rancho p-2 lg:p-3 rounded-sm text-black w-[70px] lg:w-[130px] text-xs lg:text-xl">Learn More</button>
            </div>
        </div>
    );
};

export default HomeBanner;