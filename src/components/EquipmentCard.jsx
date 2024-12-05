import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const EquipmentCard = ({ equipment, myEquipments, setMyEquipments }) => {
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
  } = equipment;

  function handelDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://equi-sports-server-jade.vercel.app/equipments/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingEquipment = myEquipments.filter(
                (equi) => equi._id !== id
              );
              setMyEquipments(remainingEquipment);
            }
          });
      }
    });
  }

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
        <Link
          to={`/updateEquipment/${_id}`}
          className="btn flex-1 rounded bg-yellow-500 text-white"
        >
          Update
        </Link>
        <button
          onClick={() => handelDelete(_id)}
          className="btn flex-1 rounded bg-red-500 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

EquipmentCard.propTypes = {
  equipment: PropTypes.object,
  myEquipments: PropTypes.array,
  setMyEquipments: PropTypes.func,
};

export default EquipmentCard;
