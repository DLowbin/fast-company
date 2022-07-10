import React, { useState } from "react";
import API from "../api";

const Table = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleUserDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  const getPeopleAmoount = () => {
    const options = ["человек тусанет", "человека тусанут"];
    let correctWordPeople;
    if (users.length === 0) {
      return (correctWordPeople = "Никто с тобой не тусанет.");
    }

    if (users.length >= 2 && users.length <= 4) {
      correctWordPeople = options[1];
    } else {
      correctWordPeople = options[0];
    }
    return String(users.length) + " " + `${correctWordPeople} с тобой сегодня.`;
  };

  const renderTable = () => {
    return (
      <>
        <h3>
          <span
            className={`badge bg-${users.length > 0 ? "primary" : "danger"}`}
          >
            {getPeopleAmoount()}
          </span>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((qualities) => (
                    <span
                      key={qualities._id}
                      className={`badge bg-${qualities.color} m-1`}
                    >
                      {qualities.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}/5</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleUserDelete(user._id)}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };
  return renderTable();
};

export default Table;
