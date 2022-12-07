import { Profile } from './profile/Profile';
import user from '../user.json';

import { Statistics } from './statistics/Statistics';
import stats from '../data.json';

import { FriendList } from './friend/FriendList';
import friends from '../friends.json';

import { TransactionHistory } from './transaction/TransactionHistory';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </>
  );
};
