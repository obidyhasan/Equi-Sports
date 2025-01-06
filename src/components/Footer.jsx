import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLocationDot,
} from "react-icons/fa6";
import { MdEmail, MdCall } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-base-100 border-t py-10">
      <div className="max-w-screen-2xl mx-auto px-5 flex flex-col sm:flex-row justify-between gap-10 sm:gap-5">
        <div>
          <h1 className="font-bold text-2xl mb-5">Equi Sports</h1>
          <p className="text-sm max-w-lg text-gray-500">
            EquiSports is an online store for high-quality sports gear and
            accessories. It offers a wide range of products for athletes,
            ensuring a smooth shopping experience with reliable service.
          </p>

          <div className="flex gap-4 text-2xl mt-5">
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaTwitter />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-xl">Contact Info</h4>
          <div className="space-y-3 mt-5">
            <p className="flex items-center gap-3">
              <MdEmail className="text-lg" /> equisports@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <MdCall /> +88 11 225 58 65
            </p>
            <p className="flex items-center gap-3">
              <FaLocationDot /> Breite Strasse 3, Oranienburg
            </p>

            <button className="btn rounded-full bg-primaryColor text-white">
              <FaLocationArrow />
              Contact
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 mt-6">
        &#169; Equi Sports 2024. All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
