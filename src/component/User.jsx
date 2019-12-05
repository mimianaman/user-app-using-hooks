import React from "react";

export const User = ({ firstName, lastName, userName, email }) => {
  return (
    <div className="rounded bg-white p-3">
      <div>{`${firstName} ${lastName}`}</div>
      <div>{userName}</div>
      <div>{email}</div>
    </div>
  );
};
