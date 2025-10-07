import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const GuestLayout = () => {
  const { token } = useStateContext();
  console.log(token)
  if (token) {
    return <Navigate to="/" />;
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-purple-300 to-purple-100">
      <div className="bg-white rounded-xl shadow-lg  w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <svg className="w-16 h-16 text-purple-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#a78bfa"/>
            <path stroke="#fff" strokeWidth="2" d="M8 12l2 2 4-4"/>
          </svg>
          <h2 className="text-2xl font-bold text-purple-700">Welcome to BlogPost</h2>
          <p className="text-gray-500 text-sm mt-1">Sign in or create an account to continue</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default GuestLayout;
