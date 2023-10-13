import React, { useEffect, useState } from "react";
import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { BASE_URL } from "../../api-url/urls";
import { Navigate, useLocation } from "react-router-dom";
function AppealForm() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
  };
  const [cas, setcase] = useState({});
  const location = useLocation();
  const c = location.state?.case;
  const [comment, setComment] = useState("");
  useEffect(() => {}, []);

  const handleFormSubmit = async () => {
    var payload = {
      caseid: c?.CaseId,
      Comments: comment,
    };

    var res = await axios.post(BASE_URL + "RequestAppeal/create", payload);
    if (res?.data) {
      alert("saved Successfully  ");
    }
  };

  return (
    <>
      <div className="backCustom" style={{ height: "800px" }}>
        <form className="backCustom">
          <div style={{ marginTop: "5px" }}>
            <h3>Appeal Form</h3>
            <label for="textbox">Punishment:</label>
            <input
              type="text"
              id="textbox"
              name="textbox"
              readOnly={true}
              value={c?.Punishment?.PunishmentTitle}
            />

            <label for="textbox">Assigned By:</label>
            <input
              type="text"
              id="textbox"
              name="textbox"
              readOnly={true}
              value={c?.ReportedBy?.UserName}
            />

            <div>start Date</div>
            <DatePicker
              selected={selectedDate}
              onChange={handleChange}
              dateFormat="dd/MM/yyyy"
              readOnly={true}
              value={c?.Punishment?.Startdate?.split("T")[0]}
            />

            <div>End Date</div>
            <DatePicker
              selected={selectedDate}
              onChange={handleChange}
              dateFormat="dd/MM/yyyy"
              readOnly={true}
              value={c?.Punishment?.EndDate?.split("T")[0]}
            />
            <label for="textbox">Comments</label>
            <input
              type="text"
              id="textbox"
              name="textbox"
              onChange={(c) => setComment(c.target.value)}
            />

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                onClick={() => handleFormSubmit()}
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  background: "#007bff",
                  color: "#fff",
                  border: "none",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AppealForm;
