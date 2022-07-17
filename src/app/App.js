import React, { useState } from "react";
import SearchStatus from "./components/searchStatus";
import API from "./api";
import User from "./components/user";
import TableHeadings from "./components/tableHeadings";

function App() {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  return (
    <>
      {SearchStatus(users)}

      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <TableHeadings />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User
                key={user._id}
                quality={user.qualities}
                name={user.name}
                profession={user.profession.name}
                meetings={user.completedMeetings}
                rate={user.rate}
                bookStatus={user.bookmark}
                delete={() => handleDelete(user._id)}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default App;
