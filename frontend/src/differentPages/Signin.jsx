/* eslint-disable react/prop-types */
import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { ButtonComponent } from "../components/ButtonComponent";
import { Heading } from "../components/HeadingComponent";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export function Singin({ toast }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function singInFuntion() {
    axios
      .post(
        "https://paytm-like-app-with-user-auth.onrender.com/api/v1/user/signin",
        {
          username,
          password,
        }
      )
      .then(function (response) {
        response.status === 200 && toast.success("Signed in successfully");
        const authToken = response.data.token;
        localStorage.setItem("JWT-Token", authToken);
        navigate(`/dashboard?name=${response.data.firstName.split(" ")[0]}`);
      })
      .catch(function (error) {
        error.response.status === 400
          ? toast.error("Please fill the input fields correctly!")
          : error.response.status === 404
          ? toast.error("Username does not exist!")
          : error.response.status === 401
          ? toast.error("Incorrect password!")
          : error.response.status === 500
          ? toast.error("Somthing went wronge!")
          : null;
      });
  }

  return (
    <>
      <div className="sign-up-in-box">
        <Heading textValue="Sign in" />
        <SubHeading textValue="Enter your credentials to access your account" />
        <InputBox
          label="Username"
          placeholder="xyz123@gmail.com"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputBox
          label="Password"
          placeholder="Must be 8 characters long"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonComponent label={"Sign in"} onClick={singInFuntion} />
        <BottomWarning
          textValue={" Don't have an account? "}
          linkText={"Sign up"}
          to={"/"}
        />
      </div>
    </>
  );
}
