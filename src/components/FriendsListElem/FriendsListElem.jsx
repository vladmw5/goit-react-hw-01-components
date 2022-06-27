import s from './FriendsListElem.module.css';
import PropTypes from 'prop-types';

const FriendsListElem = ({ status, avatar, name }) => {
  return (
    <li className={s.item}>
      <span className={status ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendsListElem.propTypes = {
  status: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendsListElem;
