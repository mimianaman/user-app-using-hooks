import React from "react";
import { useHistory } from "react-router";
import Avatar from "react-avatar";

const colors = [
  "#f7c047",
  "#819a4f",
  "#fc0641",
  "#808000",
  "#800080",
  "#000080"
];

export const User = ({ name, userName, email, id }) => {
  const history = useHistory();
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const userDetails = () => {
    history.push(`/user:${id}`);
  };

  return (
    <div className="rounded bg-white p-3 m-3 pointer" onClick={userDetails}>
      <div className="d-inline">
        <Avatar
          name={name}
          size="60"
          textSizeRatio="1.75"
          round
          color={randomColor}
        />
      </div>
      <div className="d-inline">
        <div>{name}</div>
        <div>{userName}</div>
        <div>{email}</div>
      </div>
    </div>
  );
};
