import React, { FC } from 'react';

interface ButtonRemoveProps {
  id: number;
  orderRemove: (id: number) => void;
}

const ButtonRemove: FC<ButtonRemoveProps> = ({ id, orderRemove }) => {
  return (
    <button
      className="rounded-md bg-red-300 px-2.5 py-1.5  w-24 text-sm  text-gray-900 shadow-sm ring-1 ring-inset"
      onClick={() => orderRemove(id)}
    >
      Delete
    </button>
  );
};

export default ButtonRemove;
