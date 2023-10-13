import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../api-url/urls";
function ChooceHoc() {
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Usertype, setUsertype] = useState("Hoc");
  const Save = async () => {
    var pyaload = {
      UserName: UserName,
      passwrd: password,
      Role: Usertype,
    };
    console.log(pyaload);
    var res = await axios.post(BASE_URL + "User/AddUser", pyaload);
    if (res?.data) {
      console.log("res ================= >", res?.data);
      alert("saved Successfully");
    }
  };

  return (
    <form>
      <div>
        <div className="form-group mt-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter username"
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter username"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Role</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Hoc"
            readOnly
            onChange={(event) => setUsertype(event.target.value)}
          />
        </div>
      </div>
      <div
        className="d-flex"
        style={{ justifyContent: "center", marginTop: "20px" }}
      >
        <Button onClick={() => Save()} className="btn btn-primary">
          save
        </Button>
      </div>
    </form>
  );
}

export default ChooceHoc;
