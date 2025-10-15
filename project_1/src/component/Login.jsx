import React, { useContext, useState } from "react";
import Usercontext from "../context/Usercontext";

export default function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { setuser } = useContext(Usercontext);

  const handlesubmit = (e) => {
    e.preventDefault();
    setuser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setusername(e.target.value)}
      />{" "}
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
}
