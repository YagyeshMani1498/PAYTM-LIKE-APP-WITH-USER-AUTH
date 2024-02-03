import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { ButtonComponent } from "../components/ButtonComponent";
import { Heading } from "../components/HeadingComponent";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";

// react hot toast
import toast, { Toaster } from "react-hot-toast";

export function Singup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function requestSignup() {
    try {
      const response = await axios.post(
        "https://congenial-spork-45vxjvq4v44hqjx6-3000.app.github.dev/api/v1/user/signup",
        {
          firstName,
          lastName,
          username,
          password,
        }
      );

      response.data.msg === "invalid input"
        ? toast.error("Invalid Input")
        : response.data.msg === "username already taken!"
        ? toast.error("Username is already taken!")
        : toast.success("Signed up successfully");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Toaster />
      <div className="sign-up-in-box">
        <Heading textValue="Sign up" />
        <SubHeading textValue="Enter your information to create an account" />
        <InputBox
          label="First Name"
          placeholder="Nihal"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          title={"must be at least 4 characters long"}
        />
        <InputBox
          label="Last Name"
          placeholder="Tripathi"
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
          title={"must be at least 4 characters long"}
        />
        <InputBox
          label="Username"
          placeholder="xyz123@gmail.com"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputBox
          label="Password"
          placeholder="123456789"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          title={"must be at least 8 characters long"}
        />
        <ButtonComponent label={"Sign up"} onClick={requestSignup} />
        <BottomWarning
          textValue={" Already have an account? "}
          linkText={"Sign in"}
          to={"/signin"}
        />
      </div>
    </>
  );
}
