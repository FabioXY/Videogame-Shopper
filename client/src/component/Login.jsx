import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost5173/");
      nickname, password;
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div>Login</div>
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
      <p>OR</p>
      <Link to="/Signup">Signup</Link>
    </>
  );
}

export default Login;
