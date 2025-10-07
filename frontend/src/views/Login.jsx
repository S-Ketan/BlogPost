import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onSubmit = (e) => {
    e.preventDefault;
  };
  const onChange = () => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-[100vh] w-[30vw] flex items-center justify-center bg-gradient-to-br from-purple-700 to-pink-400 ">
      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded-xl shadow-lg min-w-[320px] flex flex-col gap-5"
      >
        <h2 className="text-purple-700 text-2xl font-bold text-center mb-2">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="px-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-base"
          name="email"
          value={formData.email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="px-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-base"
          name="password"
          value={formData.password}
          onChange={onChange}
        />

        <button className="bg-gradient-to-r from-purple-700 to-pink-400 text-white rounded-md py-3 font-bold text-base hover:from-purple-800 hover:to-pink-500 transition-colors">
          Sign In
        </button>
        <div className="text-center mt-2">
          <a href="/signup" className="text-sm text-purple-700 hover:underline">
            Don't have an account? Register
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
