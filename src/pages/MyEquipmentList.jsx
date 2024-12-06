import { useState } from "react";
import EquipmentCard from "../components/EquipmentCard";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Slide } from "react-awesome-reveal";
const MyEquipmentList = () => {
  const { user } = useContext(AuthContext);
  const [myEquipments, setMyEquipments] = useState([]);

  useEffect(() => {
    fetch(
      `https://equi-sports-server-jade.vercel.app/equipments?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyEquipments(data);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 py-5">
      <div>
        <Slide>
          <h1 className="font-semibold text-2xl">My Equipment List</h1>
        </Slide>

        <p className="font-light max-w-xl text-sm mt-2">
          {`View and manage all the equipment you've added to the store. Edit,
          update, or delete your listings with ease to keep your inventory up to
          date.`}
        </p>
      </div>

      {myEquipments.length ? (
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
      )}
    </div>
  );
};

export default MyEquipmentList;
