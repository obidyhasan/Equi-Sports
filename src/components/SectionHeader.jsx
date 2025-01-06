import { Slide } from "react-awesome-reveal";
import PropTypes from "prop-types";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="my-5">
      <Slide>
        <h1 className="font-semibold text-3xl">{title}</h1>
      </Slide>

      <p className="font-light max-w-xl text-sm mt-3">{subtitle}</p>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionHeader;
