import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import CreactReport from "../CreactReport";
import SetTrashHold from "./SetTrashHold";
import ReportForm from "./REPORTFORM";
import { BASE_URL } from "../api-url/urls";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [activeRecord, setActiveRecord] = useState(null);
  const [previousRecord, setPreviousRecord] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cases, setCases] = useState([]);

  useEffect(() => {
    var u = localStorage.getItem("");
    var user = JSON.parse(u);
    getCases();
  }, []);

  const getCases = async () => {
    var response = await axios.get(BASE_URL + "Case/GetCases");
    console.log("Res==>  ", response?.data);
    if (response?.data) {
      setCases(response?.data);
    }
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const getCaseCountByStudent = (studentId) => {
    const studentCases = cases.filter(
      (item) => item.Student?.UserId === studentId
    );
    return studentCases.length;
  };

  return (
    <>
      <div className="backCustom" style={{ height: "2000px" }}>
        <div className="MainDiv">
          <div class="jumbotron text-center bg-sky">
            <h3 className="m-3">Admin Dashboard</h3>
          </div>
          <div class="jumbotron text-center bg-sky">
            <h3 className="m-3">Disciplinary Committee Assistent(BIIT)</h3>
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              type="submit"
              onClick={() => {
                navigate("/setvalue");
              }}
              style={{
                padding: "10px",
                borderRadius: "5px",
                background: "#007bff",
                color: "#fff",
                border: "none",
              }}
            >
              SetThreshold
            </button>
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              type="submit"
              onClick={() => {
                navigate("/Reg10");
              }}
              style={{
                padding: "10px",
                borderRadius: "5px",
                background: "#007bff",
                color: "#fff",
                border: "none",
              }}
            >
              Show Reg10Students
            </button>
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              type="submit"
              onClick={() => {
                navigate("/smoking10");
              }}
              style={{
                padding: "10px",
                borderRadius: "5px",
                background: "#007bff",
                color: "#fff",
                border: "none",
              }}
            >
              Show Reg10StudentsByCatagory
            </button>
          </div>

          <div className="d-flex container">
            <div className="container col-md-2">
              <CreactReport onAdd={() => getCases()} />
            </div>
            <div className="col-md-10">
              <Table striped="columns">
                <thead>
                  <tr>
                    <th>CaseId</th>
                    <th>ReportedBy</th>
                    <th>ReportedTo</th>
                    <th>Student</th>
                    <th>Category</th>
                    <th>ReportedDate</th>
                    <th>Description</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {cases?.map((item, index) => {
                    const caseCount = getCaseCountByStudent(
                      item?.Student?.UserId
                    );

                    return (
                      <tr key={index}>
                        <td>{item?.CaseId}</td>
                        <td>{item?.ReportedBy?.UserName}</td>
                        <td>{item?.ReportedTo?.UserName}</td>
                        <td>{item?.Student?.UserName}</td>
                        <td>{item?.Casecategory?.Categoryname}</td>
                        <td>{item?.ReportedDate}</td>
                        <td>{item?.Description}</td>
                        <td>
                          <Button
                            onClick={() => {
                              navigate("/casedetails", {
                                state: { caseId: item?.CaseId },
                              });
                            }}
                            className="btn btn-primary"
                            style={{ fontWeight: "bold" }}
                          >
                            CaseDetail
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminDashboard;
