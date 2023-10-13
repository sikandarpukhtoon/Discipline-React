import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { BASE_URL } from "../../api-url/urls";
import { Navigate, useNavigate } from "react-router-dom";

function NewHoc() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getuser();
  }, []);

  const getuser = async () => {
    var res = await axios.get(BASE_URL + "User/GetUsersByRole?role=hoc");
    if (res?.data) {
      console.log("D===============================>", res?.data[0]);
      setUsers(res.data);
    }
  };
  const block = async (id) => {
    var res = await axios.get(BASE_URL + "User/Block?userId=" + id);
    if (res?.data) {
      getuser();
    }
  };

  const unblock = async (id) => {
    var res = await axios.get(BASE_URL + "User/Block?userId=" + id);
    if (res?.data) {
      getuser();
    }
  };

  return (
    <div className="backCustom" style={{ height: "600px" }}>
      <Table striped style={{ textAlign: "center", fontSize: 13 }}>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Name</th>
            <th>UserType</th>
            {/* <th>New</th> */}
            <th>Block</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item, index) => {
            return (
              <tr style={{ fontSize: "8" }} key={index}>
                <td>{item?.Uid}</td>
                <td>{item?.UserName}</td> {/* Display the name */}
                <td>{item?.Usertype}</td> {/* Display the userType */}
                {/* <td>
                  <Button
                    onClick={() => {
                      navigate("/db/chooce");
                    }}
                    className="btn btn-primary"
                    style={{ fontWeight: "bold" }}
                  >
                    New
                  </Button>
                </td> */}
                {item?.IsActive ? (
                  <td>
                    <Button
                      className="btn btn-primary"
                      onClick={() => block(item?.Uid)}
                      style={{ fontWeight: "bold" }}
                    >
                      Block
                    </Button>
                  </td>
                ) : (
                  <td>
                    <Button
                      className="btn btn-primary"
                      onClick={() => unblock(item?.Uid)}
                      style={{ fontWeight: "bold" }}
                    >
                      Un Block
                    </Button>
                  </td>
                )}{" "}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default NewHoc;
