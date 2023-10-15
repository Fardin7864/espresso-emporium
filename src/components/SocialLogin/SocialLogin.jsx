import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../provider/GlobalAuthProv';

const SocialLogin = () => {
    const {socialLogin, google} = useContext(AuthContext);

    return (
        <div>
            <button onClick={() => socialLogin(google)} className=' flex justify-center items-center btn w-full font-rancho text-[#331A15]'><FcGoogle className=' text-xl'></FcGoogle>With Google</button>
        </div>
    );
};

export default SocialLogin;