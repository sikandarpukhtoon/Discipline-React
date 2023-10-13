import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { BASE_URL } from "../api-url/urls";
import { useState } from "react";
import { Cases } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import biit from "../images/logo.jpeg";
function Reg10() {
  const navigate = useNavigate();
  const [student, setstudent] = useState([]);
  useEffect(() => {
    getstudent();
  }, []);
  const getstudent = async () => {
    var response = await axios.get(BASE_URL + "Configration/GetReg10student");
    console.log("Res==>  ", response?.data);
    if (response?.data) {
      setstudent(response?.data);
    }
  };

  return (
    <div className="backCustom" style={{ height: "800px" }}>
      <h2 style={{ textAlign: "center" }}>Reg10Students</h2>
      <Table style={{ fontSize: "8" }} striped="columns">
        <thead>
          <tr>
            {/* <th>Id</th> */}

            <th>Name</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {student?.map((item, index) => {
            return (
              <tr key={index}>
                {/* <td
                  onClick={() =>
                    navigate("/studentdetail", {
                      state: { Uid: item?.Uid },
                    })
                  }
                >
                  {item?.Uid}
                </td> */}
                <td
                  onClick={() =>
                    navigate("/studentdetail", {
                      state: { Uid: item?.Uid },
                    })
                  }
                >
                  {item?.UserName}
                </td>
                <div className="d-flex" style={{ justifyContent: "center" }}>
                  <img
                    src={biit}
                    alt="BIIT logo"
                    onClick={() =>
                      navigate("/studentdetail", {
                        state: { Uid: item?.Uid },
                      })
                    }
                  />
                </div>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Reg10;
