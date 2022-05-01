import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <header>
      <h1>Dashboard</h1>
      <Link to="/users">Users</Link> <span> </span>
      <Link to="/albums">Almbus</Link>
    </header>
  );
}
