import React, { useState } from "react";
import axios from "axios";

const Package_Update = ({ Data_of_packages }) => {
  const [formData, setFormData] = useState({
    Package_Name: "",
    Return_Persentage: "",
    Time_Every: "",
    For__time: "",
    Capital_span: "Included",
    price: "",
    package_genarative_secret: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Current_Package_info = Data_of_packages;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://server.kivicoin.com/packages/add",
        formData
      );
      setStatus("Package successfully added!");
      setFormData({
        Package_Name: "",
        Return_Persentage: "",
        Time_Every: "",
        For__time: "",
        Capital_span: "Included",
        price: "",
        package_genarative_secret: "",
      });
    } catch (error) {
      setStatus("Error adding package. Please try again.");
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://server.kivicoin.com/packages/delete/${Current_Package_info.Package_Name}`
      );
      setStatus("Package successfully deleted!");
    } catch (error) {
      setStatus("Error deleting package. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-white rounded-lg bg-[#CCA354]">
      <h1 className="text-2xl font-bold text-black mb-4"> Update Package</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold text-black">Package Name</label>
          <input
            type="text"
            name="Package_Name"
            value={formData.Package_Name}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-black text-black focus:outline-none focus:ring-2 focus:ring-black"
          />
          <p className="text-sm text-black pt-2">
            Current: {Current_Package_info.Package_Name || "N/A"}
          </p>
        </div>

        <div>
          <label className="block font-semibold text-black">
            Return Percentage (%)
          </label>
          <input
            type="number"
            name="Return_Persentage"
            value={formData.Return_Persentage}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-black text-black focus:outline-none focus:ring-2 focus:ring-black"
          />
          <p className="text-sm text-black pt-2">
            Current: {Current_Package_info.Return_Persentage || "N/A"}
          </p>
        </div>

        <div>
          <label className="block font-semibold text-black">Time Every</label>
          <input
            type="text"
            name="Time_Every"
            value={formData.Time_Every}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-black text-black focus:outline-none focus:ring-2 focus:ring-black"
          />
          <p className="text-sm text-black pt-2">
            Current: {Current_Package_info.Time_Every || "N/A"}
          </p>
        </div>

        <div>
          <label className="block font-semibold text-black">For Time</label>
          <input
            type="text"
            name="For__time"
            value={formData.For__time}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-black text-black focus:outline-none focus:ring-2 focus:ring-black"
          />
          <p className="text-sm text-black pt-2">
            Current: {Current_Package_info.For__time || "N/A"}
          </p>
        </div>

        <div>
          <label className="block font-semibold text-black">Capital Span</label>
          <select
            name="Capital_span"
            value={formData.Capital_span}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-black text-black  focus:ring-2 focus:ring-black"
          >
            <option value="Included">Included</option>
            <option value="Excluded">Excluded</option>
          </select>
          <p className="text-sm text-black pt-2">
            Current: {Current_Package_info.Capital_span}
          </p>
        </div>

        <div>
          <label className="block font-semibold text-black">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-black text-black focus:outline-none focus:ring-2 focus:ring-black"
          />
          <p className="text-sm text-black pt-2">
            Current: {Current_Package_info.price || "N/A"}
          </p>
        </div>

        <div>
          <label className="block font-semibold text-black">
            Package Secret Key
          </label>
          <input
            type="text"
            name="package_genarative_secret"
            value={formData.package_genarative_secret}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-black text-black focus:outline-none focus:ring-2 focus:ring-black"
          />
          <p className="text-sm text-black pt-2">
            Current: {Current_Package_info.package_genarative_secret || "N/A"}
          </p>
        </div>

        {status && <p className="text-sm text-green-700 mt-2">{status}</p>}

        <button
          type="submit"
          className="w-full px-4 py-2 bg-black text-[#CCA354] font-bold rounded-md hover:bg-[#A87E2A] transition"
        >
          Update Package
        </button>

        <button
          type="button"
          onClick={handleDelete}
          className="w-full px-4 py-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition mt-1"
        >
          Delete Package
        </button>
      </form>
    </div>
  );
};

export default Package_Update;
