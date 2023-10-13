import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function ReportForm ()  {

  const [selectedDate, setSelectedDate] = useState(null);

  
  const handleChange = (date) => {
    setSelectedDate(date);
  }
  return (
    
      <form style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center' }}>Report Form</h2>
        <div style={{ display: 'inline-flex' }}>
  <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
    <input type="radio" name="option" value="faculty" style={{ marginRight: '10px' }} />
    <label htmlFor="faculty">Faculty member:</label>
    
  </div>

  <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
    <input type="radio" name="option" value="non-faculty" style={{ marginRight: '10px' }} />
    <label htmlFor="non-faculty">Non faculty member:</label>
    {/* <select id="non-faculty" name="option" style={{ marginLeft: '10px' }}>
      {/* <option value="option1">taha</option>
      <option value="option2">hamza</option>
      <option value="option3">huzaifa</option> */}
    {/* </select> */} 
  </div>

  <div style={{ display: 'flex', alignItems: 'center' }}>
    <input type="radio" name="option" value="student" style={{ marginRight: '10px' }} />
    <label htmlFor="student">Student:</label>
    {/* <input type="text" id="student" name="student" style={{ marginLeft: '10px' }} /> */}
  </div>
  </div>
  <select id="faculty" name="option" style={{ marginLeft: '10px' }}>
      <option value="option1">sir umar</option>
      <option value="option2">sir zahid</option>
      <option value="option3">sir saeed</option>
    </select>

  
        <div>
          <label htmlFor="reported-student">Reported student:</label>
          <input type="text" id="reported-student" name="reported-student" />
        </div>
  
        <div>
          <label htmlFor="reported-student">Reported Date:</label>
          <input type="text" id="reported-student" name="reported-student" />
        
        <div className="d-flex" style={{justifyContent:'space-evenly',marginTop:'20px'}}></div>
            <div>Start Date</div>
        <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
    
      />
</div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" rows="4" />
        </div>
  
        <div>
          <label htmlFor="image">Add image if:</label>
          <input type="file" id="image" name="image" />
        </div>
  
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" style={{ marginLeft: '10px' }}>
            <option value="option1">fighting</option>
            <option value="option2">smoking</option>
            <option value="option3">theft</option>
          </select>
        </div>
  
        {/* <div>
          <label htmlFor="violation">Enter violation:</label>
          <input type="text" id="violation" name="violation" />
        </div> */}
  
        <div>
          <label htmlFor="forward-to">Forward report to:</label>
          <input type="text" id="forward-to" name="forward-to" />
        </div>
  
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button type="submit" style={{ padding: '10px', borderRadius: '5px', background: '#007bff', color: '#fff', border: 'none' }}>
            Submit
          </button>
        </div>
      </form>
  );
};

export default ReportForm