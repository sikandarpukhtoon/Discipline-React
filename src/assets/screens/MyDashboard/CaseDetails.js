import React from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { BASE_URL } from "../../api-url/urls";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
function CaseDetails() {
  const [cas, setcase] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.caseId;
  const [user, setUser] = useState({});
  useEffect(() => {
    var u = localStorage.getItem("@user");
    var user = JSON.parse(u);
    setUser(user);
    getcase();
  }, []);
  const getcase = async () => {
    var response = await axios.get(BASE_URL + "Case/GetCase?CaseId=" + id);
    console.log("Res==>  ", response?.data);
    if (response?.data) {
      setcase(response?.data);
    }
  };
  return (
    <div className="backCustom" style={{ height: "800px" }}>
      <h3 style={{ marginLeft: "300px" }}>Case Details</h3>
      <Table style={{ fontSize: "8", textAlign: "center" }} striped="columns">
        <thead>
          <tr>
            <th>Case Id</th>
            <th>Reported By</th>
            <th>Reported To</th>
            <th>Student</th>
            <th>Reported Date</th>
            <th>Description</th>
          </tr>
          <tr>
            <th>{cas?.CaseId}</th>
            <th>{cas?.ReportedBy?.UserName}</th>
            <th>{cas?.ReportedTo?.UserName}</th>
            <th>{cas?.Student?.UserName}</th>
            <th>{cas?.ReportedDate?.split("T")[0]}</th>
            <th>{cas?.Description}</th>
          </tr>
        </thead>
      </Table>
      <h3 style={{ marginLeft: "300px" }}>Meeting Details</h3>
      <Table striped="columns" style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>Case Id</th>
            <th>Meeting Date</th>
            <th>Venue</th>
          </tr>

          <tr>
            <th>{cas?.CaseId}</th>
            <th>{cas?.Meeting?.MeetingDate?.split("T")[0]}</th>
            <th>{cas?.Meeting?.Venue}</th>
          </tr>
        </thead>
      </Table>
      <h3 style={{ marginLeft: "300px" }}>Punishment Details</h3>
      <Table striped="columns" style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>Punishment</th>
            <th>Fine</th>
            <th>Startdate</th>
            <th>EndDate</th>
            <th>Action</th>
          </tr>
          <tr>
            <th>{cas?.Punishment?.PunishmentTitle}</th>
            <th>{cas?.Punishment?.Fine}</th>
            <th>{cas?.Punishment?.Startdate?.split("T")[0]}</th>
            <th>{cas?.Punishment?.EndDate?.split("T")[0]}</th>
            <td>
              {user?.Userttype == "Student" && (
                <Button
                  onClick={() => {
                    navigate("/appealform", { state: { case: cas } });
                  }}
                  className="btn btn-primary"
                  style={{ fontWeight: "bold" }}
                >
                  Appeal
                </Button>
              )}
              {user?.Usertype == "Admin" && (
                <Button
                  onClick={() => {
                    navigate("/progressReport", { state: { id: cas?.CaseId } });
                  }}
                  className="btn btn-primary"
                  style={{ fontWeight: "bold" }}
                >
                  Attendance
                </Button>
              )}
              {user?.Usertype == "Committee Member" && (
                <Button
                  onClick={() => {
                    navigate("/relxpunsihment", {
                      state: { id: cas?.CaseId },
                    });
                  }}
                  className="btn btn-primary"
                  style={{ fontWeight: "bold" }}
                >
                  Relax Punishment
                </Button>
              )}

              {user?.Usertype == "hoc" && (
                <Button
                  onClick={() => {
                    navigate("/relxpunsihment", {
                      state: { id: cas?.CaseId },
                    });
                  }}
                  className="btn btn-primary"
                  style={{ fontWeight: "bold" }}
                >
                  Relax Punishment
                </Button>
              )}
            </td>
          </tr>
        </thead>
      </Table>
    </div>
  );
}

export default CaseDetails;
