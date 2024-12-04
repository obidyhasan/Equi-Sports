import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="bg-gray-50 flex items-center justify-center px-5 py-20">
        <div className="card bg-base-100 w-full max-w-md rounded">
          <h2 className="font-semibold text-2xl text-center my-5 mx-8">
            Login
          </h2>

          <hr />

          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered rounded"
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
                className="input input-bordered rounded"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn rounded bg-primaryColor text-white hover:bg-orange-600">
                Login
              </button>
            </div>
          </form>

          <div className=" -mt-3">
            <p className="text-sm text-center">
              {"Don't have an account? "}
              <Link
                to={"/register"}
                className="font-semibold text-primaryColor"
              >
                Register
              </Link>
            </p>
          </div>

          <div className="divider mx-8">Or</div>
          <div className="px-8 pb-6">
            <button className="btn btn-outline rounded w-full">
              <FaGoogle /> Login with Google
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Login;
