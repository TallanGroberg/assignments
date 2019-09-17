import React from 'react';
import Friends from './Friends'
import Pet from './Pet'

const FriendsList = (props) => {
  const {name, age } = props
  return (
    <div>
     <Friends friend={props.myFriends} />
     
    </div>
  );
};

export default FriendsList;