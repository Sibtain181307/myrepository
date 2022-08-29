import React, { Component } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { loginWithEmailAndPassword } from "app/redux/actions/LoginActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import history from "@history.js";
import { default as t } from "../../../translations";

class Signin extends Component {
  componentDidMount() {
    history.push({
      pathname: "/session/signin",
    });
  }
  state = {
    email: "watson@example.com",
    password: "12345678",
  };
  handleChange = (event) => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
    console.log("Handle change called");
    console.log(this.state);
  };

  handleSubmit = (value, { isSubmitting }) => {
    this.props.loginWithEmailAndPassword(value);
    console.log("handle Submit called");
  };

  render() {
    return (
      <div
        className="auth-layout-wrap"
        style={{
          backgroundImage: "url(/assets/images/logistics.png)",
        }}
      >
        <div className="auth-content">
          <div className="card bg-white text-white o-hidden">
            <div className="row">
              <div className="col-md-6">
                <div className="p-4">
                  <div className="text-center mb-4">
                    <img src="/assets/images/ziyad-logo.png" alt="logo" />
                  </div>
                  <h1 className="mb-3 text-18 text-white">{t("signin")}</h1>
                  <Formik
                    initialValues={this.state}
                    onSubmit={this.handleSubmit}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="email">{t("email")}</label>
                          <input
                            className="form-control form-control-rounded position-relative"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          {errors.email && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.email}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">{t("password")}</label>
                          <input
                            className="form-control form-control-rounded"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                          {errors.password && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.password}
                            </div>
                          )}
                        </div>

                        <Link to="/dashboard/v1">
                          <button
                            className="btn btn-rounded btn-success text-white w-100 my-1 mt-2"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            {t("signin")}
                          </button>
                        </Link>
                      </form>
                    )}
                  </Formik>

                  <div className="mt-3 text-center">
                    <Link to="/session/forgot-password" className="text-muted">
                      <u>{t("forgotPassword")}</u>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 text-center "
                style={{
                  backgroundSize: "cover",
                  backgroundImage: "url(/assets/images/dark-log.jpg)",
                }}
              >
                <div className="pe-3 auth-right">
                  <Link
                    to="/session/signup"
                    className="btn btn-rounded btn-outline-primary btn-outline-email w-100 my-1 btn-icon-text"
                  >
                    <i className="i-Mail-with-At-Sign"></i>{" "}
                    {t("signUpWithEmail")}
                  </Link>

                  <Button className="btn btn-rounded btn-outline-google w-100 my-1 btn-icon-text">
                    <i className="i-Google-Plus"></i>
                    {t("signUpWithGoogle")}
                  </Button>
                  <Button className="btn btn-rounded w-100 my-1 btn-icon-text btn-outline-facebook">
                    <i className="i-Facebook-2"></i> {t("signUpWithFacebook")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginWithEmailAndPassword: PropTypes.func.isRequired,
  user: state.user,
});

export default connect(mapStateToProps, {
  loginWithEmailAndPassword,
})(Signin);
