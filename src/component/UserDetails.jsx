import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiAccount, mdiCellphone } from "@mdi/js";
import { useParams, Link } from "react-router-dom";

const UserDetails = () => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const param = useParams();

  const id = param.id.substr(1);
  console.log(id);
  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await result.json();
      setUser(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="container bg-white">
      <Link to="/">Go Back</Link>
      <div className="py-4">
        <Icon path={mdiAccount} size={1} color="red" />
        {` fullname is ${user && user.name}`}
      </div>
      <div className="py-4">
        <Icon path={mdiCellphone} size={1} color="blue" />
        {` phone number is ${user && user.phone}`}
      </div>
      <div className="py-4">
        {` Address is ${user && user.address.street} ${user &&
          user.address.city} ${user && user.address.zipcode}`}
      </div>
      <div className="py-4">{` company is ${user && user.company.name}`}</div>
    </div>
  );
};

export default UserDetails;
