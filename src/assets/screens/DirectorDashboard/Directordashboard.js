import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "../../Styles/Background.css";
import NavbarScreen from "../NavBAr/NavbarScreen";

function Directordashboard() {
  const navigate = useNavigate();
  const MyArr = [
    { name: "All Cases", fun: "/db/allcases" },
    { name: "Student Appeal", fun: "/db/showappeal" },
    { name: "NewHoc", fun: "/db/newhoc" },
    // { name: "ChooseHoc", fun: "/db/chosehoc" },
    // { name: "Comments", fun: "/db/comments" },
  ];
  return (
    <>
      <NavbarScreen />
      <div className="backCustom" style={{ height: "600px" }}>
        <div className="jumbotron text-center bg-sky">
          <h2>Director Dashboard</h2>
          <td>
            <Button
              onClick={() => {
                navigate("/db/chooce");
              }}
              className="btn btn-primary"
              style={{ fontWeight: "bold", marginLeft: "850px" }}
            >
              New
            </Button>
          </td>
        </div>
        <div className="d-flex">
          <div className="col-md-2">
            {MyArr.map((item) => {
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
            style={{
              marginBottom: "5px",
              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Directordashboard;
