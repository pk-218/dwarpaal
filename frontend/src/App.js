import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentLoginForm from "./components/StudentLoginForm";
import StaffLoginForm from "./components/StaffLoginForm";
import Dashboard from "./screens/Dashboard";
import UserInfoGrid from "./components/UserInfoGrid";
import RequestForm from "./screens/RequestForm";
import FacultyConfirmation from "./screens/FacultyConfirmation";
import { useState } from "react";
import FAQ from "./screens/FAQ";
import LandingPage from "./screens/LandingPage";
import Homepage from "./screens/Homepage";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const hasLoggedInAsStudent = JSON.parse(
    localStorage.getItem("hasLoggedInAsStudent")
  );

  return (
    <Router>
      <>
        {isAdmin ? (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user-info" element={<UserInfoGrid />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login/student" element={<StudentLoginForm />} />
            <Route path="/login/staff" element={<StaffLoginForm />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/request-form" element={<RequestForm />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/fcon" element={<FacultyConfirmation />} />
          </Routes>
        )}

        {/* {hasLoggedInAsStudent ?
          <Routes>
            <Route path='/home' element={<Homepage />} />
            <Route path='/request-form' element={<RequestForm />} />
            <Route path='/faq' element={<FAQ />} />
          </Routes>
          :
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login/student' element={<StudentLoginForm />} />
            <Route path='/login/staff' element={<StaffLoginForm />} />
          </Routes>
        } */}
      </>
    </Router>
  );
}

export default App;
