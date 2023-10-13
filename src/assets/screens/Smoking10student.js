import React, { useEffect, useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

import { BASE_URL } from "../api-url/urls";

function Smoking10student() {
  const [categoryId, setCategoryId] = useState(0);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    var response = await axios.get(BASE_URL + "Committee/GetCategories");
    if (response?.data) {
      setCategories(response?.data);
      setCategoryId(response?.data[0]?.Categoryid);
      getcases(response?.data[0]?.Categoryid);
    }
  };
  const location = useLocation();
  const navigate = useNavigate();
  const [cases, setcases] = useState([]);
  const getcases = async (id) => {
    var response = await axios.get(
      BASE_URL + "Configration/GetReg10studentByCategory?id=" + id
    );
    console.log("Res==>  ", response?.data);
    if (response?.data) {
      setcases(response?.data);
    }
  };
  return (
    <>
      <div className="backCustom" style={{ height: "600px" }}>
        <div>
          <label style={{ alignItems: "center" }} htmlFor="category">
            Category:
          </label>
          <select
            id="category"
            name="category"
            style={{ marginLeft: "10px" }}
            onChange={(e) => {
              getcases(e.target.value);
            }}
          >
            {categories?.map((item) => (
              <option value={item?.Categoryid}>{item?.Categoryname}</option>
            ))}
          </select>
        </div>
        {/* <h3 style={{ alignItems: "center" }}>Student Record</h3> */}
        <Table striped="columns" style={{ textAlign: "center", fontSize: 13 }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Student Name</th>
              <th>Arid No</th>
              {/* <th>Category</th>
              <th>Date</th>
              <th>Description</th> */}
              {/* <th>Image</th> */}
            </tr>
          </thead>
          <tbody>
            {cases?.map((item, index) => {
              return (
                <tr key={index}>
                  {/* <td
                  onClick={() => {
                    navigate("/casedetails", {
                      state: { caseId: item?.CaseId },
                    });
                  }}
                  >
                    {item?.CaseId}
                  </td> */}
                  <td>{item?.Uid}</td>
                  <td
                    onClick={() =>
                      navigate("/studentdetail", {
                        state: { Uid: item?.Uid },
                      })
                    }
                  >
                    {item?.UserName}
                  </td>
                  <td>{item?.AridNo}</td>
                  {/* <td>{item?.ReportedTo?.UserName}</td>
                  <td>{item?.Casecategory?.Categoryname}</td>
                  <td>{item?.ReportedDate?.split("T")[0]}</td>
                  <td>{item?.Description}</td> */}
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

export default Smoking10student;
