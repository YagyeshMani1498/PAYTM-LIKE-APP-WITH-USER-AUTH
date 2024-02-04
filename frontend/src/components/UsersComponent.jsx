import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/* eslint-disable react/prop-types */
export function UsersComponent() {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  let timerId;

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  // changing state of inputvalue after a certain time of inactivity....
  function dbounce(e, func, timer = 1000) {
    clearInterval(timerId);
    timerId = setTimeout(() => {
      func(e);
    }, timer);
  }

  useEffect(() => {
    // getting the token from local storage;
    const token = localStorage.getItem("JWT-Token");
    axios
      .get(
        "https://congenial-spork-45vxjvq4v44hqjx6-3000.app.github.dev/api/v1/user/bulk?filter=" +
          inputValue,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(function (response) {
        setUsers(response.data.users);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [inputValue]);

  return (
    <>
      <div className="user-search-box">
        <h3>Users</h3>
        <input
          type="text"
          placeholder="Search users..."
          className="input-field search-field"
          // onchange call debounce function.
          onChange={(e) => dbounce(e, handleChange, 1000)}
          // *********************************
        />
      </div>
      <div className="user-display-field">
        {users.length === 0 ? (
          <p>{`No user with the name: ${inputValue}`}</p>
        ) : null}
        {users.map((user) => {
          return (
            <div key={user._id} className="user">
              <div className="user-name">
                <span className="user-icon">{user.firstName[0]}</span>
                <span>{`${user.firstName} ${user.lastName}`}</span>
              </div>
              <button
                className="btn btn-send-money"
                onClick={() => {
                  navigate(
                    `/send?id=${user._id}&name=${
                      user.firstName + " " + user.lastName
                    }`
                  );
                }}
              >
                Send Money
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
