import EquipmentCard from "../components/EquipmentCard";

const MyEquipmentList = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-5">
      <div>
        <h1 className="font-semibold text-xl">My Equipment List</h1>
        <p className="font-light max-w-xl text-sm mt-2">
          {`View and manage all the equipment you've added to the store. Edit,
          update, or delete your listings with ease to keep your inventory up to
          date.`}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="my-5">
          <EquipmentCard></EquipmentCard>
        </div>
      </div>
    </div>
  );
};

export default MyEquipmentList;
