import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import Albums from "../src/pages/Albums";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <header>
          <h1>Dashboard</h1>
          <Link to="/users">Users</Link> <span> </span>
          <Link to="/albums">Almbus</Link>
        </header>
        <div className="main">
          <div>
            <Route exact path="/create" component={Create} />
          </div>
          <div style={{ marginTop: 20 }}>
            <Route exact path="/users" component={Read} />
          </div>
          <div style={{ marginTop: 20 }}>
            <Route exact path="/albums" component={Albums} />
          </div>
          <Route path="/update" component={Update} />
        </div>
      </Router>
    </>
  );
}

export default App;
