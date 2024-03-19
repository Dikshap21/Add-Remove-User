import { useRef, type FormEvent } from 'react';

type NewUserProps = {
  onAddUser: (name: string, age: string) => void;
};

export default function NewUser({ onAddUser }: NewUserProps) {
  const name = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredName = name.current!.value;
    const enteredAge = age.current!.value;

    event.currentTarget.reset();
    onAddUser(enteredName, enteredAge);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" ref={name} />
      </p>
      <p>
        <label htmlFor="age">Age</label>
        <input id="age" type="text" ref={age} />
      </p>
      <p>
        <button>Add User</button>
      </p>
    </form>
  );
}
