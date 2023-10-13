import React from "react";
import { Table } from "react-bootstrap";
function EachCaseReg10() {
  return (
    <div className="backCustom" style={{ height: "800px" }}>
      <Table style={{ fontSize: "8" }} striped="columns">
        <thead>
          <tr>
            <th>Id</th>

            <th>Name</th>
            <th>ReGNo</th>
            <th> Category</th>
            <th>TotalCases</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
}

export default EachCaseReg10;
