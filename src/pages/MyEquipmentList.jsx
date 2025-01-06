import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
const MyEquipmentList = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [myEquipments, setMyEquipments] = useState([]);

  useEffect(() => {
    fetch(
      `https://equi-sports-server-jade.vercel.app/equipments?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyEquipments(data);
        setLoading(false);
      });
  }, [user?.email]);

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
    <div className="max-w-screen-2xl mx-auto px-5 py-5">
      <SectionHeader
        title={"My Equipment List"}
        subtitle={
          "View and manage all the equipment you've added to the store. Edit, update, or delete your listings with ease to keep your inventory up to date."
        }
      ></SectionHeader>

      <div className="my-10">
        {loading ? (
          <div className="flex items-center justify-center my-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div>
            {" "}
            {myEquipments.length ? (
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
                    {myEquipments.map((equipment, idx) => (
                      <tr key={idx} className="hover">
                        <th>{idx + 1}</th>
                        <td>
                          <div className="flex items-center gap-5">
                            <img
                              src={equipment.photo}
                              className="w-10 h-10 bg-gray-50 rounded-lg"
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
                        <td className="flex gap-3">
                          <Link
                            to={`/updateEquipment/${equipment._id}`}
                            className="btn flex-1 rounded bg-yellow-500 hover:bg-yellow-600 text-white"
                          >
                            Update
                          </Link>
                          <button
                            onClick={() => handelDelete(equipment._id)}
                            className="btn rounded bg-primaryColor text-white hover:bg-orange-600"
                          >
                            <MdDelete className="text-xl"></MdDelete>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <h1 className="font-semibold text-xl text-center my-5">
                My Equipment List is Empty
              </h1>
            )}
          </div>
        )}
      </div>

      {/* {myEquipments.length ? (
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {myEquipments.map((equipment, idx) => (
            <EquipmentCard
              key={idx}
              equipment={equipment}
              myEquipments={myEquipments}
              setMyEquipments={setMyEquipments}
            ></EquipmentCard>
          ))}
        </div>
      ) : (
        <h1 className="font-semibold text-xl text-center my-8">
          My Equipment List is Empty
        </h1>
      )} */}
    </div>
  );
};

export default MyEquipmentList;
