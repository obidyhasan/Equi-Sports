import Lottie from "lottie-react";
import notFound from "../json/404_animation.json";
import { Link } from "react-router-dom";

const ErrorLayout = () => {
  return (
    <div className="w-full min-h-screen gap-5 flex-col max-w-screen-2xl mx-auto px-5 flex items-center justify-center">
      <Lottie
        className="max-w-2xl mx-auto"
        animationData={notFound}
        loop={true}
      />

      <h1 className="font-semibold text-center text-3xl">Page Not Found</h1>
      <Link to={"/"} className="btn">
        Go To Home
      </Link>
    </div>
  );
};

export default ErrorLayout;
