import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../api-url/urls";
import { Button, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../Styles/Background.css";

const MeetingDetail = () => {
  const navigate = useNavigate();

  const [cases, setcases] = useState([]);
  useEffect(() => {
    var u = localStorage.getItem("@user");
    var user = JSON.parse(u);
    getcases(user?.Uid);
  }, []);
  const getcases = async (id) => {
    console.log("Teacher id ====>", id);
    var response = await axios.get(
      BASE_URL + "Case/GetMeetingCases?teacherId=" + id
    );
    console.log("Res==>  ", response?.data);
    if (response?.data) {
      setcases(response?.data);
    }
  };

  return (
    <div className="backCustom" style={{ height: "600px" }}>
      <h3 style={{ marginLeft: "300px" }}>Meeting Details</h3>
      <Table striped="columns">
        <thead>
          <tr>
            <th>Case Id</th>
            <th>Reported By</th>
            <th>Student</th>
            <th>Reported Date</th>
            <th>Meeting Date</th>
            <th>Venue</th>
            <th>Action</th>
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
                <td>{item.ReportedBy.UserName}</td>
                <td>{item?.Student?.UserName}</td>
                <td>{item?.ReportedDate?.split("T")[0]}</td>
                <td>{item?.Meeting?.MeetingDate?.split("T")[0]}</td>
                <td>{item?.Meeting?.Venue}</td>
                <td>
                  <Button
                    onClick={() => {
                      navigate("/assignpunishment", {
                        state: { caseId: item?.CaseId },
                      });
                    }}
                    className="btn btn-primary"
                    style={{ fontWeight: "bold" }}
                  >
                    Assign Punishment
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default MeetingDetail;
