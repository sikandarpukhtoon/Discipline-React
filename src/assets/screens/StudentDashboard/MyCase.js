import React, { useEffect, useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "../../Styles/Background.css";
import axios from "axios";
import NavbarScreen from "../NavBAr/NavbarScreen";
import { BASE_URL } from "../../api-url/urls";
function MyCase() {
  const navigate = useNavigate();
  const [cases, setcases] = useState([]);
  useEffect(() => {
    var u = localStorage.getItem("@user");
    var user = JSON.parse(u);
    getcases(user?.Uid);
  }, []);
  const getcases = async (id) => {
    var response = await axios.get(
      BASE_URL + "Case/GetStudentCases?studentId=" + id
    );
    console.log("Res==>  ", response?.data);
    if (response?.data) {
      setcases(response?.data);
    }
  };
  return (
    <>
      <div className="backCustom" style={{ height: "600px" }}>
        <Table striped="columns" style={{ textAlign: "center", fontSize: 13 }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Reported By</th>
              <th>Reported To</th>
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
                  <td>{item?.Casecategory?.Categoryname}</td>
                  <td>{item?.ReportedDate}</td>
                  <td>{item?.Description}</td>
                  {/* <td>{item?.image}</td> */}
                  <td>{item?.CaseType}</td>
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
                      {"View Details"}
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default MyCase;
