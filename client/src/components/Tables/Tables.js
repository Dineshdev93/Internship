import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import "./table.css";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
export default function Tables() {
  return (
    <div className="container mt-5">
      <Card className="shadow p-3">
        <h3 className="text-center" id="h3">
          Table
        </h3>
        <Table striped bordered hover variant="dark mt-3" responsive="sm">
          <thead>
            <tr>
              <th>id</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Profile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>test@gmail.com</td>
              <td>Male</td>
              <td className="d-flex align-items-center">
                <Dropdown className="text-center">
                  <Dropdown.Toggle className="dropdown_btn" id="dropdown-basic">
                    <Badge>Active</Badge>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Active</Dropdown.Item>
                    <Dropdown.Item>Inactive</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td className="td_img">
                <img src="/man.png" alt="" />
              </td>
              <td>
                <Dropdown className="text-center">
                  <Dropdown.Toggle
                    variant="primary"
                    id="dropdown-basic"
                  ></Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <span style={{ color: "green" }}>
                        {" "}
                        <i class="fa-solid fa-eye"></i>&nbsp;
                      </span>
                      View
                    </Dropdown.Item>
                    <Dropdown.Item>
                      {" "}
                      <span style={{ color: "blue" }}>
                        <i class="fa-solid fa-pen-to-square"></i>
                      </span>{" "}
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item>
                      {" "}
                      <span style={{ color: "red" }}>
                        <i class="fa-solid fa-trash"></i>
                      </span>{" "}
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
