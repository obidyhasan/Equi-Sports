import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import LoadingLayout from "./LoadingLayout";

const RootLayout = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <LoadingLayout></LoadingLayout>;
  }

  return (
    <div>
      <nav className="sticky top-0 z-10 bg-base-100">
        <Navbar></Navbar>
      </nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
