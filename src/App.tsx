import { useState } from "react";
import { CssBaseline, ThemeProvider, Grid, Box, Alert } from "@mui/material";
import UserList from "./components/UserList";
import NewUser from "./components/NewUser";
import { customTheme } from "./theme/customTheme";
import "./App.css";

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
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Grid container minHeight="100vh" p={0} m={0}>
        <Grid
          item
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="sapce-around"
          width="100%"
        >
          <NewUser onAddUser={handleAddUser} />
          {Array.isArray(users) && users.length === 0 && (
            <Alert severity="warning">
              Please start by creating some users
            </Alert>
          )}
          <UserList users={users} onDeleteUser={handleDeleteUser} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
