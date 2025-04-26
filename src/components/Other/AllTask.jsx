import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log(authData);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded overflow-auto h-60">
      <div className="bg-zinc-700 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 text-blue-600">Employee Name</h2>
        <h3 className="w-1/5 text-yellow-600">New Task</h3>
        <h5 className="w-1/5 text-green-600 ">Active Task </h5>
        <h5 className="w-1/5 text-orange-600 ">Completed </h5>
        <h5 className="w-1/5 text-red-600 ">Failed </h5>
      </div>
      <div className="h-[80%] overflow-auto">
        {authData.employees.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="bg-slate-800 mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="w-1/5 text-blue-600">{elem.firstName}</h2>
              <h3 className="w-1/5 text-yellow-600">Task</h3>
              <h5 className="w-1/5 text-green-600 ">Status </h5>
              <h5 className="w-1/5 text-orange-600 ">Status </h5>
              <h5 className="w-1/5 text-red-600 ">Status </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
