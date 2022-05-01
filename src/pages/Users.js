import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../hooks/AxiosHook";
import LogoLoading from "../assets/giphy.gif";
import LogoError from "../assets/error.gif";

export default function Users() {
  const { response, loading, error } = useAxios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setUsers(response);
    }
  }, [response]);

  if (loading) {
    return <img src={LogoLoading} alt="loading..." />;
  }

  if (error) {
    return <img src={LogoError} alt="Error..." />;
  }
  return (
    <div>
      <h1>Users</h1>
      <Link to="/">To Dashboard</Link>
      <p></p>
      {users.map((el) => (
        <li key={el.id}>{el.name}</li>
      ))}
    </div>
  );
}
