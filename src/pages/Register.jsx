import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
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
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const user = { name, email, photo };

    // Validation
    const checkUppercase = /^(?=.*[A-Z]).*$/;
    const checkLowercase = /^(?=.*[a-z]).*$/;

    if (password.length < 6) {
      showErrorMessage("Password length must be at least 6 character");
      return;
    }
    if (!checkUppercase.test(password)) {
      showErrorMessage("Must have an Uppercase letter in the password");
      return;
    }
    if (!checkLowercase.test(password)) {
      showErrorMessage("Must have a Lowercase letter in the password");
      return;
    }

    // Firebase Register
    createUser(email, password)
      .then(() => {
        const userInfo = {
          displayName: name,
          photoURL: photo,
        };
        updateUser(userInfo)
          .then(() => {
            fetch("https://equi-sports-server-jade.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  showSuccessMessage("Register Successfully");
                  navigate("/");
                  form.reset();
                }
              });
          })
          .catch((error) => {
            showErrorMessage("Something went wrong!");
            console.log(error);
          });
      })
      .catch((error) => {
        showErrorMessage("Something went wrong!");
        console.log(error);
      });
  }

  return (
    <div>
      <div className="bg-gray-50 flex items-center justify-center px-5 py-20">
        <div className="card bg-base-100 w-full max-w-md rounded">
          <h2 className="font-semibold text-2xl text-center my-5 mx-8">
            Create Account
          </h2>

          <hr />

          <form onSubmit={handelOnSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered rounded"
                required
              />
            </div>
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
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
                Register
              </button>
            </div>
          </form>

          <div className=" -mt-3 mb-8">
            <p className="text-sm text-center">
              {"Already have an account? "}
              <Link to={"/login"} className="font-semibold text-primaryColor">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Register;
