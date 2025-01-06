import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("servicesData.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto px-5 py-5">
      <SectionHeader
        title={"Our Services"}
        subtitle={
          "At SportsZone, we don’t just sell sports equipment—we provide a complete solution to support your athletic journey. From premium products to exceptional customer care, we’re here to serve you at every step."
        }
      ></SectionHeader>

      <div className="my-10">
        {loading ? (
          <div className="flex items-center justify-center my-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div>
            {services.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {services.map((service) => (
                  <ServiceCard
                    key={service._id}
                    service={service}
                  ></ServiceCard>
                ))}
              </div>
            ) : (
              <h1 className="font-semibold text-xl text-center my-5">
                No Sports blog Found
              </h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
