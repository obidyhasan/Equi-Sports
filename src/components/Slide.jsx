import PropTypes from "prop-types";

const Slide = ({ slide }) => {
  return (
    <div className="relative">
      <figure className="w-full h-full">
        <img
          src={slide.img}
          className=" w-full h-[550px] object-cover rounded-md"
          alt=""
        />
      </figure>

      <div className="absolute top-0 left-0 p-5 sm:p-10 w-full h-full flex justify-center flex-col items-start">
        <h1 className="text-base-100 font-bold text-3xl sm:text-5xl">
          {slide.title}
        </h1>
        <p className="text-base-100 my-3 font-light">{slide.description}</p>
        <button className="btn rounded">Explore More</button>
      </div>
    </div>
  );
};

Slide.propTypes = {
  slide: PropTypes.object,
};

export default Slide;
