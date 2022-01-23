import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../slices/users";
import "./NavBar.css";

export default function NavBar() {
  const [userName, setUserName] = useState("John");

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const onLoginCLick = () => {
    dispatch(login(userName));
  };

  const onLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <div className="nav">
      {!users.isLoggedIn ? (
        <div>
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <button className="button button-blue" onClick={onLoginCLick}>
            Login
          </button>
        </div>
      ) : (
        <div>
          <span>{users.currentUser}</span>
          <button className="button button-red" onClick={onLogoutClick}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
