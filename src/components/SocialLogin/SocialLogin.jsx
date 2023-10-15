import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../provider/GlobalAuthProv';

const SocialLogin = () => {
    const {socialLogin, google, success, faild} = useContext(AuthContext);
const handleSocialLogin = (provider) => { 
    socialLogin(provider)
    .then(() => { 
        success("log in") })
    .catch(() => {
        faild()})
 }

    return (
        <div>
            <button onClick={() => handleSocialLogin(google)} className=' flex justify-center items-center btn w-full font-rancho text-[#331A15]'><FcGoogle className=' text-xl'></FcGoogle>With Google</button>
        </div>
    );
};

export default SocialLogin;