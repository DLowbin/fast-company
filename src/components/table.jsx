import React, { useState } from "react";
import API from "../api";

const Table = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleUserDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  const setCorrectUserWord = () => {
    const options = ["человек", "человека"];
    let userWord;
    if (users.length === 2 || users.length === 3 || users.length === 4) {
      userWord = options[1];
    } else {
      userWord = options[0];
    }
    return userWord;
  };

  const renderTable = () => {
    return users.length !== 0 ? (
      <>
        <div>{`${users.length} ${setCorrectUserWord()}`}</div>
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
    ) : (
      "Noone wants You"
    );
  };
  return renderTable();
};

export default Table;
