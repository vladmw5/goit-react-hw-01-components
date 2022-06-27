import styles from './App.module.css';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';

import user from '../database/user.json';
import data from '../database/data.json';
import friends from '../database/friends.json';

export const App = () => {
  return (
    <div className={styles.container}>
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}
      {/* <Statistics title="Upload stats" stats={data} /> */}
      <FriendsList friends={friends} />
    </div>
  );
};
