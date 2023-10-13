import React, { useEffect } from "react";
import biit from "../images/logo.jpeg";
import "../Styles/Background.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../api-url/urls";
function SignIn({ changeAuthMode }) {
  const apiUrl = "http://localhost/DCA-FYP-API/api/User/GetAllUsers";
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    var user = localStorage.getItem("@user");
    console.log("Local storage value is ===> ", user);
    setCurrentUser(JSON.parse(user));
    if (JSON.parse(user)?.Uid) {
      if (user?.Usertype == "Admin") {
        navigate("/admin");
      }
    }
  }, []);
  function getallUserData() {
    return fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        return null;
      });
  }
  function login() {
    axios
      .post(BASE_URL + "Account/Login", {
        Username: email,
        Password: password,
      })
      .then(function (response) {
        var user = response.data;
        console.log(user.UserName);
        if (user.Uid != null) {
          localStorage.setItem("@user", JSON.stringify(user));
          console.log("User data ===>", user);

          if (user.Usertype === "Admin") {
            navigate("/admin");
          } else if (user.Usertype === "Student") {
            console.log(88);
            navigate("/studentdashboard");
          } else if (user.Usertype === "hoc") {
            navigate("/hocdashboard");
          } else if (user.Usertype === "Teacher") {
            navigate("/mydashboard");
          } else if (user.Usertype === "Director") {
            navigate("/db");
          } else {
            alert("Invalid user type");
          }
          // } else {
          //   alert("Account does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="backCustom " style={{ height: "1000px" }}>
      <div className="Auth-form-container backCustom">
        <div className="Auth-form">
          <div className="Auth-form-content">
            <div className="text-center">
              <h3>Disciplinary Committee Assistant </h3>
            </div>
            <div className="d-flex" style={{ justifyContent: "center" }}>
              <img src={biit} alt="BIIT logo" />
            </div>
            <h3>LogIn</h3>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mt-1"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary" onClick={() => login()}>
                LogIn
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
