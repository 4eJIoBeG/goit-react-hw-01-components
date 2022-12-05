import React from 'react';
import styles from './FriendListItem.module.css';

export const FriendListItem = ({ friend: { id, isOnline, avatar, name } }) => {
  return (
    <li className={styles.item} key={id}>
      {isOnline ? (
        <span className={styles.online}></span>
      ) : (
        <span className={styles.offline}></span>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
