import React from "react";

const Qualities = (props) => {
  return (
    <>
      {props.quality.map((qualities) => (
        <span key={qualities._id} className={`badge bg-${qualities.color} m-1`}>
          {qualities.name}
        </span>
      ))}
    </>
  );
};

export default Qualities;
