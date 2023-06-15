import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/users/usersSlice";

const UsersList = () => {
  const { users, isLoading, error } = useSelector((state) => state.users)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>User List</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
        <ul>
          {Object.entries(users).map(([id, user]) => users.map((user) => (
            <li key={user.id}>
              {user.name.first} {user.name.last}
            </li>
          )))}
        </ul>
    </div>
  )
}

export default UsersList;
