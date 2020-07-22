import React, { useState } from "react";
import { Link } from "react-router-dom";

const SigninScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h3>Signin</h3>
          </li>
          <li>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li>
            <button type="submit" className="button primary">
              Signin
            </button>
          </li>
          <li>new to CarPartsGH?</li>
          <li>
            <Link to="/register" className="button">
              create your CarPartsGh account
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SigninScreen;
