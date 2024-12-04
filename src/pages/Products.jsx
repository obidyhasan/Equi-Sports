import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categoriesData.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
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
            {categories.map((category) => (
              <div
                className="py-3 font-medium transform hover:translate-x-2 duration-300"
                key={category.id}
              >
                <NavLink to={category.path}>{category.name}</NavLink>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-green-100 md:col-span-2 lg:col-span-3">Product</div>
      </div>
    </div>
  );
};

export default Products;
