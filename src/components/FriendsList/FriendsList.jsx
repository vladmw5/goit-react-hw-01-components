import PropTypes from 'prop-types';
import s from './FriendsList.module.css';
import FriendsListElem from 'components/FriendsListElem/FriendsListElem';

const FriendsList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(el => (
        <FriendsListElem
          key={el.id}
          status={el.isOnline}
          avatar={el.avatar}
          name={el.name}
        />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendsList;
