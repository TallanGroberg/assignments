import React from 'react';
import User from './User'

const UserList = (props) => {
  const mappedUsers = props.users.map( user => {return <User name={user}/>})
  return (
    <div>
          {mappedUsers}
    </div>
  );
};

export default UserList;