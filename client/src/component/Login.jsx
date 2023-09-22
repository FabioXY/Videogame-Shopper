import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [lg, setLg] = useState(false);

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5174/ope/login", {
        nickname,
        password,
      });
      console.log(res.data);
      setLg(res.data.message);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
    <div className=" flex">
      <div className="">
      <div>Login</div>
      <div>{lg && <div>{lg}</div>}</div>
      <form action="POST">
        <input
          type="Nickname"
          placeholder="Nickname"
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
        <input
          type="Password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" onClick={submit} />
      </form>
      <p>Username: ciao Password: ciao</p>
      </div>
      </div>
    </>
  );
}

export default Login;
