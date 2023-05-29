import "./App.css";

import Dashboard from "./pages/Dashboard";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import Users from "./pages/admin/Users";
import Sensors from "./pages/admin/Sensors";
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
import Auth from "./pages/Auth";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      const decodedUserToken = jwt_decode(token);
      setUser(decodedUserToken);
    }
  }, []);
  console.log(user);
  return (
    <Router className="App">
      {user ? (
        user?.isAdmin ? (
          <Layout>
            <Routes>
              <Route index element={<DashboardAdmin />} />
              <Route path="/Users" element={<Users />} />
              <Route path="/Sensors" element={<Sensors />} />
            </Routes>
          </Layout>
        ) : (
          <Layout>
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="/Analytics" element={<Analytics />} />
              <Route path="/Comparison" element={<Comparison />} />
              <Route path="/Notifications" element={<Notifications />} />
              <Route path="/Reporting" element={<Reporting />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Simulate" element={<Simulate />} />
              <Route path="/User" element={<User />} />
            </Routes>
          </Layout>
        )
      ) : (
        <Auth />
      )}
    </Router>
  );
}

export default App;
