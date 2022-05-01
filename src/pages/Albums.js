import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../hooks/AxiosHook";
import LogoLoading from "../assets/giphy.gif";
import LogoError from "../assets/error.gif";

export default function Albums() {
  const { response, loading, error } = useAxios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/albums",
  });

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setAlbums(response);
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
      <h1>Albums</h1>
      <Link to="/">To Dashboard</Link>
      <p></p>
      {albums.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </div>
  );
}
