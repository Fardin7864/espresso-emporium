
import { useContext } from 'react';
import bgphoto from '../../assets/images/more/11.png'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { AuthContext } from '../../provider/GlobalAuthProv';
import { Link } from 'react-router-dom';

const AddCoffee = () => {
    const{success} = useContext(AuthContext)
    const handleSubmit = (e) => { 
        e.preventDefault();
        const coffee = {
            name: e.target.name.value,
            chef: e.target.chef.value,
            supplier: e.target.supplier.value,
            tast: e.target.tast.value,
            category: e.target.category.value,
            details: e.target.details.value,
            photo: e.target.photo.value,
        }
        fetch('https://espreso-server-himwxfl6x-fardin7864s-projects.vercel.app/addcoffee',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                success(`Added ${coffee.name}`)
                e.target.reset();
            }
        })
     }
    return (
        <div className="bg-cover font-raleway bg-no-repeat bg-center" style={{ backgroundImage: `url(${bgphoto})` }}>
            <div>
                <Link to="/" className=' flex items-center justify-center gap-2 font-rancho p-3 '><AiOutlineArrowLeft></AiOutlineArrowLeft>Back To Home</Link>
            </div>
            <div className=' flex justify-center items-center'>
                <div className="bg-[#F4F3F0] py-16 rounded-md w-9/12 mb-32">
                    <div className=' px-28'>
                        <h4 className=" text-[#331A15] font-rancho text-3xl text-center text-shadow-custom ">Add New Coffee</h4>
                        <p className=" text-[#331A15] font-raleway text-sm text-center ">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                <form onSubmit={handleSubmit} className='w-full px-4 mt-5'>
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
                            <label htmlFor="tast">Tast</label>
                            <input 
                            type="text" 
                            name="tast" 
                            id="" 
                            placeholder='Enter coffee tast'
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

export default AddCoffee;