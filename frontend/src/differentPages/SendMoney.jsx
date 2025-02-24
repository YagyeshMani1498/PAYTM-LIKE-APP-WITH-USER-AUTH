/* eslint-disable react/prop-types */
import { useState } from "react";
import { Heading } from "../components/HeadingComponent";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

export function SendMoney({ toast }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [inputValue, setInputValue] = useState("");

  let dashboardRedirect;

  function transferMoney() {
    axios
      .post(
        "https://paytm-like-app-with-user-auth.onrender.com/api/v1/account/transfer",
        {
          toUser: `${id}`,
          amount: parseFloat(inputValue),
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("JWT-Token"),
          },
        }
      )
      .then(function (response) {
        response.status === 200 && toast.success("Transaction Successfull");
        dashboardRedirect = response.data.userInfo;
        navigate(`/dashboard?name=${dashboardRedirect}`);
        setInputValue("");
      })
      .catch(function (error) {
        error.response.status === 400
          ? toast.error("Please fill the input field")
          : error.response.status === 401
          ? toast.error("Unauthorized request")
          : error.response.status === 402
          ? toast.error("Insufficient balance")
          : error.response.status === 500
          ? toast.error("Somthing went wronge")
          : null;
      });
  }

  return (
    <>
      <div className="send-money">
        <Heading textValue="Send Money To" />
        <div className="user reciever-user">
          <span className="user-icon">{name[0]}</span>
          <span className="user-name">{name}</span>
        </div>
        <p className="info">Amount(INR)</p>
        <input
          type="number"
          placeholder="Rs."
          className="input-field send-money-input-field"
          min={0}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button className="btn send-money-btn" onClick={transferMoney}>
          Transfer
        </button>
      </div>
    </>
  );
}
