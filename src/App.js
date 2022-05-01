import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Albums from "./components/Albums";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "albums", element: <Albums /> },
    { path: "users", element: <Users /> },
  ]);

  return routes;
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
