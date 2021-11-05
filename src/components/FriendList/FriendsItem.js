import PropTypes from 'prop-types';
import styles from '../FriendList/friends.module.css';

export default function FriendsItem({ isOnline, avatar, name, id }) {
  return (
    <li className={styles.item} key={id}>
      <span className={isOnline ? styles.true : styles.false}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="45" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
