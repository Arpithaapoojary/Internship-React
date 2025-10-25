import React, { useState } from "react";
import axios from "axios";

function Register() {
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
        "https://reqres.in/api/login", //eve:holt@reqres.in.  pass-cityclicker
        payload,
        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        }
      );
      localStorage.setItem("login", res.data.token);
      console.log("data view", res);
    } catch (error) {
      console.log("login failed");
    }
  };

  return (
    <div>
      {""}
      <form className="p-3">
        <label>Email</label>
        <input
          type="text"
          value={email}
          className="border border-block"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>password</label>
        <input
          type="text"
          value={password}
          className="border border-block"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handlelogin}
          className="border border-block"
          onChange={(e) => setPassword(e.target.value)}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Register;
