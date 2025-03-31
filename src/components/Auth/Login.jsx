import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl  border-emerald-600  p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col text-white items-center justify-center"
          action=""
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 bg-transparent  outline-none border-emerald-600 py-3 text-xl rounded-full  px-5 placeholder:text-gray-400"
            type="text"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 mt-3 bg-transparent  outline-none border-emerald-600 py-3 text-xl rounded-full  px-5 placeholder:text-gray-400"
            type="text"
            placeholder="Enter password"
          />
          <button className="cursor-pointer mt-5 bg-orange-700 font-bold text-black outline-none  py-3 text-xl rounded-full  px-5 placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
