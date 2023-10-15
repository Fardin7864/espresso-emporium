import cup1 from '../../assets/images/cups/Rectangle 9.png'
import cup2 from '../../assets/images/cups/Rectangle 10.png'
import cup3 from '../../assets/images/cups/Rectangle 11.png'
import cup4 from '../../assets/images/cups/Rectangle 12.png'
import cup5 from '../../assets/images/cups/Rectangle 13.png'
import cup6 from '../../assets/images/cups/Rectangle 14.png'
import cup7 from '../../assets/images/cups/Rectangle 15.png'
import cup8 from '../../assets/images/cups/Rectangle 16.png'


const FollowUs = () => {
    return (
        <div className=' flex flex-col items-center'>
            <div className=" z-30 mt-24 flex flex-col justify-center items-center gap-4">
                <h4 className=" text-[#331A15] font-raleway text-lg text-center text-shadow-custom ">Follow Us Now</h4>
                <h4 className=" text-[#331A15] font-rancho text-5xl text-center text-shadow-custom ">Follow On Instagram</h4>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
                <img src={cup1}  alt="" className=" w-[312px] h-[350px]"/>
                <img src={cup2}  alt="" className=" w-[312px] h-[350px]"/>
                <img src={cup3}  alt="" className=" w-[312px] h-[350px]"/>
                <img src={cup4}  alt="" className=" w-[312px] h-[350px]"/>
                <img src={cup5}  alt="" className=" w-[312px] h-[350px]"/>
                <img src={cup6}  alt="" className=" w-[312px] h-[350px]"/>
                <img src={cup7}  alt="" className=" w-[312px] h-[350px]"/>
                <img src={cup8}  alt="" className=" w-[312px] h-[350px]"/>
            </div>
        </div>
    );
};

export default FollowUs;