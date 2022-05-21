import { Link } from "react-router-dom";
import useAxios from "../hooks/AxiosHook";
import LogoLoading from "../assets/giphy.gif";
import LogoError from "../assets/error.gif";
import { Box, Typography, ListItem } from "@mui/material";

export default function Albums() {
  const { response, loading, error } = useAxios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/albums",
  });

  if (loading) {
    return <img src={LogoLoading} alt="loading..." />;
  }

  if (error) {
    return <img src={LogoError} alt="Error..." />;
  }

  return (
    <Box>
      <Typography variant="h1">Albums</Typography>
      <Link to="/">To Dashboard</Link>
      <p></p>
      <Box
        component="ul"
        sx={{
          padding: "10 0",
          listStyle: "none",
          display: "flexbox",
          gap: "30px",
        }}
      >
        {response.map((el) => (
          <ListItem key={el.id}>{el.title}</ListItem>
        ))}
      </Box>
    </Box>
  );
}
