import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  return (
    <div className="p-4 border rounded">
      <h1 className="font-semibold text-lg">{service.name}</h1>
      <p className="mt-5 text-sm">{service.description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
