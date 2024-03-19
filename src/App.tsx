import { useState } from "react";
import { CssBaseline, ThemeProvider, Grid, Box } from "@mui/material";
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
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <NewUser onAddUser={handleAddUser} />
        
          <UserList users={users} onDeleteUser={handleDeleteUser} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
