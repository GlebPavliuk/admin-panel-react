import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Box } from "@mui/material";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const setData = (data) => {
    let { id, name, username, email } = data;
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
  };

  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(() => {
      getData();
    });
  };

  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {APIData.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.username}</TableCell>
              <TableCell>{data.email}</TableCell>
              <Link to="/update">
                <TableCell>
                  <Button onClick={() => setData(data)}>Edit</Button>
                </TableCell>
              </Link>
              <TableCell>
                <Button onClick={() => onDelete(data.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link to="/create">
        <Button>Create New User</Button>
      </Link>
    </Box>
  );
}
