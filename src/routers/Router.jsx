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
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";

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
          loader: () =>
            fetch("https://equi-sports-server-jade.vercel.app/categories"),
          children: [
            {
              path: "/",
              element: <Products>All Product</Products>,
              loader: () =>
                fetch("https://equi-sports-server-jade.vercel.app/equipments"),
            },
            {
              path: "/categories/:category",
              element: <Products>hello</Products>,
              loader: ({ params }) =>
                fetch(
                  `https://equi-sports-server-jade.vercel.app/equipments/${params.category}`
                ),
            },
          ],
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
        {
          path: "/productDetails/:productId",
          element: (
            <PrivateRouter>
              <ProductDetails></ProductDetails>
            </PrivateRouter>
          ),
          loader: ({ params }) =>
            fetch(
              `https://equi-sports-server-jade.vercel.app/products/${params.productId}`
            ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
