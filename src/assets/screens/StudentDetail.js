import React, { useEffect, useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

import { BASE_URL } from "../api-url/urls";

function StudentDetail() {
  const [categoryId, setCategoryId] = useState(0);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  });
  const getCategories = async () => {
    var response = await axios.get(BASE_URL + "Committee/GetCategories");
    if (response?.data) {
      setCategories(response?.data);
      setCategoryId(response?.data[0]?.Categoryid);
    }
  };
  const location = useLocation();
  const id = location.state?.Uid;
  const navigate = useNavigate();
  const [cases, setcases] = useState([]);
  const [Scases, setScases] = useState([]);

  useEffect(() => {
    getcases();
  }, []);
  const getcases = async () => {
    var response = await axios.get(
      BASE_URL + "Case/GetStudentCases?studentId=" + id
    );
    console.log("Res==>  ", response?.data);
    if (response?.data) {
      setcases(response?.data);
      setScases(response?.data);
    }
  };
  return (
    <>
      <div className="backCustom" style={{ height: "600px" }}>
        {/* <form>
          <label style={{ alignItems: "center" }} htmlFor="category">
            Category:
          </label>
          <select
            id="category"
            name="category"
            style={{ marginLeft: "10px" }}
            onChange={(e) => {
              setCategoryId(e.target.value);
              let list = [];
              for (let i = 0; i < Scases.length; i++) {
                const element = Scases[i];

                if (e.target.value == element?.Casecategory?.Categoryname) {
                  list.push(element);
                }
              }
              console.log(list);
              setcases(list);
            }}
          >
            {categories?.map((item) => (
              <option value={item?.Categoryname}>{item?.Categoryname}</option>
            ))}
          </select>
        </form> */}
        {/* <h3 style={{ alignItems: "center" }}>Student Record</h3> */}
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
            </tr>
          </thead>
          <tbody>
            {cases?.map((item, index) => {
              return (
                <tr key={index}>
                  <td
                    onClick={() => {
                      navigate("/casedetails", {
                        state: { caseId: item?.CaseId },
                      });
                    }}
                  >
                    {item?.CaseId}
                  </td>
                  <td>{item?.ReportedBy?.UserName}</td>
                  <td>{item?.ReportedTo?.UserName}</td>
                  <td>{item?.Casecategory?.Categoryname}</td>
                  <td>{item?.ReportedDate.split("T")[0]}</td>
                  <td>{item?.Description}</td>
                  {/* <td>{item?.image}</td> */}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default StudentDetail;
