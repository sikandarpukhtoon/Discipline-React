import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../api-url/urls";
import { useLocation } from "react-router-dom";

function Comments() {
  const [cas, setcase] = useState({});
  const location = useLocation();
  const c = location.state?.case;
  console.log("Case === > ", c);
  const [comment, setComment] = useState({});

  useEffect(() => {}, []);

  const handleFormSubmit = async () => {
    var payload = {
      id: c,
      comments: comment,
    };
    var res = await axios.post(BASE_URL + "RequestAppeal/update", payload);
    if (res?.data) {
      alert("saved Successfully ");
    }
  };

  return (
    <div>
      <div>
        <div>
          <label htmlFor="description">Comments:</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            onChange={(val) => setComment(val.target.value)}
          />
        </div>

        <button
          onClick={() => handleFormSubmit()}
          type="save"
          className="btn btn-primary"
          style={{ marginLeft: "100px" }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Comments;
