import {FC, useEffect, useState} from 'react';
import axios from 'axios';
import {IUser} from '../types/types';
import List from './List';
import UserItem from './UserItem';
import {useNavigate} from 'react-router-dom';

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem key={user.id} user={user} onClick={(user: IUser) => navigate('/users/' + user.id)} />
      )}
    />
  );
};

export default UsersPage;
