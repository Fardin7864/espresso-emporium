import { Link } from "react-router-dom";
import navPhoto from "../../assets/images/more/15.jpg"
import logo from "../../assets/images/more/logo1.png"
import { useContext } from "react";
import { AuthContext } from "../../provider/GlobalAuthProv";


const Navbar = () => {
    const {user, logOut, success} = useContext(AuthContext);
    const handleLogout =() => { 
        logOut();
        success("Log Out");
     }
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
                {
                    user ? 
                    <button onClick={handleLogout} className="btn flex gap-2 items-center justify-center bg-[#E3B577] text-white border border-[#331A15] font-rancho font-normal text-lg">SignOut</button>
                    : 
                    <Link to='/login' className="btn flex gap-2 items-center justify-center bg-[#E3B577] text-white border border-[#331A15] font-rancho font-normal text-lg">Login</Link>

                }
                
            </div>
        </div>
    );
};

export default Navbar;