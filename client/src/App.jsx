import "./App.css";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Analytics from "./pages/Analytics";
import Comparison from "./pages/Comparison";
import Notifications from "./pages/Notifications";
import Reporting from "./pages/Reporting";
import Settings from "./pages/Settings";
import Simulate from "./pages/Simulate";
import Layout from "./layout/Layout";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Layout>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Comparison" element={<Comparison />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Reporting" element={<Reporting />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Simulate" element={<Simulate />} />
          <Route path="/User" element={<User />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
