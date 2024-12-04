import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navbarLink = (
    <div className="flex flex-col lg:gap-7 gap-3 navbarLink lg:flex-row">
      <NavLink to={"/"} className="text-base text-slate-600">
        Home
      </NavLink>
      <NavLink to={"/allSportsEquipment"} className="text-base text-slate-600">
        All Sports Equipment
      </NavLink>

      {user && (
        <NavLink to={"/addEquipment"} className="text-base text-slate-600">
          Add Equipment
        </NavLink>
      )}

      {user && (
        <NavLink to={"/myEquipment"} className="text-base text-slate-600">
          My Equipment List
        </NavLink>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="navbar p-0">
        <div className="sm:flex-1">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-3 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm rounded dropdown-content bg-base-100 z-[1] mt-3 w-52 p-4 shadow"
            >
              {navbarLink}
            </ul>
          </div>
          <Link to={"/"} className="text-2xl font-bold ">
            Equi Sports
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbarLink}</ul>
        </div>

        {user ? (
          <div className="flex-1 gap-3 justify-end">
            <figure
              className="tooltip tooltip-left"
              data-tip={user.displayName}
            >
              <img
                src={user.photoURL}
                className="w-12 h-12 object-cover rounded-full border"
                alt=""
              />
            </figure>

            <button
              onClick={logOut}
              className="btn hidden sm:flex rounded bg-accentColor  hover:bg-gray-600
          text-white  border-none"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex-1 gap-3 justify-end">
            <Link
              to={"/login"}
              className="btn rounded bg-primaryColor text-white hover:bg-orange-600 border-none"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="btn hidden sm:flex rounded bg-accentColor  hover:bg-gray-600
          text-white  border-none"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
