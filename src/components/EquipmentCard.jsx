import PropTypes from "prop-types";

const EquipmentCard = ({ equipment }) => {
  const {
    name,
    photo,
    price,
    rating,
    description,
    stock,
    category,
    selectedTime,
  } = equipment;

  return (
    <div className="border p-3 rounded flex flex-col gap-3">
      <div className="flex-1">
        <figure>
          <img
            src={photo}
            className="w-full h-[220px] object-cover rounded-md"
            alt=""
          />
        </figure>
        <div className="space-y-2 mt-3">
          <div className="badge badge-neutral">{category}</div>
          <div className="flex gap-5 justify-between">
            <h1 className="font-medium text-lg">{name}</h1>

            <p className="font-semibold text-orange-500 mt-1">${price}</p>
          </div>
          <p className="line-clamp-2 text-sm text-gray-500">{description}</p>
          <hr />
          <p className="text-gray-600">{selectedTime}</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Rating: {rating}</p>
            <p className="text-gray-600">Stock: {stock}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="btn flex-1 rounded bg-yellow-500 text-white">
          Update
        </button>
        <button className="btn flex-1 rounded bg-red-500 text-white">
          Delete
        </button>
      </div>
    </div>
  );
};

EquipmentCard.propTypes = {
  equipment: PropTypes.object,
};

export default EquipmentCard;
