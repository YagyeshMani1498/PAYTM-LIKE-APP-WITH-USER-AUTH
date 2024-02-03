import { useState } from "react";
import { Heading } from "../components/HeadingComponent";
import { useSearchParams } from "react-router-dom";

export function SendMoney() {
  try {
    const [inputValue, setInputValue] = useState("");

    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");

    return (
      <>
        <div className="send-money">
          <Heading textValue="Send Money" />
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
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button className="btn send-money-btn">Transfer</button>
        </div>
      </>
    );
  } catch (err) {
    console.error("Somthing Went Wrong!");
  }
}
