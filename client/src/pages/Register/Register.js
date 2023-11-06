import React, { useEffect, useState } from "react";
import "./register.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spiner from "../../components/Spiner/Spiner";
export default function Register() {
  const [showspin,setShowspin] = useState(false)
  const [inputdata, setInputData] = React.useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
  });
  // set Input Valuse

  const setInputvalue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value });
    console.log(inputdata);
  };

  // set status
  // Select Your Status
  const options = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];
  const [status, setStatus] = React.useState("Active");
  const Status = (e) => {
    setStatus(e.value);
  };

  // set Profile
  const [image, setImage] = React.useState("");
  const [preview, setPreview] = React.useState("");
  const setProfile = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
    setInterval(() => {
      setShowspin(true)
    }, 1200);
  }, [image]);

  const submitdetails = (e) => {
    e.preventDefault();
    const { fname, lname, email, mobile, gender, location } = inputdata;
    if (!fname) {
      toast.error("First name required");
    } else if (!lname) {
      toast.error(" Last name required");
    } else if (!email) {
      toast.error(" Email required");
    } else if (mobile.length>10) {
      toast.error("Enter valid mobile no.");
    } else if (!gender) {
      toast.error(" Plz select gender");
    } else if (!location) {
      toast.error(" Plz enter Location");
    }else if(!image){
      toast.error("Profile required..")
    }
    else {
        toast.success("Regestration succesfully")
    }
  };

  return (
    <>
    {
      showspin ?
      <main className="container ">
      <h2 className="text-center mt-1 ">Register Your Details</h2>
      <Card className="shadow mt-2 p-3 bg-light text-black">
        <div className="profile_div text-center">
          <img src={preview ? preview : "/man.png"} alt="logo" />
        </div>
        <Form>
          <Row>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="fname"
                placeholder="Enter First Name"
                value={inputdata.fname}
                onChange={setInputvalue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lname"
                placeholder="Enter Last Name"
                value={inputdata.lname}
                onChange={setInputvalue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={inputdata.email}
                onChange={setInputvalue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                placeholder="Enter mobile no."
                value={inputdata.mobile}
                onChange={setInputvalue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>Select Your Gender</Form.Label>
              <Form.Check
                type={"radio"}
                label={"Male"}
                name={"gender"}
                value={"female"}
                onChange={setInputvalue}
              />
              <Form.Check
                type={"radio"}
                label={"Female"}
                name={"gender"}
                value={"male"}
                onChange={setInputvalue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>Status</Form.Label>

              <Select options={options} onChange={Status} value={status} />

            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Enter Your Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                placeholder="Location"
                value={inputdata.location}
                onChange={setInputvalue}
              />
            </Form.Group>
            <Form.Group className=" mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Select Your Profile</Form.Label>
              <Form.Control
                type="file"
                name="user_profile"
                placeholder="Profile"
                onChange={setProfile}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={submitdetails}>
              Submit
            </Button>
          </Row>
        </Form>
      </Card>
      <ToastContainer position="top-center" />
    </main>
    : <Spiner/>}
    </>
  );
}
