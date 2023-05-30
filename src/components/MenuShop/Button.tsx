import React, { FC } from 'react';

interface ButtonProps {
  onClick: () => void;
  value: string;
}
const Button: FC<ButtonProps> = ({ onClick, value }) => {
  return <button onClick={() => onClick()}>{value}</button>;
};
export default Button;
