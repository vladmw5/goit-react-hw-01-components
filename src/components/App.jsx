import user from '../database/user.json';
import Profile from './Profile/Profile';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
