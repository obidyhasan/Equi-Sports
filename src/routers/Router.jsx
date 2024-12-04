import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllSportsEquipment from "../pages/AllSportsEquipment";
import PrivateRouter from "./PrivateRouter";
import AddEquipment from "../pages/AddEquipment";
import MyEquipmentList from "../pages/MyEquipmentList";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      errorElement: <ErrorLayout></ErrorLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/allSportsEquipment",
          element: <AllSportsEquipment></AllSportsEquipment>,
        },
        {
          path: "/addEquipment",
          element: (
            <PrivateRouter>
              <AddEquipment></AddEquipment>
            </PrivateRouter>
          ),
        },
        {
          path: "/myEquipment",
          element: (
            <PrivateRouter>
              <MyEquipmentList></MyEquipmentList>
            </PrivateRouter>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
