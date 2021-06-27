import React from 'react';
import './UserCard.css';
function UserCard({ user }) {
  console.log('====================================');
  console.log(user);
  console.log('====================================');
  return (
    <div className="container-user">
      <img
        className="container-user__avatar"
        src={user && user.avatar_url}
        alt={user && user.name}
      />
      <div className="container-user__info">
        <h1>{user && user.name}</h1>
        <h2>{user && '@' + user.login}</h2>
      </div>
      <div className="container-user__link">
        <button>repos</button>
        <button>starred</button>
      </div>
    </div>
  );
}

export default UserCard;
