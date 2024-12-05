import Slider from "../components/Slider";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-5">
      <header>
        <Slider></Slider>
      </header>
      <section>
        <div className="my-20">
          <div>
            <h1 className="text-3xl font-bold">Explore Our Top Picks</h1>
            <p className="font-light text-gray-500 max-w-2xl mt-5">
              {`Browse our curated selection of premium sports equipment and
        accessories, designed to elevate your game and meet every athlete's
        needs.`}
            </p>
          </div>

          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="h-min border rounded p-4">
              <h2 className="font-semibold text-lg mb-4">Category</h2>
              <hr />

              <div className="mt-4">
                <div className="categoryLinks py-2 font-medium transform hover:translate-x-2 duration-300">
                  <NavLink to={`/`}>All Products</NavLink>
                </div>
                {categories.map((category) => (
                  <div
                    className="categoryLinks py-2 font-medium transform hover:translate-x-2 duration-300"
                    key={category._id}
                  >
                    <NavLink to={`/categories/${category.category}`}>
                      {category.category}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>

            <section className="h-min col-span-1 md:col-span-2 lg:col-span-3">
              <Outlet></Outlet>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
