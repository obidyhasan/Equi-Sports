import Slider from "../components/Slider";
import Products from "./Products";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <header>
        <Slider></Slider>
      </header>
      <section>
        <Products></Products>
      </section>
    </div>
  );
};

export default Home;
