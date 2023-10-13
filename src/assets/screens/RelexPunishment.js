import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import { BASE_URL } from "../api-url/urls";
import { useLocation, useNavigate } from "react-router-dom";

const RelexPunishment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [Punishment, setPunishment] = useState({});

  const navigate = useNavigate();
  const [cases, setcases] = useState([]);
  useEffect(() => {
    var u = localStorage.getItem("@user");
    var user = JSON.parse(u);
    getPunishment();
  }, []);
  const getPunishment = async () => {
    var response = await axios.get(
      BASE_URL + "Punishment/GetPunishment?CaseId=65"
    );
    console.log("Res==>  ", response?.data);
    if (response?.data) {
      setPunishment(response?.data);
      setSelectedDate(response?.data?.EndDate?.split("T")[0]);
    }
  };
  const location = useLocation();
  const c = location.state?.case;
  console.log("Case === > ", c);
  const [EndDate, setEndDate] = useState({});
  const [fine, setFine] = useState(Punishment?.Fine || "");
  const handleFineChange = (event) => {
    setFine(event.target.value);
  };
  const handleFormSubmit = async () => {
    var payload = {
      id: "65",
      EndDate: selectedDate,
      fine: fine,
    };
    console.log("S=======> ", payload);
    var res = await axios.post(BASE_URL + "Punishment/update", payload);

    if (res?.data) {
      alert("saved Successfully ");
    }
  };

  return (
    <div className="backCustom" style={{ height: "800px", width: "1200px" }}>
      <form style={{ marginTop: "30px" }}>
        <h3>Relax Punishment</h3>
        <div
          className="d-flex"
          style={{ justifyContent: "space-evenly", marginTop: "20px" }}
        >
          <div>Start Date</div>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
            readOnly
            value={Punishment?.Startdate?.split("T")[0]}
          />
        </div>
        <div
          className="d-flex"
          style={{ justifyContent: "space-evenly", marginTop: "20px" }}
        >
          <div>End Date</div>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
            value={selectedDate}
            onChange={(d) => setSelectedDate(d + "")}
          />
        </div>
        <div>
          <label htmlFor="fine">Fine:</label>
          <input
            type="text"
            id="fine"
            name="fine"
            value={fine}
            onChange={handleFineChange}
          />
        </div>
        <div
          className="d-flex"
          style={{ justifyContent: "center", marginTop: "20px" }}
        >
          <Button
            className="btn btn-primary"
            onClick={() => handleFormSubmit()}
          >
            save changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RelexPunishment;
