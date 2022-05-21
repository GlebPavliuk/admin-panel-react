import { Link } from "react-router-dom";
import useAxios from "../hooks/AxiosHook";
import LogoLoading from "../assets/giphy.gif";
import LogoError from "../assets/error.gif";
import { Box, Typography, ListItem } from "@mui/material";

export default function Users() {
  const { response, loading, error } = useAxios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
  });

  if (loading) {
    return <img src={LogoLoading} alt="loading..." />;
  }

  if (error) {
    return <img src={LogoError} alt="Error..." />;
  }
  return (
    <Box>
      <Typography variant="h1">Users </Typography>
      <Link to="/">To Dashboard</Link>
      <p></p>
      {response.map((el) => (
        <ListItem key={el.id}>
          {el.name} {el.username} {el.email}
        </ListItem>
      ))}
    </Box>
  );
}
