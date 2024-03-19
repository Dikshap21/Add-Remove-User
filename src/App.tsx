import { useState } from 'react';

import UserList from './components/UserList';
import NewUser from './components/NewUser';
import './App.css';

export type User = {
  name: string;
  age: string;
  id: number;
};

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  function handleAddUser(name: string, age: string) {
    setUsers((prevUsers) => {
      const newUser: User = {
        id: Math.random(),
        name,
        age: age,
      };
      return [...prevUsers, newUser];
    });
  }

  function handleDeleteUser(id: number) {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  }

  return (
    <div>  
          
      <NewUser onAddUser={handleAddUser}/>
      <UserList users={users} onDeleteUser={handleDeleteUser} />
     
    </div>
  );
}
