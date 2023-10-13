import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Table } from "reactstrap";
import { BASE_URL } from "../../api-url/urls";

function AllCases() {
  const [cases, setcases] = useState([]);
  useEffect(() => {
    getcases();
  }, []);
  const getcases = async () => {
    var response = await axios.get(BASE_URL + "Case/GetCases");
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
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default AllCases;
