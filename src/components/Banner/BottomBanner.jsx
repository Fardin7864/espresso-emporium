
import aroma from "../../assets/images/icons/1.png"
import quality from "../../assets/images/icons/2.png"
import grades from "../../assets/images/icons/3.png"
import roasting from "../../assets/images/icons/4.png"

const BottomBanner = () => {
    return (
        <div className=" border-2 border-red-500">
            <div className=" flex bg-[#ECEAE3] md:gap-4 justify-center items-center md:py-14 py-2 md:px-8 px-3 gap-2">
                <div className=" max-w-[301px]">
                    <img src={aroma} alt="" className=" w-6 h-6 md:w-14 md:h-14"/>
                    <h4 className=" font-rancho text-lg md:text-3xl text-[#331A15]">Awesome Aroma</h4>
                    <p className=" text-[#1B1A1A] font-raleway text-xs md:text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className=" max-w-[301px]">
                <img src={quality} alt="" className=" w-6 h-6 md:w-14 md:h-14"/>
                    <h4 className=" font-rancho text-lg md:text-3xl text-[#331A15]">High Quality</h4>
                    <p className=" text-[#1B1A1A] font-raleway text-xs md:text-sm">We served the coffee to you maintaining the best quality</p>
                </div>
                <div className=" max-w-[301px]">
                <img src={grades} alt="" className=" w-6 h-6 md:w-14 md:h-14"/>
                    <h4 className=" font-rancho text-lg md:text-3xl text-[#331A15]">Pure Grades</h4>
                    <p className=" text-[#1B1A1A] font-raleway text-xs md:text-sm">The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className=" max-w-[301px]">
                <img src={roasting} alt="" className=" w-6 h-6 md:w-14 md:h-14"/>
                    <h4 className=" font-rancho text-lg md:text-3xl text-[#331A15]">Proper Roasting</h4>
                    <p className=" text-[#1B1A1A] font-raleway text-xs md:text-sm">Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default BottomBanner;