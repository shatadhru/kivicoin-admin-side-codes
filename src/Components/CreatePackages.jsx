import React, { useState } from "react";
import axios from "axios";

const CreatePackage = () => {
  const initialState = {
    Package_Name: "",
    Return_Persentage: "",
    Time_Every: "",
    For__time: "",
    Capital_span: "Included",
    price: "",
    package_genarative_secret: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Creating package...");
    try {
      const response = await axios.post(
        "https://server.kivicoin.com/packages/add/new",
        formData
      );
      
      const response_msg = response.data.message;
      
console.log(response.data)

      setStatus(response_msg);
      setFormData(initialState);
    } catch (error) {
      setStatus("❌ Error creating package. Please try again.");
      console.error("Creation Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <div className="w-full max-w-md p-4 text-white rounded-lg bg-[#CCA354] shadow-lg">
        <h1 className="text-xl font-bold text-black text-center mb-3">
          Create New Package
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {Object.keys(initialState).map((key) => (
            <div key={key}>
              <label className="block text-sm font-medium text-black">
                {key.replace(/_/g, " ")}
              </label>
              <input
                type={
                  key === "price" || key === "Return_Persentage"
                    ? "number"
                    : "text"
                }
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full px-2 py-1 rounded border border-black text-black focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          ))}
          {status && (
            <p
              className={`text-xs mt-2 text-center ${
                status.includes("Error") ? "text-red-600" : "text-green-700"
              }`}
            >
              {status}
            </p>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-black text-[#CCA354] text-sm font-bold rounded-md hover:bg-[#A87E2A] transition"
          >
            Create Package
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePackage;
