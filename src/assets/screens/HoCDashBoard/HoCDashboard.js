import React from "react";
import { Card } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import "../../Styles/Background.css";
import NavbarScreen from "../NavBAr/NavbarScreen";

const HoCDashboard = () => {
  const myArray = [
    { name: "Relax Punishment", fun: "/HoCDashboard/relxpunsihment" },
    // { name: "Progress Report", fun: "/HoCDashboard/progressReport" },
    // { name: "View Rport", fun: "/HoCDashboard/viewreport" },
    { name: "new committee team", fun: "/hocDashboard/newcommitee" },
    { name: "Comments", fun: "/HoCDashboard/cmnts" },
    { name: "My Cases", fun: "/HoCDashboard/ShowCases" },
    { name: "Meeting Details", fun: "/HoCDashboard/MeetingDetail" },
    { name: "All Cases", fun: "/HoCDashboard/ShowAllCases" },
  ];
  return (
    <>
      <NavbarScreen />
      <div className="backCustom" style={{ height: "800px" }}>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <h2 style={{ marginTop: "10px" }}>HoC Dashboard</h2>
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

export default HoCDashboard;
