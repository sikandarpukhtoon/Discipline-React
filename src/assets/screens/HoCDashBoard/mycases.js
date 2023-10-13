import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Table, Card, Button } from "react-bootstrap";
import { BASE_URL } from "../../api-url/urls";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
function mycases() {
  const navigate = useNavigate();
  const PreviousRecord = ["Std Name", "std Name", "std name", "laparo"];
  const [cases, setcases] = useState([]);
  useEffect(() => {
    var u = localStorage.getItem("@user");
    var user = JSON.parse(u);
    getcases(user?.Uid);
  }, []);
  const getcases = async (id) => {
    var response = await axios.get(
      BASE_URL + "Case/GetTeacherCases?ReportedTo=" + id
    );
    console.log("Res==>  ", response?.data);
    if (response?.data) {
      setcases(response?.data);
    }
  };
  const updateCaseType = async (id) => {
    navigate("/studentperviousrecord", { state: { studentId: id } });
  };

  return (
    <Table style={{ fontSize: "8" }} striped="columns">
      <thead>
        <tr>
          <th>CaseId</th>
          <th>ReportedBy</th>
          <th>ReportedTo</th>
          <th>Student</th>

          <th>ReportedDate</th>
          <th>Description</th>
          <th>Image</th>
          <th>Casetype</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        {cases?.map((item, index) => {
          {
            console.log(item, "-----------------------eeieieii");
          }
          return (
            <tr style={{ fontSize: "8" }} key={index}>
              <td>{item?.CaseId}</td>
              <td>{item?.ReportedBy?.UserName}</td>
              <td>{item?.ReportedTo?.UserName}</td>
              <td>{item?.Student?.UserName}</td>

              <td>{item?.ReportedDate}</td>
              <td>{item?.Description}</td>
              <td>{item?.image}</td>
              <td>{item?.CaseType}</td>
              <td>
                <Button
                  onClick={() => {
                    updateCaseType(item?.Student?.Uid);
                  }}
                  className="btn btn-primary"
                  style={{ fontWeight: "bold" }}
                >
                  <VisibilityIcon />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default mycases;
