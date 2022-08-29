import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Breadcrumb } from "@gull";
import GullSearch from "@gull/components/GullSearch";
class Error extends Component {
  state = {};
  render() {
    return (
      <Card>
        <Card.Body>
          <div className="not-found-wrap text-center">
            <Breadcrumb />
            <GullSearch />
            <h1 className="text-60">404</h1>
            <p className="text-36 subheading mb-3">Error!</p>
            <p className="mb-5  text-muted text-18">
              Sorry! The page you were looking for doesn't exist.
            </p>
            <Link to="/" className="btn btn-lg btn-primary btn-rounded">
              Go back to home
            </Link>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default Error;
