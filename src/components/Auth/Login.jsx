import React from "react";

const Login = () => {
  return( 
  <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 bg-white border-red-600 ">
        <form className="flex flex-col items-center justify-center"  action="">
          <input className="border-2 outline-none border-emerald-600 py-3 text-xl rounded-full  px-5" type="text" placeholder="Enter your email"/>
          <input type="text" placeholder="Enter your password" />
          <button className="">Log in</button>

        </form>
      </div>
  </div>);
};

export default Login;
