import React from "react";
import Sidebar from "./Sidebar";
import Client from "../clients/Client";

export default function Dashbord() {
  return (
    <div>
      <Sidebar />
      <Client />
    </div>
  );
}
