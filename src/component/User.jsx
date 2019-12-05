import React from "react";
import { useHistory } from "react-router";

export const User = ({ name, userName, email, id }) => {
  const history = useHistory();

  const userDetails = () => {
    history.push(`/user:${id}`);
  };

  return (
    <div className="rounded bg-white p-3 m-3 pointer" onClick={userDetails}>
      <div>{name}</div>
      <div>{userName}</div>
      <div>{email}</div>
    </div>
  );
};
