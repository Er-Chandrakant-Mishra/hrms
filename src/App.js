import React from "react";
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import SuperAdmin from "./components/admin/SuperAdmin";
import Contact from "./components/Contact";
import EmpDetails from "./components/EmpDetails";
import EmpList from "./components/EmpList";
import PendingApprovals from './components/PendingApprovals';
// import Header from "./pages/Header";
import UserProfile from "./components/UserProfile";
import Login1 from "./pages/Login1";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
function App() {
  return (
    <Router >
      <div>
        <Routes>
        <Route path="/hrms" element={<Login1 />} />
          <Route path="/home" element={<EmpDetails />}/>
          <Route path="/myprofile" element={<EmpList />} />
          <Route path="/updateprofile" element={<UserProfile />} />
          <Route path="/empDetails" element={<EmpDetails />} />
          <Route path="/admin" element={<SuperAdmin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employee" element={<PendingApprovals />} />
          <Route path="/login" element={<Login1 />} />
          <Route component={PageNotFound} />
        </Routes>
        <nav>
          <Link to="employee"></Link>
        </nav>
        {/* <nav>
          <Link to="/myProfile">My Profile</Link>
          <Link to="/update-profile">Update Profile</Link>
          <Link to="/empDetails">Employee Details</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/contact">Contact</Link> 
          <Link to="/employee">Employee</Link>
          <Link to="/login">Login</Link>
        </nav> */}


      </div>

    </Router>
  );
}

export default App;












