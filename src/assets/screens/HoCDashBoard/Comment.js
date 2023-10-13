import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../api-url/urls";
import { useLocation } from "react-router-dom";

function Comment() {
  const [Appeal, setAppeal] = useState({});
  useEffect(() => {
    getAppeal();
  }, []);
  const getAppeal = async () => {
    var response = await axios.get(
      BASE_URL + "RequestAppeal/GetAppeal?CaseId=65"
    );
    console.log("Res==>  ", response?.data);
    if (response?.data) {
      setAppeal(response?.data);
    }
  };
  const [cas, setcase] = useState({});
  const location = useLocation();
  const c = location.state?.case;
  console.log("Case === > ", c);
  const [comment, setComment] = useState({});

  useEffect(() => {}, []);

  const handleFormSubmit = async () => {
    var payload = {
      id: "65",
      comments: comment,
    };
    var res = await axios.post(
      BASE_URL + "RequestAppeal/updatehoccomment",
      payload
    );
    if (res?.data) {
      alert("saved Successfully ");
    }
  };

  return (
    <form>
      <label for="textbox"> Director Comments:</label>
      <input
        style={{ marginRight: "40px" }}
        type="text"
        id="textbox"
        name="textbox"
        value={Appeal?.Directorcomments}
      />
      <label for="textbox"> HocComments:</label>
      <input
        style={{ marginRight: "40px" }}
        type="text"
        id="textbox"
        name="textbox"
        onChange={(val) => setComment(val.target.value)}
      />
      <button
        onClick={() => handleFormSubmit()}
        type="save"
        className="btn btn-primary"
        style={{ marginLeft: "300px", marginTop: "30px" }}
      >
        Save
      </button>
    </form>
  );
}

export default Comment;
