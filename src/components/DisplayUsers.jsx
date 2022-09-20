import axios from "axios";
import React, { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

const DisplayUsers = () => {
  const [user, setUsers] = useState([]);

  const getUsers = async () => {
    const apiUsers = await axios.get(url);
    const dataUser = await apiUsers.data;
    setUsers(dataUser);
  };

  const itemsUsers = user.map((u) => (
    <li className="mb-3" key={u.id}>
      {u.name}
      <br />
      {u.email}
      <br />
      {u.company.name})
      <br />
    </li>
  ));

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ol className="d-flex-col">{itemsUsers}</ol>
    </div>
  );
};

export default DisplayUsers;
