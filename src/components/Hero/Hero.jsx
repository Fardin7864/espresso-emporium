import {TbMug} from 'react-icons/tb'
import cup from '../../assets/images/more/4.png'
import house from '../../assets/images/more/5.png'
import { Link } from 'react-router-dom';
import Coffee from '../Coffee/Coffee';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

const Hero = () => {
    const [coffees, setCoffees] = useState();

    useEffect(() => { 
        fetch('https://espreso-server-himwxfl6x-fardin7864s-projects.vercel.app/coffee')
        .then(res => res.json())
        .then(data => setCoffees(data))
     },[])

     const handleDelete = (id) => { 
        Swal.fire({
            title: 'Delete Item',
            text: 'Are you sure you want to delete this item?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://espreso-server-himwxfl6x-fardin7864s-projects.vercel.app/coffee/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setCoffees(coffees?.filter(coffee => coffee._id !== id))
                    }
                })
              // Perform the delete action here, e.g., an API request or local state update
              // Once deleted, you can show another SweetAlert2 notification for success
              Swal.fire('Deleted!', 'The item has been deleted.', 'success');
            }
          });
     }



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
                <Link to='/addcoffee' className="btn flex gap-2 items-center justify-center bg-[#E3B577] text-white border border-[#331A15] font-rancho font-normal text-lg ">Add Coffee <TbMug className=' text-black'></TbMug></Link>
            </div>
            <div className=' flex justify-center items-center'>
            <div className=' grid grid-cols-1 lg:grid-cols-2 mx-auto gap-8 space-x-10'>
                {
                    coffees?.map(coffee => <Coffee 
                        key={coffee._id}
                        coffee={coffee}
                        handleDelete={handleDelete}
                        ></Coffee>)
                }
                </div>
            </div>
            
        </div>
    );
};

export default Hero;