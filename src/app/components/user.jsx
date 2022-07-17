import React from "react";
import Bookmark from "./bookmark";
import Qualities from "./qualities";

const User = (props) => {
  return (
    <>
      <tr key={props._id}>
        <td>{props.name}</td>
        <td>
          <Qualities quality={props.quality} />
        </td>
        <td>{props.profession}</td>
        <td>{props.meetings}</td>
        <td>{props.rate}/5</td>
        <td>
          <Bookmark bookStatus={props.bookStatus} />
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => props.delete(props._id)}
          >
            Удалить
          </button>
        </td>
      </tr>
    </>
  );
};

export default User;
