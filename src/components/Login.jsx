import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../utils/constants";

const Login = () => {
  // Login states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup states
  const [signupFirstName, setSignupFirstName] = useState("");
  const [signupLastName, setSignupLastName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  Login API call
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId: loginEmail, password: loginPassword },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  //  Signup API call
  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName: signupFirstName,
          lastName: signupLastName,
          emailId: signupEmail,
          password: signupPassword,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>
          <div>
            {!isLoginForm && (
              <>
                {/* Signup First Name */}
                <label className="form-control w-full max-w-xs my-2">
                  <span className="label-text">First Name</span>
                  <input
                    type="text"
                    value={signupFirstName}
                    onChange={(e) => setSignupFirstName(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>

                {/* Signup Last Name */}
                <label className="form-control w-full max-w-xs my-2">
                  <span className="label-text">Last Name</span>
                  <input
                    type="text"
                    value={signupLastName}
                    onChange={(e) => setSignupLastName(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>

                {/* Signup Email */}
                <label className="form-control w-full max-w-xs my-2">
                  <span className="label-text">Email ID</span>
                  <input
                    type="text"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>

                {/* Signup Password */}
                <label className="form-control w-full max-w-xs my-2">
                  <span className="label-text">Password</span>
                  <input
                    type="password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </>
            )}

            {isLoginForm && (
              <>
                {/* Login Email */}
                <label className="form-control w-full max-w-xs my-2">
                  <span className="label-text">Email ID</span>
                  <input
                    type="text"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>

                {/* Login Password */}
                <label className="form-control w-full max-w-xs my-2">
                  <span className="label-text">Password</span>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </>
            )}
          </div>

          <p className="text-red-500">{error}</p>

          <div className="card-actions justify-center m-2">
            <button
              className="btn btn-primary"
              onClick={isLoginForm ? handleLogin : handleSignUp}
            >
              {isLoginForm ? "Login" : "Sign Up"}
            </button>
          </div>

          <p
            className="m-auto cursor-pointer py-2"
            onClick={() => setIsLoginForm((val) => !val)}
          >
            {isLoginForm
              ? "New User? Signup Here"
              : "Existing User? Login Here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
