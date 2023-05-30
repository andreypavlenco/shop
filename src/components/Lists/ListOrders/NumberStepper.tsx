import React, { FC } from 'react';

interface NumberStepperProps {
  quantity: number;
  id: number;
  quantityLess: (id: number) => void;
  quantityAdd: (id: number) => void;
}

const NumberStepper: FC<NumberStepperProps> = ({ quantity, id, quantityAdd, quantityLess }) => {
  return (
    <div className="flex space-x-6 w-12 text-lg mt-2 pl-24 ">
      <button onClick={() => quantityLess(id)}>-</button>
      <input value={quantity} className="text-center w-12 text-lg" />
      <button onClick={() => quantityAdd(id)}>+</button>
    </div>
  );
};
export default NumberStepper;
