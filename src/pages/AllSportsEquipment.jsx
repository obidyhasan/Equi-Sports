import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllSportsEquipment = () => {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    fetch("https://equi-sports-server-jade.vercel.app/equipments")
      .then((res) => res.json())
      .then((data) => setEquipments(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 py-5">
      <div>
        <h1 className="font-semibold text-xl">All Sports Equipment</h1>
        <p className="font-light max-w-xl text-sm mt-2">
          Browse through our extensive collection of sports equipment, including
          everything from team gear to fitness essentials.
        </p>
      </div>

      <div className="my-10">
        {equipments.length ? (
          <div className="overflow-x-auto rounded">
            <table className="table rounded">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Processing Time</th>
                  <th>Stock</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {equipments.map((equipment, idx) => (
                  <tr key={idx} className="hover">
                    <th>{idx + 1}</th>
                    <td>
                      <div className="flex items-center gap-5">
                        <img
                          src={equipment.photo}
                          className="w-10 h-10 rounded-lg"
                          alt=""
                        />
                        <div>
                          <p className="font-medium">{equipment.name}</p>
                          <p>{equipment.rating}</p>
                        </div>
                      </div>
                    </td>
                    <td>{equipment.category}</td>
                    <td>{equipment.price}</td>
                    <td>{equipment.selectedTime}</td>
                    <td>{equipment.stock}</td>
                    <td>
                      <Link
                        to={`/productDetails/${equipment._id}`}
                        className="btn bg-primaryColor text-white hover:bg-orange-600"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="font-semibold text-xl text-center my-5">
            No Sports Equipment Found
          </h1>
        )}
      </div>
    </div>
  );
};

export default AllSportsEquipment;
