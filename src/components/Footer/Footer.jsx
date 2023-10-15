import footerbg from '../../assets/images/more/13.jpg'
import logo from "../../assets/images/more/logo1.png"
import footerlogo from "../../assets/images/more/15.jpg"
import { BsFacebook, BsInstagram, BsLinkedin, BsMailbox2, BsMap, BsPhone, BsTwitter } from 'react-icons/bs'



const Footer = () => {
    return (
        <div className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${footerbg})` }}>
            <div className=' pt-32 flex flex-col justify-center items-center'>
                <div className=' w-[75px]'>
                    <img src={logo} alt="" />
                </div>
                <div className=" z-30 mt-2 flex flex-col justify-center items-center gap-4">
                    <h4 className=" text-[#331A15] font-rancho text-3xl text-center text-shadow-custom ">Espresso Emporium</h4>
                    <h4 className=" text-[#331A15] font-raleway text-xs text-center ">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</h4>
                    <div className=' flex gap-2 text-2xl text-[#331A15]'>
                        <BsFacebook></BsFacebook> <BsInstagram></BsInstagram><BsTwitter></BsTwitter> <BsLinkedin></BsLinkedin>
                    </div>
                    <h4 className=" text-[#331A15] font-rancho text-3xl text-center text-shadow-custom ">Get In Touch</h4>
                    <div className=' flex gap-2 justify-center items-center'>
                        <BsPhone></BsPhone> <p>+880 1885482244</p>
                    </div>
                    <div className=' flex gap-2 justify-center items-center'>
                        <BsMailbox2></BsMailbox2> <p>info@espresso.com</p>
                    </div>
                    <div className=' flex gap-2 justify-center items-center'>
                        <BsMap></BsMap> <p>Dhaka, Uttara , 12 sector</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <footer className=" mt-2 bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center" style={{ backgroundImage: `url(${footerlogo})` }}>
            <h4 className=" text-white py-2 font-rancho text-xs text-center text-shadow-custom ">Copyright Espresso Emporium ! All Rights Reserved</h4>
            </footer>
        </div>
    );
};

export default Footer;