import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, setLoading, loginWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  function showErrorMessage(message) {
    Swal.fire({
      title: "Error!",
      text: `${message}`,
      icon: "error",
    });
  }
  function showSuccessMessage(message) {
    Swal.fire({
      title: "Success",
      text: `${message}`,
      icon: "success",
    });
  }

  function handelOnSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {
        showSuccessMessage("Login Successfully");
        navigate(location.state ? location.state : "/");
        form.reset();
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        showErrorMessage("Invalid email or password");
      });
  }

  function handelLoginWithGoogle() {
    loginWithGoogle()
      .then(() => {
        showSuccessMessage("Login Successfully");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        showErrorMessage("Something went wrong!");
        setLoading(false);
      });
  }

  return (
    <div>
      <div className="bg-base-200 flex items-center justify-center px-5 py-20">
        <div className="card bg-base-100 w-full max-w-md rounded">
          <h2 className="font-semibold text-2xl text-center my-5 mx-8">
            Login
          </h2>

          <hr />

          <form onSubmit={handelOnSubmit} className="card-body">
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
            <button
              onClick={handelLoginWithGoogle}
              className="btn btn-outline rounded w-full"
            >
              <FcGoogle className="text-xl" /> Login with Google
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Login;
