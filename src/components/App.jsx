import s from './App.module.css';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../database/user.json';
import data from '../database/data.json';
import friends from '../database/friends.json';
import transactions from '../database/transactions.json';

export const App = () => {
  return (
    <ul className={s.container}>
      <li className={s.item}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </li>
      <li className={s.item}>
        <Statistics title="Upload stats" stats={data} />
      </li>
      <li className={s.item}>
        <FriendsList friends={friends} />
      </li>
      <li className={s.item}>
        <TransactionHistory transactions={transactions} />
      </li>
    </ul>
  );
};
