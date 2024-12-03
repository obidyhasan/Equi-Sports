import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import PropTypes from "prop-types";
import LoadingLayout from "../layouts/LoadingLayout";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingLayout></LoadingLayout>;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

PrivateRouter.propTypes = {
  children: PropTypes.element,
};

export default PrivateRouter;
