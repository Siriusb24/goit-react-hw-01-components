import './App.css';
//=====Task 1=====////
import Profile from './components/Profile/SocialProfile';
import card from './data/user.json';
//=====Task 2=====////
import Statistics from './components/Statistics/Statistics';
import statsData from './data/statistical-data.json';
//=====Task 3=====////
import Friends from './components/FriendList/Friends';
import friends from './data/friends.json';
//=====Task 4=====////
import TransactionHistory from './components/Transactions/TransactionHistory';
import transactions from './data/transactions.json';
//==========////
export default function App() {
  return <> 
  <div><Profile 
  name={card.name}
  tag={card.tag}
  location={card.location}
  avatar={card.avatar}
  stats={card.stats}/>;
<Statistics
title="Upload stats" stats={statsData}/>;
<Friends  friends={friends}/>;
<TransactionHistory items={transactions} />;
</div>;
</>;
};
