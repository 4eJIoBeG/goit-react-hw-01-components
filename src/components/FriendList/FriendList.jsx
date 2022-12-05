import React from 'react';
import { FriendListItem } from './FriendListItem';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.friendList}>
        {friends.map(friend => (
          <FriendListItem friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
};
