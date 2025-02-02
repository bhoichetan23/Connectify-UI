import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, SetEmailId] = useState("chetan@gmail.com");
  const [password, SetPassword] = useState("Chetan@123");

  const handleLogin = async () => {
    try {
      const res = axios.post("http://localhost:5000", {
        email,
        password,
      });
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <div>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email ID:</span>
              </div>
              <input
                type="text"
                value={emailId}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                value={password}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
