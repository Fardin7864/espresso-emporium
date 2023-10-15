import { Link } from "react-router-dom";
import navPhoto from "../../assets/images/more/15.jpg"
import logo from "../../assets/images/more/logo1.png"


const Navbar = () => {
    return (
        <div className="md:h-[120px] h-16">
            <div className=" w-full h-full">
                <img src={navPhoto} alt="" className=" w-full h-full object-cover" />
            </div>
            <div className=" flex justify-center items-center gap-4 relative h-3/5 md:-top-24 -top-12">
                <div className=" h-full">
                <Link to='/'>
                    <img src={logo} alt="" className=" h-full"/>
                </Link>
                </div>
                <Link to='/'>
                <h3 className=" text-3xl md:text-6xl font-rancho font-normal text-white">Espresso Emporium</h3>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;