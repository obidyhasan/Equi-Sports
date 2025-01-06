import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SectionHeader from "../components/SectionHeader";

const AllSportsEquipment = () => {
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://equi-sports-server-jade.vercel.app/equipments")
      .then((res) => res.json())
      .then((data) => {
        setEquipments(data);
        setLoading(false);
      });
  }, []);

  function handelSort() {
    fetch("https://equi-sports-server-jade.vercel.app/equipments/sort")
      .then((res) => res.json())
      .then((data) => {
        setEquipments(data);
        setLoading(false);
      });
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-5 py-5">
      <div className="flex flex-col sm:flex-row justify-between gap-5">
        <SectionHeader
          title={"All Sports Equipment"}
          subtitle={
            "Browse through our extensive collection of sports equipment, including everything from team gear to fitness essentials."
          }
        ></SectionHeader>
        <div className="my-5">
          <button
            onClick={handelSort}
            className="btn bg-primaryColor text-white hover:bg-primaryColor rounded"
          >
            Sort by price
          </button>
        </div>
      </div>

      <div className="my-10">
        {loading ? (
          <div className="flex items-center justify-center my-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div>
            {equipments.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {equipments.map((equipment) => (
                  <ProductCard
                    key={equipment._id}
                    product={equipment}
                  ></ProductCard>
                ))}
              </div>
            ) : (
              <h1 className="font-semibold text-xl text-center my-5">
                No Sports Equipment Found
              </h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllSportsEquipment;
