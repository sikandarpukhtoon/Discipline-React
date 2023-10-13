import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useLocation } from "react-router-dom";
import "react-time-picker/dist/TimePicker.css";
import "../../Styles/Background.css";
import { BASE_URL } from "../../api-url/urls";
import NavbarScreen from "../NavBAr/NavbarScreen";
function AssignPunishment() {
  const navigate = useNavigate();
  const location = useLocation();
  var caseId = location?.state?.caseId;
  const [type, setTyoe] = useState("");
  const [title, setTitle] = useState([]);
  const [fine, setFine] = useState(0);
  const [description, setDescription] = useState("");
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  function handleSelect(event) {
    const selectedOption = event.target.value;
    console.log(selectedOption);
    setTitle((prevMembers) =>
      prevMembers.filter((member) => member != selectedOption)
    );
    setTitle((prevMembers) => [...prevMembers, selectedOption]);
  }
  const Save = async () => {
    var payload = {
      CaseId: caseId,
      Description: description,
      PunishType: type,
      Fine: fine,
      PunishmentTitle: title.toString(),
      Startdate: startdate,
      EndDate: enddate,
    };
    console.log("Payload is ===> ", payload);
    var res = await axios.post(BASE_URL + "Punishment/Create", payload);
    if (res?.data) {
      alert("Punishment Assigned Successfully");
    }
  };

  return (
    <>
      <NavbarScreen />
      <div className="backCustom" style={{ height: "800px" }}>
        <form>
          <h3>Assign Punishment</h3>
          <div style={{ display: "inline-flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "20px",
              }}
            >
              <input
                type="radio"
                name="option"
                value="fine"
                style={{ marginRight: "10px" }}
                onChange={(e) => setTyoe(e.target.value)}
              />
              <label htmlFor="faculty">Fine</label>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "20px",
              }}
            >
              <input
                type="radio"
                name="option"
                value="community-services"
                style={{ marginRight: "10px" }}
                onChange={(e) => setTyoe(e.target.value)}
              />
              <label htmlFor="non-faculty">Community Services</label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                name="option"
                value="both"
                style={{ marginRight: "10px" }}
                onChange={(e) => setTyoe(e.target.value)}
              />
              <label htmlFor="student">Both</label>
            </div>
          </div>
          <br />
          {type === "fine" && (
            <>
              <label htmlFor="textbox">Fine:</label>
              <input
                type="text"
                id="textbox"
                name="textbox"
                onChange={(e) => setFine(e.target.value)}
              />
            </>
          )}
          {type === "community-services" && (
            <>
              <label htmlFor="dropdown">Select Punishment:</label>
              <select id="dropdown" name="option" onChange={handleSelect}>
                <option value="Watering plants">Watering plants</option>
                <option value="Windows cleaning">Windows cleaning</option>
                <option value="Holding sorry card">Holding sorry card</option>
              </select>
              <ul>
                {title.map((member) => (
                  <li>{member}</li>
                ))}
              </ul>
              <label for="textbox">Add Punishment:</label>
              <input
                type="text"
                id="textbox"
                name="textbox"
                onChange={(e) => setDescription(e.target.value)}
              />
            </>
          )}
          {type === "both" && (
            <>
              <label htmlFor="textbox">Fine:</label>
              <input
                type="text"
                id="textbox"
                name="textbox"
                onChange={(e) => {
                  setFine(e.target.value);
                }}
              />
              <br />
              <label htmlFor="dropdown">Select Punishment:</label>
              <select
                id="dropdown"
                name="option"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              >
                <option value="Watering plants">Watering plants</option>
                <option value="Windows cleaning">Windows cleaning</option>
                <option value="Holding sorry card">Holding sorry card</option>
              </select>
              <label for="textbox">Add Punishment:</label>

              <input
                type="text"
                id="textbox"
                name="textbox"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </>
          )}
          <br />
          {/* <label htmlFor="startdate">Start Date:</label>
          <br />
          <DatePicker
            selected={selectedDate}
            onChange={handleChange}
            dateFormat="dd/MM/yyyy"
          />
          <br /> */}
          <div>Start Date</div>
          <DatePicker
            selected={startdate}
            onChange={(e) => setstartdate(e)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
          />
          <br />
          <div>End Date</div>
          <div
            className="d-flex"
            style={{ justifyContent: "space-evenly", marginTop: "20px" }}
          >
            <DatePicker
              selected={enddate}
              onChange={(e) => setenddate(e)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
            />
          </div>
          <div
            className="d-flex"
            style={{ justifyContent: "center", marginTop: "20px" }}
          >
            <Button onClick={() => Save()} className="btn btn-primary">
              save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AssignPunishment;
