import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../api-url/urls";
function NewCommittee() {
  const navigate = useNavigate();
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [availableMembers, setAvailableMembers] = useState([
    "Sir Umar Farooq",
    "Sir Zahid",
    "Dr Naseer",
  ]);

  useEffect(() => {
    getTeachers();
    getCategories();
  }, []);
  const getTeachers = async () => {
    var response = await axios.get(
      BASE_URL + "User/GetUsersByRole?role=Teacher"
    );
    if (response?.data) {
      setAvailableMembers(response?.data);
    }
  };
  const getCategories = async () => {
    var response = await axios.get(BASE_URL + "Committee/GetCategories");
    if (response?.data) {
      setCategories(response?.data);
      setCategoryId(response?.data[0]?.Categoryid);
    }
  };
  function handleSelect(event) {
    const selectedOption = event.target.value;
    console.log(selectedOption);
    setSelectedMembers((prevMembers) => [...prevMembers, selectedOption]);
    setAvailableMembers((prevMembers) =>
      prevMembers.filter((member) => member?.Uid != selectedOption)
    );
  }

  const Save = async () => {
    var pyaload = {
      Teacherid: selectedMembers.toString(),
      Categoryid: categoryId,
    };
    var res = await axios.post(BASE_URL + "Committee/Create", pyaload);
    if (res?.data?.id > 0) {
      alert("saved Successfully  " + res?.data?.id);
    }
  };

  return (
    <form>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            style={{ marginLeft: "10px" }}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            {categories?.map((item) => (
              <option value={item?.Categoryid}>{item?.Categoryname}</option>
            ))}
          </select>
        </div>
        <form>
          <select
            id="faculty"
            name="option"
            style={{ marginLeft: "10px" }}
            onChange={handleSelect}
            value=""
          >
            <option value="" disabled hidden>
              Select a committee member
            </option>
            {availableMembers.map((member) => (
              <option key={member?.Uid} value={member?.Uid}>
                {member?.UserName}
              </option>
            ))}
          </select>
        </form>
        <ul>
          {selectedMembers.map((member) => (
            <li key={member}>{member}</li>
          ))}
        </ul>
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
  );
}

export default NewCommittee;
