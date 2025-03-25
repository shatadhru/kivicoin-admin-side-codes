
import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("https://server.kivicoin.com");
import "./assets/css/all.min.css"
import "./assets/css/line-awesome.min.css"
import "./assets/css/main.css"
import "./assets/css/vendor/animate.min.css"
import "./assets/css/vendor/dots.css"
import "./assets/css/vendor/slick.css"
import {
  FaTachometerAlt,
  FaChartLine,
  FaUsers,
  FaMoneyBillWave,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";
import { IoPower } from "react-icons/io5";
import { BsJournalCode } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { RiMenuUnfold4Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";






import Logo from "./assets/images/logo.png"
import Logo2 from "./assets/images/logo2.png"
import Dashboard from "./Pages/Dashboard";
import Investment from "./Pages/Investment";
import Users from "./Pages/Packages";
import Transactions from "./Pages/Transactions";
import Settings from "./Pages/Settings";
import Reports from "./Pages/Reports";
import PackageControl from "./Pages/Packages";

function App() {

  const[ totalUser , setTotalUser ] = useState(0)


useEffect(() => {



}, []);


const [page, setPage] = useState(<Dashboard />);

const [heading , setHeading] = useState("Dashboard")

const [inMobileMood , setInMobileMood] = useState(false);

const dashboardMenus = [
  {
    title: "Dashboard",
    icon: FaTachometerAlt,
    pageLink: () => setPage(<Dashboard />) && setHeading("Dashboard"),
  },
  {
    title: "Investments",
    icon: FaChartLine,
    pageLink: () => setPage(<Investment />) && setHeading("Investments"),
  },
  { title: "Blog", icon: FaUsers, pageLink: () => setPage(<Users />) },
  { title: "Package Manager", icon: FaUsers, pageLink: () => setPage(<PackageControl />) },
 

  { title: "Users", icon: FaUsers, pageLink: () => setPage(<Users />) },
  {
    title: "Transactions",
    icon: FaMoneyBillWave,
    pageLink: () => setPage(<Transactions />),
  },
  { title: "Reports", icon: FaFileAlt, pageLink: () => setPage(<Reports />) },
  { title: "Settings", icon: FaCog, pageLink: () => setPage(<Settings />) },
];




  return (
    <div>
      <section>
        <div className="container flex gap-2 items-center justify-center ">
          <div
            className={`container_part_1 hidden lg:block w-[20%] h-[96vh] overflow-hidden bg-gray-900  flex flex-col  `}
          >
            <div className="logo_box max-w-[160px] pt-[20px] pl-[20px]">
              <img src={Logo} className="" alt="" />
            </div>
            <div className="devider w-[100%] h-[0.5px] bg-gray-800 mt-2"> </div>
            <div className="menu_box mt-2 ml-6">
              <ul className="">
                {dashboardMenus.map((menu, index) => (
                  <li key={index} className="flex items-center  gap-2">
                    <div className="menu_box flex items-center justify-center gap-2 pt-6">
                      <menu.icon />
                      <button
                        onClick={menu.pageLink}
                        className="text-[#fff] hover:text-[#ff9100] active:text-[#ff9100]"
                      >
                        {menu.title}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="text-box mt-[20px] flex gap-2 items-center">
                <button className="text-white p-2 rounded text-[14px] bg-red-500 flex items-center gap-2">
                  {" "}
                  <IoPower /> Logout
                </button>
                <button className="text-white p-2 rounded text-[14px] bg-green-500 flex items-center gap-2">
                  {" "}
                  <BsJournalCode /> Developer
                </button>
              </div>
            </div>
          </div>

          <div
            className={`mobile_drawer absolute ${
              inMobileMood === true ? "block" : "hidden"
            } z-[10000] top-0 left-0  lg:hidden w-[300px] h-[100%] overflow-hidden bg-gray-900 rounded-2xl flex  flex-col shadow-[0px_4px_10px_rgba(255,255,255,0.25)]  `}
          >
            <IoClose
              className="absolute top-6 left-65"
              color="white"
              size={26}
              onClick={() => setInMobileMood(false)}
            />

            <div className="logo_box max-w-[160px] pt-[20px] pl-[20px]">
              <img src={Logo} className="" alt="" />
            </div>
            <div className="devider w-[100%]  h-[0.5px] bg-gray-800 mt-2">
              {" "}
            </div>
            <div className="menu_box mt-2 ml-6">
              <ul className="">
                {dashboardMenus.map((menu, index) => (
                  <li key={index} className="flex items-center  gap-2">
                    <div className="menu_box flex items-center justify-center gap-2 pt-6">
                      <menu.icon />
                      <button
                        onClick={menu.pageLink}
                        className="text-[#fff] hover:text-[#ff9100] active:text-[#ff9100]"
                      >
                        {menu.title}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="text-box mt-[20px] flex gap-2 items-center">
                <button className="text-white p-2 rounded text-[14px] bg-red-500 flex items-center gap-2">
                  {" "}
                  <IoPower /> Logout
                </button>
                <button className="text-white p-2 rounded text-[14px] bg-green-500 flex items-center gap-2">
                  {" "}
                  <BsJournalCode /> Developer
                </button>
              </div>
            </div>
          </div>

          <div className="container_part_2 w-[100%] lg:w-[80%] h-[96vh] overflow-y-auto bg-gray-900  ">
            <div className="title-box max-w-[160px] pt-[20px] pl-[20px] ">
              <div className="heading_box absolute top-0 bg-gray-900 fixed w-[100%] h-[80px] bg-">
                <div className="text-[#fff] mt-6 text-[30px]  font-bold h-[38px] flex items-center gap-3 ">
                  <RiMenuUnfold4Line
                    className="lg:hidden"
                    size={24}
                    onClick={
                      inMobileMood === false
                        ? () => setInMobileMood(true)
                        : () => setInMobileMood(false)
                    }
                  />
                  <h1>✨</h1>
                  <h1>{heading}</h1>
                </div>
              </div>
            </div>
            <div className="devider w-[100%] h-[0.5px] bg-gray-800 mt-6"> </div>
            {page}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App