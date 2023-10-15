import {TbMug} from 'react-icons/tb'
import cup from '../../assets/images/more/4.png'
import house from '../../assets/images/more/5.png'

const Hero = () => {


    return (
        <div className=''>
            <div>
            <div className='absolute left-0 w-52 top-[600px] md:top-[900px] lg:top-[1100px]'>
                <img src={cup} alt="" className='w-full top-36'/>
            </div>
            <div className=' absolute w-52 top-[700px] md:top-[900px] lg:top-[1200px] right-0 lg:'>
                <img src={house} alt="" className='w-full'/>
            </div>
            </div>
            <div className=" z-30 mt-24 flex flex-col justify-center items-center gap-4">
                <h4 className=" text-[#331A15] font-rancho text-5xl text-center text-shadow-custom ">Out Popular Products</h4>
                <button className="btn flex gap-2 items-center justify-center bg-[#E3B577] text-white border border-[#331A15] font-rancho font-normal text-lg
                 ">Add Coffee <TbMug className=' text-black'></TbMug></button>
            </div>
            
        </div>
    );
};

export default Hero;