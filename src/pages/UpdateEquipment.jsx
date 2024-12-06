import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateEquipment = () => {
  const loaderData = useLoaderData();
  const {
    _id,
    name,
    photo,
    category,
    price,
    customization,
    rating,
    selectedTime: processTime,
    stock,
    description,
  } = loaderData;

  const [selectedTime, setSelectedTime] = useState(processTime);
  const navigate = useNavigate();

  function handelProcessingTimeChange(e) {
    setSelectedTime(e.target.value);
  }

  function handelOnSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const price = form.price.value;
    const customization = form.customization.value;
    const rating = form.rating.value;
    const stock = form.stock.value;
    const description = form.description.value;

    const updateProductInfo = {
      name,
      photo,
      category,
      price,
      customization,
      rating,
      selectedTime,
      stock,
      description,
    };

    fetch(`https://equi-sports-server-jade.vercel.app/equipments/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProductInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success",
            text: "Equipment updated successfully",
            icon: "success",
          });

          navigate("/myEquipment");
        } else {
          Swal.fire({
            title: "Info",
            text: "Nothing has been changed for the update.",
            icon: "info",
          });
        }
      });
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-5">
      <h1 className="font-semibold text-xl">Update Equipment</h1>
      <p className="font-light max-w-xl text-sm mt-2">
        Upgrade your workouts with our latest gym and sports equipment!
      </p>

      <div className="border rounded p-5 my-10">
        <form onSubmit={handelOnSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name*</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="product name"
                className="input input-bordered rounded"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL*</span>
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="photo url"
                className="input input-bordered rounded"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category Name*</span>
              </label>
              <input
                type="text"
                defaultValue={category}
                name="category"
                placeholder="category name"
                className="input input-bordered rounded"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="price"
                className="input input-bordered rounded"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Customization*</span>
              </label>
              <input
                type="text"
                name="customization"
                defaultValue={customization}
                placeholder="customization"
                className="input input-bordered rounded"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating*</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="rating"
                defaultValue={rating}
                className="input input-bordered rounded"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Processing Time*</span>
              </div>
              <select
                className="select select-bordered rounded"
                onChange={handelProcessingTimeChange}
                value={selectedTime}
              >
                <option>2-3 business days</option>
                <option>3-5 business days</option>
                <option>5-7 business days</option>
                <option>7-14 business days</option>
              </select>
            </label>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Stock Status*</span>
              </label>
              <input
                type="number"
                name="stock"
                defaultValue={stock}
                placeholder="stock status"
                className="input input-bordered rounded"
                required
              />
            </div>
          </div>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Description*</span>
            </div>
            <textarea
              name="description"
              defaultValue={description}
              className="textarea textarea-bordered w-full min-h-24 rounded"
              placeholder="about product"
              required
            ></textarea>
          </label>

          <div>
            <button className="btn w-full rounded bg-primaryColor text-white mt-5 hover:bg-orange-600">
              Update Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEquipment;
