import { Slide } from "react-awesome-reveal";

const NewsLetterSection = () => {
  return (
    <section className="mt-20">
      <section className="newsletter w-full h-[500px] relative">
        <figure className="w-full h-full">
          <img
            src={"https://i.ibb.co.com/W619GHh/214900638036.jpg"}
            className="w-full h-full object-cover"
            alt=""
          />
        </figure>

        <div className="bg-[#00000041] mx-auto p-4 text-center flex items-center justify-center flex-col absolute top-0 left-0 w-full h-full text-white">
          <Slide>
            <h2 className="text-4xl font-bold mb-2 text-center">
              Subscribe to Our Newsletter
            </h2>
          </Slide>
          <p className=" mb-6">
            Get the latest updates, deals, and sports tips straight to your
            inbox!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-white rounded"
              required
            />
            <button
              type="submit"
              className="btn bg-primaryColor border-none text-white rounded px-6 py-2"
            >
              Subscribe
            </button>
          </div>
          <p className=" text-sm mt-4">
            We respect your privacy and won’t share your information.
          </p>
        </div>
      </section>
    </section>
  );
};

export default NewsLetterSection;
