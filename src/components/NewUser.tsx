import { useRef, type FormEvent } from "react";
import { Grid, Button, FormControl, InputLabel, Input } from "@mui/material";
type NewUserProps = {
  onAddUser: (name: string, age: string) => void;
};

export default function NewUser({ onAddUser }: NewUserProps) {
  const name = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const enteredName = name.current!.value;
    const enteredAge = age.current!.value;

    onAddUser(enteredName, enteredAge);
  }

  return (
    <Grid
      item
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <FormControl>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input id="name" inputRef={name} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="Age">Age</InputLabel>
        <Input id="age" inputRef={age} />
      </FormControl>

      <Button onClick={handleSubmit}>Add User</Button>
    </Grid>
  );
}
