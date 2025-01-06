import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    photo,
    price,
    rating,
    description,
    stock,
    category,
    selectedTime,
  } = product;

  return (
    <div className=" border p-3 rounded flex flex-col gap-3">
      <div className="flex-1">
        <figure>
          <img
            src={photo}
            className="w-full h-[220px] bg-gray-50 object-cover rounded-md"
            alt=""
          />
        </figure>
        <div className="space-y-2 mt-3">
          <div className="badge badge-neutral">{category}</div>
          <div className="flex gap-5 justify-between">
            <h1 className="font-medium text-lg">{name}</h1>

            <p className="font-semibold text-orange-500 mt-1">${price}</p>
          </div>
          <p className="line-clamp-2 text-sm text-gray-500">
            {description || "N/A"}
          </p>
          <hr />
          <p className="text-gray-500">{selectedTime}</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-500">Rating: {rating}</p>
            <p className="text-gray-500">Stock: {stock}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          to={`/productDetails/${_id}`}
          className="btn flex-1 rounded bg-primaryColor text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
