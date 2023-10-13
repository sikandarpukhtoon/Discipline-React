import { Icon, Input } from "@material-ui/core";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";

import { Button, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../api-url/urls";

function SetMeetingSchedule() {
  const navigate = useNavigate();
  const location = useLocation();
  const caseId = location?.state?.caseId;
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeFrom, setSelectedTimeFrom] = useState("10:00");
  const [selectedTimeTo, setSelectedTimeTo] = useState("12:00");
  const [venue, setVenue] = useState("");
  const [status] = useState("Pending");
  const handleChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeFromChange = (time) => {
    setSelectedTimeFrom(time);
  };

  const handleTimeToChange = (time) => {
    setSelectedTimeTo(time);
  };

  const handleFormSubmit = async () => {
    var payload = {
      CaseId: caseId,
      Status: status,
      Venue: venue,
      MeetingDate: selectedDate,
      StartTime: selectedTimeFrom,
      EndTime: selectedTimeTo,
    };
    var res = await axios.post(BASE_URL + "Meeting/Create", payload);
    if (res?.data) {
      alert("saved Successfully  ");
    }
  };

  return (
    <div className="backCustom" style={{ height: "800px" }}>
      <div style={{}} className="customForm">
        <h3>Set Meeting Schedule</h3>
        <Card className="meeting-card">
          <div className="form-group">
            <label htmlFor="date">Select Date</label>
            <div>
              <DatePicker
                id="date"
                selected={selectedDate}
                onChange={handleChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="time-from">From</label>
            <div>
              <TimePicker
                id="time-from"
                value={selectedTimeFrom}
                onChange={handleTimeFromChange}
                clearIcon={null} // Remove the clear icon if desired
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="time-to">To</label>
            <div>
              <TimePicker
                id="time-to"
                value={selectedTimeTo}
                onChange={handleTimeToChange}
                clearIcon={0} // Remove the clear icon if desired
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="faculty-no">Meeting Venue:</label>
            <Input
              id="faculty-no"
              style={{ width: "40%", height: "100px" }}
              placeholder="Enter faculty No:"
              onChange={(e) => setVenue(e.target.value)}
            />
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <Button
              onClick={() => handleFormSubmit()}
              className="btn btn-primary"
            >
              Submit
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default SetMeetingSchedule;
