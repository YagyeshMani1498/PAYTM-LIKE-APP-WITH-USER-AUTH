/* eslint-disable react/prop-types */

import axios from "axios";

export function BalanceComponent({ showBalance }) {
  async function checkBalance() {
    const token = localStorage.getItem("JWT-Token");
    const response = await axios.get(
      "https://paytm-like-app-with-user-auth.onrender.com/api/v1/account/balance",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    showBalance(response.data.balance);
  }

  return (
    <>
      <div className="balance-bar">
        <button className="btn btn-check-balance" onClick={checkBalance}>
          Check balance
        </button>
      </div>
    </>
  );
}
