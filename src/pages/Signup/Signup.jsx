import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Signup = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-3/5">
            <h1 className="text-5xl font-bold font-rancho text-shadow-custom">Sign Up now!</h1>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="name-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn flex gap-2 items-center justify-center bg-[#E3B577] text-white border border-[#331A15] font-rancho font-normal text-lg">Submit</button>
              </div>
            <p>Already have account? <Link to='/login'><span className=" text-blue-600">Login</span></Link></p>
            <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Signup;