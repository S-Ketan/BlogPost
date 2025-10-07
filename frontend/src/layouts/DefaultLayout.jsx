import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const DefaultLayout = () => {
  const onLogout = () => {};
const { token } = useStateContext();
console.log("Token in DefaultLayout:", token); // Debugging line
  if(!token){
    return <Navigate to="/login" />
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
  <aside className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-purple-700 to-purple-500 flex flex-col justify-between py-8 px-6 shadow-lg z-30">
        <div>
          <h2 className="text-3xl font-bold text-white mb-10 tracking-wide">Bloggin Shoggin</h2>
          <nav className="flex flex-col gap-4">
            <Link
              to="/posts"
              className="p-3 rounded-lg bg-purple-700 hover:bg-purple-800 transition text-white font-medium shadow-md"
            >
              Global Feed
            </Link>
            <Link
              to="/users"
              className="p-3 rounded-lg bg-purple-700 hover:bg-purple-800 transition text-white font-medium shadow-md"
            >
              My Profile
            </Link>
          </nav>
        </div>
        <div className="mt-10">
          <button
            onClick={onLogout}
            className="w-full py-2 rounded-lg bg-white text-purple-700 font-semibold hover:bg-purple-100 transition shadow"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50 min-h-screen ml-64">
        {/* Header */}
        <header className="fixed top-0 left-64 right-0 h-20 flex items-center justify-end px-10 shadow bg-white z-40">
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold text-gray-700">Ketan</span>
            <img
              src="https://ui-avatars.com/api/?name=Ketan&background=8b5cf6&color=fff"
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-purple-500"
            />
          </div>
        </header>
        {/* Main */}
        <main className="flex-1 p-10 pt-20 overflow-auto">
          <div className="max-w-5xl mx-auto min-h-screen">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
