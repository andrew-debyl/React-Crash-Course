import { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]); //using [] here because its an array of objects

  // getting data from the api and setting it to 'users'
  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  }

  //on mount we are:
  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 1000);
  });


  function renderUsers() {
    return users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <User
            id={user.id}
            name={user.name}
            email={user.email}
            username={user.username}
          ></User>
        </Link>
      ))
  }


  //mapping over every user and created a loading state
  return (
    <div>   
      {users.length ? renderUsers() : <h1>Loading...</h1> }
    </div>
  );
}

export default Home;
