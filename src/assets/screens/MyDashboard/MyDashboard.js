import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import "../../Styles/Background.css";
import NavbarScreen from "../NavBAr/NavbarScreen";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const BASE_URL = "http://localhost/DCA-FYP-API/api/";

const MyDashboard = () => {
  const navigate = useNavigate();
  const myArray = [
    // { name: "Relax Punishment", fun: "/MyDashboard/relxpunsihment" },
    // { name: "Progress Report", fun: "/MyDashboard/progressReport" },
    { name: "My Cases", fun: "/MyDashboard/mycase" },
    { name: "Meeting Details", fun: "/MyDashboard/MeetingDetails" },
    // { name: "Case Details", fun: "/MyDashboard/CaseDetails" },
  ];
  return (
    <>
      <NavbarScreen />
      <div className="backCustom" style={{ height: "800px", width: "1200px" }}>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <h2 style={{ marginTop: "10px" }}>My Dashboard</h2>
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
        <div className="d-flex">
          <div className="col-md-2">
            {myArray.map((item) => {
              return (
                <NavLink className="nav-link" to={item.fun}>
                  <Card style={{ marginBottom: "10px", marginLeft: "20px" }}>
                    <Card.Body>
                      <p style={{ fontWeight: "bold" }}>{item.name}</p>
                    </Card.Body>
                  </Card>
                </NavLink>
              );
            })}
          </div>
          <div className="col-md-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyDashboard;
