import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export function UsersComponent() {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://congenial-spork-45vxjvq4v44hqjx6-3000.app.github.dev/api/v1/user/bulk?filter=" +
        `${inputValue}`
    ).then(async (responce) => {
      const data = await responce.json();
      setUsers(data.users);
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
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="user-display-field">
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
