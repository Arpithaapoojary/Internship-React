import React, { useState } from "react";
import axios from "axios";

import toast, { Toaster } from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = async (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post(
        "https://reqres.in/api/login",
        payload,

        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        }
      );

      localStorage.setItem("login", res.data.token);
      console.log("Login Success:", res);

      toast.success("Login successful! Welcome.");
    } catch (error) {
      console.error("Login Failed:", error);
      toast.error("login failed");

      //   const errorMessage =
      //     error.response?.data?.error || "Invalid email or password.";
      //   toast.error(`Login failed: ${errorMessage}`);
    }
  };

  return (
    <div>
      
      <Toaster position="top-right" />

      <form className="p-3">
        <label>Email</label>
        <input
          type="text"
          value={email}
          className="border border-block"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
         
          type="password"
          value={password}
          className="border border-block"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
         
          type="submit"
          onClick={handlelogin}
          className="border border-block"
        >
          Login
        </button>
      </form>
    </div>
  );
}


export default Login;
