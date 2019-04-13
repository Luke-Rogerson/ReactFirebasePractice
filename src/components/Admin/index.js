import React, { useState, useEffect } from 'react';

import { withFirebase } from '../Firebase';
import UserList from './UserList';

const AdminPage = () => {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(
    ({ firebase }) => {
      setLoading(true);
      firebase.users().on('value', snapshot => {
        const usersObject = snapshot.val();
        const usersList = Object.keys(usersObject).map(key => ({
          ...usersObject[key],
          uid: key
        }));
        setUsers(usersList);
        setLoading(false);
      });
      return firebase.users().off();
    },
    [users]
  );

  return (
    <div>
      <h1>Admin</h1>
      {loading && <div>Loading...</div>}
      <UserList users={users} />
    </div>
  );
};

export default withFirebase(AdminPage);
