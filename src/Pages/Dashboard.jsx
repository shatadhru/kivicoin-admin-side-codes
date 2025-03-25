import Card from "../Components/Card"
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa6";
import io from "socket.io-client";
import { useEffect, useState } from "react";
const socket = io.connect("https://server.kivicoin.com");


function Dashboard() {

const [totaluser , setTotalUser] = useState(0);
const [totalPackages, settotalPackages] = useState(0);

useEffect(() => {
  socket.on("total-users", (totalUsers) => {
    setTotalUser(totalUsers);
  });
  socket.on("total-packages", (totalPackages) => {
    settotalPackages(totalPackages);
  });
},[socket] );


  return (
    <div>
      <section>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 m-10">
          <Card
            color_container="#cca354"
            title="Total User"
            value={totaluser}
            Icon={FaUserCheck}
            color_icon_container="black"
          />
          <Card
            color_container="#cca354"
            title="Total Packages"
            value={totalPackages}
            Icon={FaUserCheck}
            color_icon_container="black"
          />
          <Card
            color_container="#cca354"
            title="Total Packages"
            value="10"
            Icon={FaUserCheck}
            color_icon_container="black"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 m-10">
          <Card
            color_container="#cca354"
            title="Total User"
            value="10"
            Icon={FaUserCheck}
            color_icon_container="black"
          />
          <Card
            color_container="#cca354"
            title="Total User"
            value="10"
            Icon={FaUserCheck}
            color_icon_container="black"
          />
          <Card
            color_container="#cca354"
            title="Total User"
            value="10"
            Icon={FaUserCheck}
            color_icon_container="black"
          />
        </div>
      </section>
    </div>
  );
}

export default Dashboard