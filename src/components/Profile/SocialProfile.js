import PropTypes from 'prop-types';
import s from '../Profile/profile.module.css';

export default function Profile({name, tag, location, avatar, stats}){
    return(<div className={s.profile}>
    <div className={s.description}>
      <img
        src={avatar}
        alt={name}
        className={s.avatar}
      />
      <p className={s.name}>{name}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
    <ul className={s.stats}>
      <li className={s.item}>
        <span className={s.label}>Followers:</span>
        <span className={s.quantity}>{stats.followers}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Views:</span>
        <span className={s.quantity}>{stats.views}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Likes:</span>
        <span className={s.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>);
};


Profile.defaultProps = {
  avatar:
    'https://www.shutterstock.com/ru/image-vector/profile-photo-vector-placeholder-pic-male-535853263',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};