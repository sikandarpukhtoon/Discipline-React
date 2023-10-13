import React, { useEffect, useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "../../Styles/Background.css";
import axios from "axios";
import NavbarScreen from "../NavBAr/NavbarScreen";
import { BASE_URL } from "../../api-url/urls";
const StudentPreviousRecord = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [studentId, setStudentId] = useState([]);
  var sId = location.state?.studentId;
  const [cases, setcases] = useState([]);
  useEffect(() => {
    getcases();
  }, []);
  const getcases = async (id) => {
    var response = await axios.get(
      BASE_URL + "Case/GetStudentCases?studentId=" + sId
    );
    console.log("Res==>  ", response?.data);
    if (response?.data) {
      setcases(response?.data);
    }
  };
  const handleFormSubmit = async (studentId) => {
    var pyaload = {
      caseid: "787",
      studentId: studentId,
    };
    console.log("rrrrrrrrrrrrrr", pyaload);
    var res = await axios.post(BASE_URL + "RequestAppeal/Reg10", pyaload);
    if (res?.data) {
      alert("saved Successfully  ");
    }
  };
  return (
    <>
      <NavbarScreen />

      <div className="backCustom" style={{ height: "600px" }}>
        <Table striped="columns" style={{ textAlign: "center", fontSize: 13 }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Reported By</th>
              <th>Reported To</th>
              <th>Student</th>
              <th>Category</th>
              <th>Date</th>
              <th>Description</th>
              {/* <th>Image</th> */}
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {cases?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item?.CaseId}</td>
                  <td>{item?.ReportedBy?.UserName}</td>
                  <td>{item?.ReportedTo?.UserName}</td>
                  <td>{item?.Student?.UserName}</td>
                  <td>{item?.Casecategory?.Categoryname}</td>
                  <td>{item?.ReportedDate}</td>
                  <td>{item?.Description}</td>
                  {/* <td>{item?.image}</td> */}
                  <td>{item?.CaseType}</td>
                  <td>
                    {!item?.IsMeetingSet ? (
                      <Button
                        onClick={() => {
                          navigate("/setmeetingschedule", {
                            state: { caseId: item?.CaseId },
                          });
                        }}
                        className="btn btn-primary"
                        style={{ fontWeight: "bold" }}
                      >
                        {"Schedule Meeting"}
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {
                          navigate("/casedetails", {
                            state: { caseId: item?.CaseId },
                          });
                        }}
                        className="btn btn-primary"
                        style={{ fontWeight: "bold" }}
                      >
                        {"View Details"}
                      </Button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default StudentPreviousRecord;
