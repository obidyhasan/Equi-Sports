import PropTypes from "prop-types";

const Slide = ({ slide }) => {
  return (
    <div className="relative">
      <figure className="w-full h-full">
        <img
          src={slide.img}
          className=" w-full h-[550px] object-cover"
          alt=""
        />
      </figure>

      <div className="absolute top-0 left-0 bg-[#00000040] w-full h-full flex items-center flex-col justify-center">
        <div className="w-full">
          <div className="max-w-screen-2xl mx-auto px-5 text-white">
            <h1 className=" font-bold text-3xl sm:text-5xl">{slide.title}</h1>
            <p className=" my-3 font-light">{slide.description}</p>
            <button className="btn rounded bg-white text-black border-none hover:bg-gray-100">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  slide: PropTypes.object,
};

export default Slide;
