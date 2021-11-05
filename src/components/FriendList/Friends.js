import PropTypes from 'prop-types';
import FriendsItem from './FriendsItem';
import styles from '../FriendList/friendsList.module.css';

export default function FriendList({friends}){
return(
<div className={styles.conteiner}>
<ul className={styles.list}>
{friends.map(({isOnline, avatar, name, id}) => (  
<FriendsItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
))
}
</ul>
</div>
);
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  ),
};