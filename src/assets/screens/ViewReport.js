import React from 'react'

function ViewReport() {
  return (
    <form>
    <input type="radio" name="option" value="option1" />
    <label for="dropdown">Faculty member:</label>
    <select id="dropdown" name="option">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>

    <br />
    <input type="radio" name="option" value="option1" />
    <label for="dropdown">Non faculty member:</label>
    <select id="dropdown" name="option">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    <br />
    
    <input type="radio" name="option" value="option1" />
    <label for="textbox">student:</label>
    <input type="text" id="textbox" name="textbox" />

    <br />
    <label for="textbox"> reported student:</label>
    <input type="text" id="textbox" name="textbox" />

    <br />
    <label for="textbox">description:</label>
    <input type="text" id="textbox" name="textbox" />

    <br />
    <label for="image">Add image if :</label>
    <input type="file" id="image" name="image" />

 <br />
 <input type="Check previous record" value="Check previous record" />
    <br/>
 <input type="Assign panishment" value="Assign panishment" />
    <br/>
    
  </form>
);
};
  


export default ViewReport
