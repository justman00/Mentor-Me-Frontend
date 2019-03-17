import React from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";
import { login } from "../../actions";
import { Redirect, Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../main/device";

import { connect } from "react-redux";

export const LoginStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, #60c3ff, #5574f7);
  font-family: canada-type-gibson, sans-serif;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  h1 {
    margin-top: 30%;
    margin-bottom: 18%;
    font-size: 4rem;
    font-weight: 550;
    color: #fff;
    @media ${device.desktop} {
      margin-top: 5%;
    }
  }

  form {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30%;
    @media ${device.desktop} {
      max-width: 900px;
      margin-top: -6%;
    }

    input {
      padding: 15px;
      display: block;
      width: 90%;
      font-size: 2rem;
      background: transparent;
      border: none;
      outline: none;
      margin-bottom: 5%;
      color: #fff;

      &::placeholder {
        text-align: ${props => (props.register ? "left" : "center")};
        color: #fff;
        opacity: 0.3;
        font-size: 1.6rem;
      }
    }

    button {
      margin-top: 3%;
      width: 100%;
      display: block;
      font-size: 1.6rem;
      color: black;
      background: #fff;
      padding: 15px;
      border-radius: 10px;
      color: #5887f9;
      letter-spacing: 3px;
      font-weight: 600;
      outline: none;
    }
  }

  a {
    margin-bottom: 15%;
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
  }

  p {
    font-size: 1.4rem;
    color: #cc0000;
    text-align: center;
  }
`;

const Login = ({ errors, touched, isLoggedIn }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <LoginStyled>
      <h1>Sign In</h1>
      <Form>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field name="username" type="text" placeholder="username" />
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field name="password" type="password" placeholder="password" />
        <button>Sign In</button>
      </Form>

      <Link to="/signup">Register</Link>
    </LoginStyled>
  );
};

const enhancedForm = withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },
  validationSchema: yup.object().shape({
    username: yup.string().required("Email might be wrong"),
    password: yup.string().required("Password might be incorrect")
  }),
  handleSubmit(formVals, { props }) {
    props.login(formVals).then(() => {
      props.history.push("/");
    });
  }
})(Login);

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(
  mapStateToProps,
  { login }
)(enhancedForm);
