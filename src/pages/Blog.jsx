import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import SectionHeader from "../components/SectionHeader";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("blogData.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto px-5 py-5">
      <SectionHeader
        title={"Sports Insights & Tips"}
        subtitle={
          "Stay ahead in the game with our expert sports blogs. From training tips to gear guides and the latest updates in the sports world, we’ve got you covered!"
        }
      ></SectionHeader>

      <div className="my-10">
        {loading ? (
          <div className="flex items-center justify-center my-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div>
            {blogs.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {blogs.map((blog) => (
                  <BlogCard key={blog._id} blog={blog}></BlogCard>
                ))}
              </div>
            ) : (
              <h1 className="font-semibold text-xl text-center my-5">
                No Sports blog Found
              </h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
