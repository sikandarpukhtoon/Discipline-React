import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../api-url/urls";
import { Table } from "reactstrap";
import { Button } from "reactstrap";

function ShowAppeal() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
  };
  const navigate = useNavigate();
  const [cases, setcases] = useState([]);
  useEffect(() => {
    var u = localStorage.getItem("@user");
    var user = JSON.parse(u);
    getcases();
  }, []);
  const getcases = async () => {
    var response = await axios.get(
      BASE_URL + "Requestappeal/GetRequestAppeals"
    );
    console.log("Res==>  ", response?.data);
    if (response?.data) {
      setcases(response?.data);
    }
  };
  return (
    <>
      <Table striped="columns" style={{ textAlign: "center", fontSize: 13 }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Punishment</th>
            <th>AssignedBy</th>
            <th>Startdate</th>
            <th>EndDate</th>
            <th>StudentComments</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {cases?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item?.CaseId}</td>
                <td>{item?.punishment?.punishmentTitle}</td>
                <td>{item?.ReportedTo?.UserName}</td>
                <td>{item?.Punishment?.Startdate}</td>
                <td>{item?.Punishment?.EndDate}</td>
                <td>{item?.Appeal?.comments}</td>

                <td>
                  <Button
                    onClick={() => {
                      navigate("/db/comments", {
                        state: { case: item.CaseId },
                      });
                    }}
                    className="btn btn-primary"
                    style={{ fontWeight: "bold" }}
                  >
                    Add Comment
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default ShowAppeal;
