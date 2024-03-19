import { type PropsWithChildren } from 'react';


type UserProps = PropsWithChildren<{
  id: number;
  name: string;
  onDelete: (id: number) => void;
}>;

export default function User({
  name,
  id,
  children,
  onDelete,
}: UserProps) {
  return (
    <article>
      <div>
        <h2>{name}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

