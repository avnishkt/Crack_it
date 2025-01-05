
// import './App.css'

// function App() {
 

//   return (
    
//   <div className='text-center text-4xl background-color-red'>
//      calendar-app
//   </div>
     
   
//    )
// }

// export default App


//import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import ProtectedRoute from "./components/ProtectedRoutes";
import Register from "./components/Register";
import { ThemeContextProvider } from "./context/ThemeContext";
import AdminLogin from "./components/AdminLogin";

const App = () => {
  return (
    <ThemeContextProvider >
      <div style={{ height: 400, width: "100%" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/admin-dashboard"
              element={<ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>} />
            <Route
              path="/user-dashboard"
              element={<ProtectedRoute allowedRoles={["user"]}>
                <UserDashboard />
              </ProtectedRoute>
            } 
            />
          </Routes>
        </Router>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
