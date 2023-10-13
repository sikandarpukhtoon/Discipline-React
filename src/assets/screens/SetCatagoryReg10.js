import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Description } from "@mui/icons-material";
const BASE_URL = "http://localhost/DCA-FYP-API/api/";

function SetCatagoryReg10() {
  const [value, setvalue] = useState(null);
  const update = async () => {
    var payload = {
      val: value,
    };
    console.log("S=======> ", payload);
    var res = await axios.post(
      BASE_URL + "Configration/SetsmokingValue=" + value,
      {}
    );
    console.log("resulyt=============>", res);
    if (res?.data) {
      alert("saved Successfully ");
    }
  };
  return (
    <div className="backCustom" style={{ height: "800px", width: "1200px" }}>
      <form style={{ height: "" }}>
        <h2 style={{ textAlign: "center" }}>SetThresholdValuebyCatagoy</h2>

        <label>SetValue</label>
        <input
          type="value"
          className="form-control mt-1"
          placeholder="set value"
          onChange={(e) => setvalue(e.target.value)}
        />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            type="submit"
            onClick={() => update()}
            style={{
              padding: "10px",
              borderRadius: "5px",
              background: "#007bff",
              color: "#fff",
              border: "none",
            }}
          >
            update
          </button>
        </div>
      </form>
    </div>
  );
}

export default SetCatagoryReg10;
