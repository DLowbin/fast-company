import React from "react";

const TableHeadings = () => {
  const headings = [
    "Имя",
    "Качества",
    "Профессия",
    "Встретился, раз",
    "Оценка",
    "Избранное",
  ];

  return (
    <>
      {headings.map((heading) => (
        <th scope="col" key={heading}>
          {heading}
        </th>
      ))}
    </>
  );
};

export default TableHeadings;
