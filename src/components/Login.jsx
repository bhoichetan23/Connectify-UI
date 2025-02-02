import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, SetEmailId] = useState("chetan@gmail.com");
  const [password, SetPassword] = useState("Chetan@123");
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res = axios.post("", {
        email,
        password,
      });
      dispatch(addUser);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-sky-300 text-primary-content w-96">
        <div className="card-body p-4">
          <h2 className="card-title justify-center">Login Now!</h2>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email Id</span>
            </div>
            <input
              type="text"
              value={email}
              className="input input-bordered w-full max-w-xs"
              onClick={(e) => {
                SetEmailId(e.target.value);
              }}
            />
            <div className="label"></div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              value={password}
              className="input input-bordered w-full max-w-xs"
              onClick={(e) => {
                SetPassword(e.target.value);
              }}
            />
            <div className="label"></div>
          </label>
          <div className="card-actions justify-center">
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
