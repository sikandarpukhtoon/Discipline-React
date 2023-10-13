import { Checkbox } from "@material-ui/core";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ProgressReport = () => {
  const [isFinePaid, setIsFinePaid] = useState(false);
  const [value, onChange] = useState(new Date());
  let dates = ["01-05-2023", "02-05-2023", "03-05-2023"];
  return (
    <Form>
      <>
        <h1>Progress Report</h1>
        <input style={{ width: "30%," }} type="text" placeholder="Search.." />

        <div style={{ width: "20%", height: "20%" }}></div>

        <div
          className=" p-10"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Calendar
            className="c1"
            onChange={onChange}
            value={value}
            tileClassName={({ date }) => {
              console.log(date);
              let day = date.getDate();
              let month = date.getMonth() + 1;
              if (date.getMonth() < 10) {
                month = "0" + month;
              }
              if (date.getDate() < 10) {
                day = "0" + day;
              }
              const realoate = day + "-" + month + "-" + date.getFullYear();
              if (dates.find((e) => e === realoate)) {
                return "higlited2";
              }
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
          <Checkbox
            checked={isFinePaid}
            onChange={(e) => setIsFinePaid(e.target.checked)}
          />
          <label style={{ marginLeft: 10 }}>Fine paid</label>
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            type="save"
            onClick={() => {
              navigate("/admin");
            }}
            style={{
              padding: "10px",
              borderRadius: "5px",
              background: "#007bff",
              color: "#fff",
              border: "none",
            }}
          >
            Save
          </button>
        </div>
      </>
    </Form>
  );
};

export default ProgressReport;
