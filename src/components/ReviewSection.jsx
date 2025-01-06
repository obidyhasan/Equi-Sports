import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviewData.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <div>
        <Slide>
          <h1 className="text-4xl font-semibold">What Our Customers Say</h1>
        </Slide>
        <p className="font-light text-gray-500 max-w-2xl mt-5">
          Discover what our happy customers have to say about their experience
          with our products and services.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-12 text-center">
        {reviews.map((review) => (
          <div
            className="border rounded py-6 px-4 flex items-center flex-col gap-5"
            key={review.id}
          >
            <figure className="">
              <img
                src={review.image}
                className="w-16 h-16 object-cover rounded-full"
                alt=""
              />
            </figure>
            <p className="text-gray-500">
              Fantastic store with a great selection of sports gear! The quality
              of the products is excellent, and the delivery was super fast.
            </p>
            <div className="rating space-x-1">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 w-5 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 w-5  bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 w-5 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 w-5 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 w-5 bg-orange-400"
              />
            </div>
            <div>
              <h1 className="font-semibold text-lg">{review.name}</h1>
              <p className="text-gray-500 mt-1">{review.userIdentity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
