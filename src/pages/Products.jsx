import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const loaderData = useLoaderData();

  return (
    <div>
      <h2 className="font-semibold text-lg mb-4">Products</h2>

      {loaderData.length ? (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {loaderData.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      ) : (
        <h1 className="font-semibold text-2xl text-center">
          No Products Found
        </h1>
      )}
    </div>
  );
};

export default Products;
