import React from "react";
import { Card } from "react-bootstrap";
import "../../Styles/Background.css";
import NavbarScreen from "../NavBAr/NavbarScreen";
import "./Studentdashboard.css";
import { NavLink, Outlet } from "react-router-dom";
function StudentDashboard() {
  const MyArray = [
    { name: " progress Report", fun: "/studentdashboard/progressReport" },
    { name: "Meeting Time", fun: "/studentdashboard/setmeetingschedule" },

    { name: "My Cases", fun: "/studentdashboard/cases" },
  ];
  return (
    <>
      <NavbarScreen />
      <div className="backCustom" style={{ height: "800px" }}>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <h2 style={{ marginTop: "10px" }}>Student Dashboard</h2>
        </div>
        <div className="d-flex">
          <div className="col-md-2 studentdashboard">
            {MyArray.map((item) => {
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
          <div
            className="col-md-10"
            style={{ marginBottom: "5px", marginLeft: "20px" }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDashboard;
