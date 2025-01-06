import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const TopSalesProductSection = () => {
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

  return (
    <div>
      <SectionHeader
        title={"Top Sales Product"}
        subtitle={
          "Check out our most popular sports equipment, trusted by athletes for their quality, performance, and durability. Upgrade your game with the best!"
        }
      ></SectionHeader>

      <div className="my-10">
        {loading ? (
          <div className="flex items-center justify-center my-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div>
            {equipments.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {equipments.splice(0, 4).map((equipment) => (
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

      <div className="text-center">
        <Link to={"/allSportsEquipment"} className="btn">
          Explore All Products
        </Link>
      </div>
    </div>
  );
};

export default TopSalesProductSection;
