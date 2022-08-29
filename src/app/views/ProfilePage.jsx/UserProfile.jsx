import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { default as t } from "../../../translations";
import history from "@history";
class UserProfile extends Component {
  userdata = {};
  user = JSON.parse(localStorage.user);
  uservent = "";
  userid = this.user.typeId;
  componentDidMount() {
    console.log(this.user);
    console.log(this.user.role);
    if (this.user.role === "CUST-BIZ") {
      this.userevent = "Get-Business-User";
    }
    axios
      .get("http://15.235.141.168:70/user/get-user", {
        headers: {
          SessionKey: "123",
          Event: this.userevent,
          id: this.userid,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <div className="card user-profile o-hidden mb-4">
          <div
            className="header-cover"
            style={{
              backgroundImage: "url('/assets/images/photo-wide-5.jpeg')",
            }}
          ></div>
          <div className="user-info">
            <img
              className="profile-picture avatar-lg mb-2"
              src="/assets/images/faces/1.jpg"
              alt=""
            />
            <p className="m-0 text-24">Timothy Carlson</p>
            <p className="text-muted m-0">Digital Marketer</p>
          </div>
          <div className="card-body pt-4">
            <Tabs
              defaultActiveKey="About"
              className="justify-content-center profile-nav mb-4"
            >
              <Tab eventKey="About" title="About">
                <h4>Personal Information</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, commodi quam! Provident quis voluptate asperiores
                  ullam, quidem odio pariatur. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Voluptatem, nulla eos? Cum non
                  ex voluptate corporis id asperiores doloribus dignissimos
                  blanditiis iusto qui repellendus deleniti aliquam, vel quae
                  eligendi explicabo.
                </p>
                <hr />
                <div className="row">
                  <div className="col-md-4 col-6">
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-Calendar text-16 mr-1"></i> Birth Date
                      </p>
                      <span>1 Jan, 1994</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-Edit-Map text-16 mr-1"></i> Birth Place
                      </p>
                      <span>Dhaka, DB</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-Globe text-16 mr-1"></i> Lives In
                      </p>
                      <span>Dhaka, DB</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-MaleFemale text-16 mr-1"></i> Gender
                      </p>
                      <span>1 Jan, 1994</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-MaleFemale text-16 mr-1"></i> Email
                      </p>
                      <span>example@ui-lib.com</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-Cloud-Weather text-16 mr-1"></i>
                        Website
                      </p>
                      <span>www.ui-lib.com</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-Business-Man text-16 mr-1"></i>
                        Profession
                      </p>
                      <span>Digital Marketer</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-Conference text-16 mr-1"></i>
                        Experience
                      </p>
                      <span>8 Years</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-Home1 text-16 mr-1"></i> School
                      </p>
                      <span>School of Digital Marketing</span>
                    </div>
                  </div>
                  <Link to="/profilepage/edit-profile">
                    <Row className="mt-2">
                      <Col className="d-flex justify-content-end align-items-center">
                        <Button
                          className="mx-2"
                          variant="success"
                          onClick={(e) => {
                            console.log(e);
                          }}
                        >
                          {t("Edit")}
                        </Button>
                      </Col>
                    </Row>
                  </Link>
                </div>
                <hr />
                <h4>Other Info</h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  dolore labore reiciendis ab quo ducimus reprehenderit natus
                  debitis, provident ad iure sed aut animi dolor incidunt
                  voluptatem. Blanditiis, nobis aut.
                </p>
                <div className="row">
                  <div className="col-md-2 col-sm-4 col-6 text-center">
                    <i className="i-Plane text-32 text-primary"></i>
                    <p className="text-16 mt-1">Travelling</p>
                  </div>
                  <div className="col-md-2 col-sm-4 col-6 text-center">
                    <i className="i-Camera text-32 text-primary"></i>
                    <p className="text-16 mt-1">Photography</p>
                  </div>
                  <div className="col-md-2 col-sm-4 col-6 text-center">
                    <i className="i-Car-2 text-32 text-primary"></i>
                    <p className="text-16 mt-1">Driving</p>
                  </div>
                  <div className="col-md-2 col-sm-4 col-6 text-center">
                    <i className="i-Atom text-32 text-primary"></i>
                    <p className="text-16 mt-1">Gaming</p>
                  </div>
                  <div className="col-md-2 col-sm-4 col-6 text-center">
                    <i className="i-Music-Note-2 text-32 text-primary"></i>
                    <p className="text-16 mt-1">Music</p>
                  </div>
                  <div className="col-md-2 col-sm-4 col-6 text-center">
                    <i className="i-Shopping-Bag text-32 text-primary"></i>
                    <p className="text-16 mt-1">Shopping</p>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
