import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Button, FormControl, TextField } from "@mui/material";

export default function Create() {
  let history = useHistory();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const postData = (e) => {
    e.preventDefault();
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, {
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
      <TextField placeholder="Name" onChange={(e) => setName(e.target.value)} />

      <TextField placeholder="User Name" onChange={(e) => setUserName(e.target.value)} />

      <TextField placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <Button onClick={postData} type="submit">
        Save
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
