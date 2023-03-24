import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const { id } = useParams(); //getting the dynamic route

  const [user, setUser] = useState({}); //using {} here because its 1 object

  async function main() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser(data);
  }

  useEffect(() => {
    main();
  }, []);

  return (
      <div>
        <Link to='/'>Go Back to Home</Link>
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.username}</p>
      </div>
  );
}

export default Users;