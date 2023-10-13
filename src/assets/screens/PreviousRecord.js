import React from 'react'
import { Form } from 'react-bootstrap'

function PreviousRecprd() {
  return (
   <Form>
    <h1> Student Previous Record</h1>
    <label for="textbox">Name</label>
      <input type="text" id="textbox" name="textbox" /><br />
      <label for="textbox">Class</label>
      <input type="text" id="textbox" name="textbox" /><br />
      <label for="textbox">Section</label>
      <input type="text" id="textbox" name="textbox" /><br />
      <label for="textbox">Reported by</label>
      <input type="text" id="textbox" name="textbox" /><br />
      <label for="textbox">voilation</label>
      <input type="text" id="textbox" name="textbox" /><br />
      <label for="textbox">punishment</label>
      <input type="text" id="textbox" name="textbox" /><br />
   </Form>
  )
}

export default PreviousRecprd
