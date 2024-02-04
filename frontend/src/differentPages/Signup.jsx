/* eslint-disable react/prop-types */
import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { ButtonComponent } from "../components/ButtonComponent";
import { Heading } from "../components/HeadingComponent";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export function Singup({ toast }) {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function requestSignup(toast) {
    axios
      .post(
        "https://congenial-spork-45vxjvq4v44hqjx6-3000.app.github.dev/api/v1/user/signup",
        {
          firstName,
          lastName,
          username,
          password,
        }
      )
      .then(function (response) {
        response.status === 200 && toast.success("Signed up successfully");
        navigate("/signin");
      })
      .catch(function (error) {
        error.response.status === 400
          ? toast.error("Please fill the input fields correctly!")
          : error.response.status === 409
          ? toast.error("Username already taken!")
          : error.response.status === 500
          ? toast.error("Somthing went wronge! please try again")
          : null;
      });

    // response.data.msg === "invalid input"
    //   ? toast.error("Invalid Input")
    //   : response.data.msg === "username already taken!"
    //   ? toast.error("Username is already taken!")
    //   : toast.success("Signed up successfully");
  }

  return (
    <>
      <div className="sign-up-in-box">
        <Heading textValue="Sign up" />
        <SubHeading textValue="Enter your information to create an account" />
        <InputBox
          label="First Name"
          placeholder="Atleast 4 characters long"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          title={"must be at least 4 characters long"}
        />
        <InputBox
          label="Last Name"
          placeholder="Atleast 4 characters long"
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
          title={"must be at least 4 characters long"}
        />
        <InputBox
          label="Username"
          placeholder="Must be a valid Email:xyz123@gmail.com"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputBox
          label="Password"
          placeholder="Atleast 8 characters long"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          title={"must be at least 8 characters long"}
        />
        <ButtonComponent
          label={"Sign up"}
          onClick={() => {
            requestSignup(toast);
          }}
        />
        <BottomWarning
          textValue={" Already have an account? "}
          linkText={"Sign in"}
          to={"/signin"}
        />
      </div>
    </>
  );
}
