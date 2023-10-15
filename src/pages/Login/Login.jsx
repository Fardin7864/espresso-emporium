import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../provider/GlobalAuthProv";

const Login = () => {
  const {logInwithEmail, success, faild} = useContext(AuthContext);

  const handleLogin =(e) => { 
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
    logInwithEmail(email,password)
    .then(() => { 
      success("log in") })
  .catch(() => {
      faild()})
   }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-3/5">
          <h1 className="text-5xl font-bold font-rancho text-shadow-custom">Login now!</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn flex gap-2 items-center justify-center bg-[#E3B577] text-white border border-[#331A15] font-rancho font-normal text-lg">Login</button>
            </div>
          <p>Do not have account? <Link to='/signup'><span className=" text-blue-600">Sign Up</span></Link></p>
          <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
