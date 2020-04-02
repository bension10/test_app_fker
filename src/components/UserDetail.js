import React from 'react';

const UserDetail = ({ email, jobTitle, avatar }) => (
  <div className="ui container user-details">
    <strong>{email}</strong>
    <p>{jobTitle}</p>
    <img src={avatar} alt="avatar"  width="50"/>
  </div>
)

export default UserDetail;