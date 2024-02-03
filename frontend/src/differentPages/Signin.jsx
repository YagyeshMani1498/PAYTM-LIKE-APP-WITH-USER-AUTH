import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { ButtonComponent } from "../components/ButtonComponent";
import { Heading } from "../components/HeadingComponent";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export function Singin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function singInFuntion() {
    try {
      const responce = await axios.post(
        "https://congenial-spork-45vxjvq4v44hqjx6-3000.app.github.dev/api/v1/user/signin",
        {
          username,
          password,
        }
      );

      if (responce.status !== 200) {
        console.log("");
      } else {
        const authToken = responce.data.token;
        localStorage.setItem("JWT-Token", authToken);
        navigate(`/dashboard?name=${responce.data.firstName.split(" ")[0]}`);
      }
    } catch (err) {
      console.error(err);
    }
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
          placeholder="123456"
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
