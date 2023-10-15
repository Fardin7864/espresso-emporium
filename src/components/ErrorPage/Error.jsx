import { AiOutlineArrowLeft } from "react-icons/ai";
import errorPhoto from "../../assets/images/404/404.gif";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className=" flex flex-col justify-center items-center">
        <Link to="/">
          <button className=" text-xl btn bg-transparent flex items-center justify-center gap-2 font-rancho p-3 ">
            <AiOutlineArrowLeft></AiOutlineArrowLeft>Back To Home
          </button>
        </Link>
        <img src={errorPhoto} alt="" />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
