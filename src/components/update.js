import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Button, FormControl, TextField } from "@mui/material";

export default function Update() {
  let history = useHistory();
  const [id, setID] = useState(null);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setUserName(localStorage.getItem("username"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const updateAPIData = (e) => {
    e.preventDefault();
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, {
        name,
        username,
        email,
      })
      .then(() => {
        history.push("/users");
      });
  };
  return (
    <FormControl className="create-form">
      <TextField placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField placeholder="User Name" value={username} onChange={(e) => setUserName(e.target.value)} />
      <TextField placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button type="submit" onClick={(e) => updateAPIData(e)}>
        Update
      </Button>
      <Button
        onClick={() => {
          history.push("/users");
        }}
      >
        Cancel
      </Button>
    </FormControl>
  );
}
