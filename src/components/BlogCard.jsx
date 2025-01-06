import PropTypes from "prop-types";

const BlogCard = ({ blog }) => {
  const { title, author, excerpt, image } = blog;

  return (
    <div className="p-4 border gap-4 rounded-xl flex flex-col">
      <div className="flex-1">
        <figure>
          <img
            src={image}
            className="w-full h-[220px] bg-base-200 object-cover rounded-md"
            alt=""
          />
        </figure>

        <div className="space-y-2 mt-3">
          <h1 className="font-semibold text-lg">{title}</h1>
          <h2 className="font-medium text-primaryColor">{author}</h2>
          <p className="">{excerpt}</p>
        </div>
      </div>
      {/* <button className="btn w-full">See More</button> */}
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object,
};

export default BlogCard;
