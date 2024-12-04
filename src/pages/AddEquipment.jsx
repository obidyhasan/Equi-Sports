import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const [selectedTime, setSelectedTime] = useState("2-3 business days");

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
    const userName = user.displayName;
    const userEmail = user.email;

    const productInfo = {
      name,
      photo,
      category,
      price,
      customization,
      rating,
      selectedTime,
      stock,
      userName,
      userEmail,
    };

    fetch("https://equi-sports-server-jade.vercel.app/equipments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          setSelectedTime("2-3 business days");
          Swal.fire({
            title: "Success",
            text: "Equipment added successfully",
            icon: "success",
          });
        }
      });
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-5">
      <h1 className="font-semibold text-xl">Add Equipment</h1>
      <p className="font-light max-w-xl text-sm mt-2">
        Add your sports equipment to the store by providing product details,
        including images, pricing, and specifications.
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
              className="textarea textarea-bordered w-full min-h-24 rounded"
              placeholder="about product"
              required
            ></textarea>
          </label>

          <div>
            <button className="btn w-full rounded bg-primaryColor text-white mt-5 hover:bg-orange-600">
              Add Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipment;
