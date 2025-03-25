import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import Package_Update from "../Components/PackageUpdate";
import { IoIosArrowUp } from "react-icons/io";
import CreatePackage from "../Components/CreatePAckages";

const socket = io.connect("https://server.kivicoin.com");

import { IoClose } from "react-icons/io5";


const PackageControl = () => {
  const [packageData, setPackageData] = useState([]);
  const [packageDataSocket, setPackageDataSocket] = useState([]);
  const [activePackage, setActivePackage] = useState(null); // টগল করার জন্য State

  const [ Package_Creata_open , setPackage_Creata_open ] = useState(false)

  // Fetching package data on component mount
  useEffect(() => {
    const package_Data_Handler = async () => {
      const response = await axios.get("https://server.kivicoin.com/packages/data");
      setPackageData(response.data);
    };

    package_Data_Handler(); // Fetch data when the component mounts
  }, []);

  useEffect(() => {
    if (activePackage) {
      socket.emit("package-name", activePackage);

      socket.on("founded-data", (data) => {
        setPackageDataSocket(data);
      });
    }
  }, [activePackage]);

  // প্যাকেজ টগল করার জন্য ফাংশন
  const togglePackage = (packageName) => {
    setActivePackage(activePackage === packageName ? null : packageName);
  };

  return (
    <div>
      <section className="mt-10 ml-5 lg:ml-16">
        <h1 className="text-4xl text-[#dfa741] font-bold">Package Manager</h1>
        <p className="pt-2">
          You can control your packages from here. Like you can create, update,
          and delete your packages.
        </p>

        <div className="flex flex-col items-center justify-center">
          <div className="create_packages_section w-[95%] h-auto transition bg-[#CCA354] rounded-2xl mt-6 ">
            <h1 className="pt-6 pl-6 text-[20px]">Create A New Package</h1>
            <p className="text-[8px] pl-6">
              Creating A New Package is designed to help you get started with
              all the essential features at an affordable price. Enjoy basic
              access to our services and grow with us as your needs expand.
              Perfect for individuals and small businesses looking to get
              started.
            </p>
            <div className="button_adn_arrow_div flex justify-between items-center">
              <button
                className="px-3 py-2 bg-black text-[#CCA354] text-[14px] rounded-sm mt-2 ml-6"
                onClick={() => setPackage_Creata_open(true)}
              >
                Create New Package
              </button>
            </div>

            <div className="h-20px mb-10"></div>
          </div>
        </div>

        {packageData.map((packageItem, index) => (
          <div
            key={index}
            className="package_management_container flex flex-col items-center justify-center"
          >
            <div className="package_details w-[95%] h-auto transition bg-[#CCA354] rounded-2xl mt-6 ">
              <h1 className="pt-6 pl-6 text-[20px]">
                {packageItem.Package_Name}
              </h1>
              <p className="text-[8px] pl-6">
                {packageItem.Package_Name} is designed to help you get started
                with all the essential features at an affordable price. Enjoy
                basic access to our services and grow with us as your needs
                expand. Perfect for individuals and small businesses looking to
                get started.
              </p>
              <div className="button_adn_arrow_div flex justify-between items-center">
                <button
                  className="px-3 py-2 bg-black text-[#CCA354] text-[14px] rounded-sm mt-2 ml-6"
                  onClick={() => togglePackage(packageItem.Package_Name)}
                >
                  {activePackage === packageItem.Package_Name
                    ? "Close"
                    : "Customise This Package"}
                </button>

                <IoIosArrowUp
                  className={`mr-10 mt-6 cursor-pointer transition-transform ${
                    activePackage === packageItem.Package_Name
                      ? "rotate-180"
                      : ""
                  }`}
                  size={22}
                  onClick={() => togglePackage(packageItem.Package_Name)}
                />
              </div>

              {/* শুধুমাত্র সিলেক্ট করা প্ল্যানে কাস্টমাইজেশন UI দেখাবে */}
              {activePackage === packageItem.Package_Name && (
                <div className="mt-10">
                  <Package_Update Data_of_packages={packageDataSocket} />
                </div>
              )}

              <div className="h-20px mb-10"></div>
            </div>
          </div>
        ))}
        <div
          className={`create_new_package ${
            Package_Creata_open ? "block" : "hidden"
          } fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur flex items-center justify-center`}
        >
          <div className="max-h-[90vh] w-[90%] md:w-[50%] bg-gray-900 rounded-lg p-6 overflow-y-auto custom-scroll">
            <IoClose
              className="absolute top-6 right-10 "
              color="white"
              size={26}
              onClick={() => setPackage_Creata_open(false)}
            />

          <CreatePackage />
          </div>
        </div>

        <style>
          {`
    .custom-scroll::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scroll::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    .custom-scroll::-webkit-scrollbar-thumb {
      background: #cca354;
      border-radius: 10px;
    }
    .custom-scroll::-webkit-scrollbar-thumb:hover {
      background: #a87e2a;
    }
  `}
        </style>
      </section>
    </div>
  );
};

export default PackageControl;
