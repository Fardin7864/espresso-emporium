import { AiOutlineArrowLeft } from "react-icons/ai";
import bgphoto from '../../assets/images/more/11.png'


const UpdateCoffee = () => {
    return (
        <div className="bg-cover font-raleway bg-no-repeat bg-center" style={{ backgroundImage: `url(${bgphoto})` }}>
            <div>
                <button className=' flex items-center justify-center gap-2 font-rancho p-3 '><AiOutlineArrowLeft></AiOutlineArrowLeft>Back To Home</button>
            </div>
            <div className=' flex justify-center items-center'>
                <div className="bg-[#F4F3F0] py-16 rounded-md w-9/12 mb-32">
                    <div className=' px-28'>
                        <h4 className=" text-[#331A15] font-rancho text-3xl text-center text-shadow-custom ">Update Coffee</h4>
                        <p className=" text-[#331A15] font-raleway text-sm text-center ">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                <form className='w-full px-4 mt-5'>
                    <div className=' flex gap-4 justify-between w-full mb-4'>
                        <div className=' flex flex-col gap-1 text-[#1B1A1ACC] w-1/2'>
                            <label htmlFor="name">Name</label>
                            <input 
                            type="text" 
                            name="name" 
                            id="" 
                            placeholder='Coffee Name'
                            className=' text-lg py-2 pl-2 rounded-lg'
                            />
                        </div>
                        <div className=' flex flex-col gap-1 text-[#1B1A1ACC] w-1/2'>
                            <label htmlFor="chef">Chef</label>
                            <input 
                            type="text" 
                            name="chef" 
                            id="" 
                            placeholder='Chef'
                            className=' text-lg py-2 pl-2 rounded-lg'
                            />
                        </div>
                    </div>
                    <div className=' flex gap-4 justify-between w-full mb-4'>
                        <div className=' flex flex-col gap-1 text-[#1B1A1ACC] w-1/2'>
                            <label htmlFor="name">Supplier</label>
                            <input 
                            type="text" 
                            name="supplier" 
                            id="" 
                            placeholder='Enter Coffee supplier'
                            className=' text-lg py-2 pl-2 rounded-lg'
                            />
                        </div>
                        <div className=' flex flex-col gap-1 text-[#1B1A1ACC] w-1/2'>
                            <label htmlFor="taste">Taste</label>
                            <input 
                            type="text" 
                            name="taste" 
                            id="" 
                            placeholder='Enter coffee taste'
                            className=' text-lg py-2 pl-2 rounded-lg'
                            />
                        </div>
                    </div>
                    <div className=' flex gap-4 justify-between w-full mb-4'>
                        <div className=' flex flex-col gap-1 text-[#1B1A1ACC] w-1/2'>
                            <label htmlFor="category">Category</label>
                            <input 
                            type="text" 
                            name="category" 
                            id="" 
                            placeholder='Enter Coffee category'
                            className=' text-lg py-2 pl-2 rounded-lg'
                            />
                        </div>
                        <div className=' flex flex-col gap-1 text-[#1B1A1ACC] w-1/2'>
                            <label htmlFor="details">Details</label>
                            <input 
                            type="text" 
                            name="details" 
                            id="" 
                            placeholder='Enter coffee Details'
                            className=' text-lg py-2 pl-2 rounded-lg'
                            />
                        </div>
                    </div>
                    <div className=' flex gap-4 justify-between w-full mb-4'>
                        <div className=' flex flex-col gap-1 text-[#1B1A1ACC] w-full'>
                            <label htmlFor="name">Photo</label>
                            <input 
                            type="text" 
                            name="photo" 
                            id="" 
                            placeholder='Photo URL'
                            className=' text-lg py-2 pl-2 rounded-lg'
                            />
                        </div>
                    </div>
                    <div className=' flex gap-4 justify-between w-full mb-4'>
                        <div className=' flex flex-col gap-1 text-[#1B1A1ACC] w-full'>
                            <input 
                            type="submit" 
                            name="submit" 
                            id="" 
                            value="Add Coffee"
                            className=' border border-black text-lg py-2 pl-2 rounded-lg bg-[#D2B48C] font-rancho'
                            />
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;