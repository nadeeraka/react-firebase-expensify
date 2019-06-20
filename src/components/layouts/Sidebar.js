import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <Link className="btn btn-success btn-block" to="/client/add">
        <i className="fas fa-plus" /> Add
      </Link>
    </div>
  );
}
