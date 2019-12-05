import React, { useState, useEffect } from "react";
import { User } from "./User";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await result.json();
      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="row App">
      {isLoading ? (
        <div>loading ...</div>
      ) : (
        users.map((user, index) => (
          <div className="col-md-3" key={index}>
            <User name={user.name} userName={user.username} id={user.id} />
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
