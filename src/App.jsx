import React, { use, useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  // useEffect(()=>{
  //   if(authData)
  //   {
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser)
  //     {
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[authData])

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser({ role: "admin" });
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        setUser({ role: employee });
      }
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" })
      );
    } else {
      alert("Invalid Credential");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard/> */}
    </>
  );
}

export default App;
