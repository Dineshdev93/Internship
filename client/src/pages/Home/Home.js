import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import {useNavigate}  from 'react-router-dom'
import Tables from "../../components/Tables/Tables";
import Spiner from "../../components/Spiner/Spiner";
import "./home.css";
export default function Home() {
  //If you want to use icons then use font awesome icons and givd cdn link to index.html only for simple html
  const navigate = useNavigate()
   const adduser = () => {
    navigate('/register')
   }
   const [spinshow,setSpinshow] = useState(true)
   useEffect(()=>{
     setTimeout(()=>{
       setSpinshow(false)
     },1200)
   },[])
  return (
    <section className="container ">
      <div className="main mt-3 d-flex justify-content-between">
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2 shadow"
              />
            </Col>
            <Col xs="auto">
              <Button variant="success">Search</Button>
            </Col>
          </Row>
        </Form>
        <div className="right">
          <Button onClick={adduser}>
            
            <i class="fa-regular fa-plus"></i> Add User
            
          </Button>
        </div>
      </div>
      {/* export csv , gender,status */}
      <div className="csv_gender_status d-flex justify-content-between mt-5">
        <div className="export">
          <Button variant="success">Export To Csv</Button>
        </div>
        <div className="gender">
          <div>
            <h3>Filter by gender</h3>
          </div>
          <div className="filter_gender d-flex justify-content-around">
            <Form.Check
              type={"radio"}
              label={"All"}
              name={"gender"}
              value={"All"}
              defaultChecked
            />{" "}
            <Form.Check
              type={"radio"}
              label={"Male"}
              name={"gender"}
              value={"Male"}
            />{" "}
            <Form.Check
              type={"radio"}
              label={"Female"}
              name={"gender"}
              value={"Female"}
            />
          </div>
        </div>
        {/* short by value dropdown */}
        <div className="statu">
          <h3>Short by Value</h3>
          <Dropdown className="text-center">
            <Dropdown.Toggle id="dropdown-basic">
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item >New data</Dropdown.Item>
              <Dropdown.Item >Old data</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/* filter by status */}
        <div className="gender">
          <div>
            <h3>Filter by gender</h3>
          </div>
          <div className="filter_gender d-flex justify-content-around">
            <Form.Check
              type={"radio"}
              label={"All"}
              name={"status"}
              value={"All"}
              defaultChecked
            />{" "}
            <Form.Check
              type={"radio"}
              label={"Active"}
              name={"status"}
              value={"Active"}
            />{" "}
            <Form.Check
              type={"radio"}
              label={"Inactive"}
              name={"status"}
              value={"Inactive"}
            />
          </div>
        </div>
      </div>
     {spinshow ? <Spiner/> :<Tables/>}
    </section>
  );
}
