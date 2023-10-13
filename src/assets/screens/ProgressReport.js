import { Checkbox } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../api-url/urls";
const ProgressReport = () => {
  const location = useLocation();
  const id = location?.state?.id;
  const [isFinePaid, setIsFinePaid] = useState(false);
  const [value, onChange] = useState(new Date());
  const [dates, setDates] = useState([
    "01-05-2023",
    "02-05-2023",
    "03-05-2023",
  ]);
  useEffect(() => {
    getDates();
  }, []);
  const getDates = async () => {
    var res = await axios.get(BASE_URL + "Case/GetAttendance?CaseId=" + 69);
    if (res?.data) {
      console.log("Res==>  ", res?.data);
      if (res?.data) {
        setDates(res?.data);
      }
    }
  };
  return (
    <div className="backCustom " style={{ height: "1000px" }}>
      <Form>
        <>
          <h1>Progress Report</h1>

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
                // console.log(date);
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
        </>
      </Form>
    </div>
  );
};

export default ProgressReport;
