import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Description } from "@mui/icons-material";
const BASE_URL = "http://localhost/DCA-FYP-API/api/";

const CreactReport = ({ onAdd = () => {} }) => {
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [reportedstudent, setreportedstudent] = useState([]);
  const [reportedByList, setReportedByList] = useState([]);
  const [reportedToList, setReportedToList] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [description, setDescription] = useState("");
  const [reportedTo, setReportedTo] = useState(0);
  const [reportedBy, setReportedBy] = useState(9);
  const [studentId, setStudentId] = useState(0);

  const [availableMembers, setAvailableMembers] = useState([
    "Sir Umar Farooq",
    "Sir Zahid",
    "Dr Naseer",
  ]);
  const [modal, setModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    getreportedstudent();
  }, []);
  const handleRadioChange = async (event, val) => {
    setSelectedOption(event.target.value);
    var res = await axios(BASE_URL + "User/GetUsersByRole?role=" + val);
    if (res?.data) {
      setReportedByList(res?.data);
    }
  };
  const getCategories = async () => {
    var response = await axios.get(BASE_URL + "Committee/GetCategories");
    if (response?.data) {
      setCategories(response?.data);
    }
  };
  const getreportedstudent = async () => {
    var response = await axios.get(
      BASE_URL + "User/GetUsersByRole?role=" + "student"
    );
    if (response?.data) {
      setreportedstudent(response?.data);
      setStudentId(response?.data[0]?.Uid);
    }
  };

  const getTeachersOfCategory = async (cid) => {
    setCategoryId(cid);
    var res = await axios(
      BASE_URL + "Committee/GetCategoryTeachers?categoryId=" + cid
    );
    if (res?.data) {
      setReportedToList(res?.data);
    }
  };
  const handleChange = (date) => {
    setSelectedDate(date);
  };
  const handleChanged = () => {};
  const toggle = () => setModal(!modal);

  const Save = async () => {
    const pyaload = {
      ReportedBy: reportedBy,
      ReportedTo: reportedTo,
      StudentId: studentId,
      ReportedDate: selectedDate,
      Description: description,
      Categoryid: categoryId,
      CaseType: "Pending",
      Image: "",
    };
    console.log(pyaload);
    var res = await axios.post(BASE_URL + "Case/Create", pyaload);
    if (res?.data) {
      alert("saved Successfully ");
      setModal(false);
      onAdd();
    }
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Add Report
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Report</ModalHeader>
        <ModalBody>
          <div style={{ maxWidth: "500px", margin: "0 auto" }}>
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
                  value="facultymember"
                  style={{ marginRight: "10px" }}
                  onChange={(event) => handleRadioChange(event, "Teacher")}
                />
                <label htmlFor="faculty">facultymember</label>
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
                  value="Nonfacultymember"
                  style={{ marginRight: "10px" }}
                  onChange={(event) => handleRadioChange(event, "Other")}
                />
                <label htmlFor="non-faculty">Nonfacultymember</label>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="radio"
                  name="option"
                  value="student"
                  style={{ marginRight: "10px" }}
                  onChange={(event) => handleRadioChange(event, "Student")}
                />
                <label htmlFor="student">student</label>
              </div>
            </div>
            <br />

            <select
              id="faculty"
              name="option"
              style={{ marginLeft: "10px" }}
              onChange={(event) => setReportedBy(event.target.value)}
            >
              <option value={"-1"}>Select Option</option>
              {reportedByList.map((member) => (
                <option key={member?.Uid} value={member?.Uid}>
                  {member?.UserName}
                </option>
              ))}
            </select>
            <div>
              <label htmlFor="ReportedStudent">ReportedStudent:</label>
              <select
                id="ReportedStudent"
                name="ReportedStudent"
                style={{ marginLeft: "10px" }}
                onChange={(event) => setStudentId(event.target.value)}
                value={studentId}
              >
                <option value="" disabled hidden>
                  Reported Student
                </option>
                {reportedstudent?.map((item) => (
                  <option value={item?.Uid}>{item?.UserName}</option>
                ))}
              </select>
            </div>
            <label htmlFor="reported-student">Reported Date:</label>

            <DatePicker
              selected={selectedDate}
              onChange={handleChange}
              dateFormat="dd/MM/yyyy"
            />

            <div>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>

            <div>
              <label htmlFor="image">Add image :</label>
              <input type="file" id="image" name="image" />
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                name="category"
                style={{ marginLeft: "10px" }}
                onChange={(event) => getTeachersOfCategory(event.target.value)}
              >
                <option value="-1">Select Category</option>
                {categories?.map((item) => (
                  <option value={item?.Categoryid}>{item?.Categoryname}</option>
                ))}
              </select>
            </div>

            {/* <div>
          <label htmlFor="violation">Enter violation:</label>
          <input type="text" id="violation" name="violation" />
        </div> */}

            <div>
              <label htmlFor="forward-to">Forward report to:</label>
              <select
                id="forward-to"
                name="forward-to"
                style={{ marginLeft: "10px" }}
                onChange={(event) => setReportedTo(event.target.value)}
              >
                <option value={"-1"}>Select Option</option>
                {reportedToList.map((member) => (
                  <option key={member?.UserName} value={member?.Uid}>
                    {member?.UserName}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                onClick={() => Save()}
                type="submit"
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
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CreactReport;
