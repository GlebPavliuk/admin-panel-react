import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Albums from "./pages/Albums";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

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
