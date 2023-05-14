import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function Profile() {
  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(false);
  const [currentUser, setCurrentUser] = useState({ username: "" });

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    if (!currentUser) setRedirect("/login");
    setCurrentUser(currentUser);
    setUserReady(true);

  }, []);

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return (
    <div className="container">
      {userReady ? (
        <div>
          <header className="jumbotron">
            <h3>
              <strong>{currentUser.username}</strong> Profile
            </h3>
          </header>
          <p>
            <strong>Token:</strong>{" "}
            {currentUser.accessToken.substring(0, 20)} ...{" "}
            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
          </p>
          <p>
            <strong>Id:</strong> {currentUser.id}
          </p>
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
          <p>
            <strong>Workout Day Id:</strong> {currentUser.workoutDayId}
          </p>
          <strong>Authorities:</strong>
          <ul>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
          </ul>
          <button className="btn btn-danger" onClick={logOut}>
            Log Out
          </button>
        </div>
      ) : null}
    </div>
  );
}
