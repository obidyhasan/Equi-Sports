import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Slide from "./Slide";

const Slider = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    fetch("/sliderData.json")
      .then((res) => res.json())
      .then((data) => setSliders(data));
  }, []);

  return (
    <div className="my-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-[550px] rounded-md"
      >
        <div>
          {sliders.map((slider) => (
            <SwiperSlide key={slider.id}>
              <Slide slide={slider}></Slide>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
