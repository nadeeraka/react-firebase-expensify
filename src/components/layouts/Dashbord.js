import React from "react";
import Sidebar from "./Sidebar";
import Client from "../clients/Client";

export default function Dashbord() {
  return (
    <div className="row">
      <div className="col-md-10">
        <Client />
      </div>
      <div className="col-md-2">
        <Sidebar />
      </div>
    </div>
  );
}
