import User from './User';
import { type User as DUser } from '../App';

type UserListProps = {
  users: DUser[];
  onDeleteUser: (id: number) => void;
};

export default function UserList({
  users,
  onDeleteUser,
}: UserListProps) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <User id={user.id} name={user.name} onDelete={onDeleteUser}>
            <p>{user.age}</p>
          </User>
        </li>
      ))}
    </ul>
  );
}
