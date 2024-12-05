import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const loaderData = useLoaderData();

  const {
    category,
    customization,
    description,
    name,
    photo,
    price,
    rating,
    selectedTime,
    stock,
  } = loaderData[0];

  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="flex flex-col md:flex-row gap-10 mt-5 mb-10 items-center">
        <div className="w-full h-min md:w-2/5 bg-green-100 rounded-md">
          <figure className="bg-base-200 rounded-md">
            <img
              src={photo}
              className="w-full h-full object-contain rounded-md "
              alt=""
            />
          </figure>
        </div>

        <div className="w-full md:w-3/5 h-min flex flex-col gap-3">
          <div className="badge badge-md">{category}</div>
          <h1 className="font-semibold text-2xl">{name}</h1>
          <p className="text-xl font-bold text-primaryColor">${price}</p>

          <p className="">
            <span className="font-semibold">Customization: </span>{" "}
            {customization}
          </p>

          <h4 className="text-lg font-semibold">Description </h4>
          <p className=" text-gray-500">{description}</p>

          <ul className="space-y-2">
            <li>
              <p className="flex">
                <span
                  className="font-semibold w-20
                "
                >
                  Rating:
                </span>{" "}
                {rating}
              </p>
            </li>
            <li>
              <p className="flex">
                <span className="font-semibold w-20">Stock:</span>{" "}
                <span>{stock} Item Available</span>
              </p>
            </li>
            <li>
              <p className="flex">
                <span className="font-semibold w-20">Delivery:</span>{" "}
                <span>{selectedTime}</span>
              </p>
            </li>
          </ul>

          <button className="btn w-max bg-primaryColor text-white hover:bg-orange-600 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
