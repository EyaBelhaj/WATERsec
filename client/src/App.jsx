import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
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
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
