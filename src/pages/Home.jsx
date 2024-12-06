import ReviewSection from "../components/ReviewSection";
import Slider from "../components/Slider";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

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
            <Slide>
              <h1 className="text-3xl font-bold">Explore Our Top Picks</h1>
            </Slide>
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

      <section>
        <ReviewSection></ReviewSection>
      </section>

      <section className="my-20">
        <section className="newsletter w-full h-[500px] relative">
          <figure className="w-full h-full">
            <img
              src={"https://i.ibb.co.com/Fm38kPx/2148523224.jpg"}
              className="w-full h-full object-cover rounded-md"
              alt=""
            />
          </figure>

          <div className="bg-[#00000041] rounded-md mx-auto p-4 text-center flex items-center justify-center flex-col absolute top-0 left-0 w-full h-full">
            <Slide>
              <h2 className="text-3xl font-bold mb-2 text-center text-base-100">
                Subscribe to Our Newsletter
              </h2>
            </Slide>
            <p className="text-base-200 mb-6">
              Get the latest updates, deals, and sports tips straight to your
              inbox!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full rounded"
                required
              />
              <button
                type="submit"
                className="btn bg-primaryColor border-none text-white rounded px-6 py-2"
              >
                Subscribe
              </button>
            </div>
            <p className="text-base-300 text-sm mt-4">
              We respect your privacy and won’t share your information.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
