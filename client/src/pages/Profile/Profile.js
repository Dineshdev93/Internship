import React from "react";
import Card from "react-bootstrap/Card";
import "./profile.css";
import Row from "react-bootstrap/esm/Row";
export default function Profile() {
  return (
    <div className="container">
      <Card className="shadow mt-5 col-lg-5 mx-auto">
        <Card.Body>
          <Row>
            <div className="col">
              <div className="card_profile d-flex justify-content-center">
                <img src="/man.png" alt="" />
              </div>
            </div>
          </Row>
          <div className="text-center">
            <h3>Dinesh Sharma</h3>
            <h5>
              <i class="fa-solid fa-envelope email "></i>&nbsp;:-{" "}
              <span>mantry.dinesh@gmail.com</span>{" "}
            </h5>
            <h5>
              <i class="fa-solid fa-phone mobile "></i>&nbsp;:- <span>8290868058</span>{" "}
            </h5>
            <h5>
              <i class="fa-solid fa-person genders"></i>&nbsp;:- <span>Male</span>{" "}
            </h5>
            <h5>
              <i class="fa-sharp fa-solid fa-location-dot location"></i>&nbsp;:-{" "}
              <span>Location</span>{" "}
            </h5>
            <h5 className="status">
              Status&nbsp;:- <span>Active</span>{" "}
            </h5>
            <h5>
              {" "}
              <i class="fa-solid fa-calendar-days date_created"></i>&nbsp;Date Created
              &nbsp;:- <span>12-10-2023</span>{" "}
            </h5>
            <h5>
              {" "}
              <i class="fa-solid fa-calendar-days date_updated"></i>&nbsp;Date updated
              &nbsp;:- <span>14-10-2023</span>{" "}
            </h5>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
