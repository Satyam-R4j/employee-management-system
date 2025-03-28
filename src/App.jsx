import React, { use, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = ()=>{

  }

  return (
    <>
      {!user ? <Login /> : ""}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard/> */}
    </>
  );
}

export default App;
