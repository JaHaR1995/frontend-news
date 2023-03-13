import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";

const Users = () => {
  const users = useSelector((state) => state.usersSlice.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());       
  }, [dispatch]);

  return (
    <div className="kk">
      {users.map((item) => {
        return (
          <div key={item.id} className="users">  
            {item.users}
          </div>
        );
      })}
    </div>
  );
};

export default Users;
