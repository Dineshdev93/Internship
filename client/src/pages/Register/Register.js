import React from "react";
import "./register.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import man from "../../images/man.png";
import Row from "react-bootstrap/Row";
import Select from "react-select";
export default function Register() {
  const options = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];
  return (
    <main className="container">
      <h2 className="text-center mt-1 ">Register Your Details</h2>
      <Card className="shadow mt-2 p-3">
        <div className="profile_div text-center">
          <img src={man} alt="Profile logo" />
        </div>
        <Form>
          <Row>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control type="text" placeholder="Enter mobile no." />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>Select Your Gender</Form.Label>
              <Form.Check
                type={"radio"}
                label={`Male`}
                name="gender"
                value={"Male"}
              />
              <Form.Check
                type={"radio"}
                label={`Female`}
                name="gender"
                value={"Female"}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6">
            <Form.Label>Status</Form.Label>

              <Select
                options={options}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Row>
        </Form>
      </Card>
    </main>
  );
}
