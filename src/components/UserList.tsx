import User from './User';
import { Box } from "@mui/material";
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
           <Box
           display="flex"
           width="100%"
           justifyContent="flex-start"
           flexDirection="column"
           mb={4}
           p={2}
           sx={{
             width: '100%',
             backgroundColor: 'background.paper',
             borderRadius: '8px',
             border: '1px solid',
           }}
         >
          <User id={user.id} name={user.name} onDelete={onDeleteUser}>
            <p>{user.age}</p>
          </User>
       </Box>
      ))}
    </ul>
  );
}
