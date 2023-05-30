import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { orderAdd } from '../../../store/orderSlice';
import { foodType } from '../../../types';

interface ButtonOrderProps {
  product: foodType;
}

const ButtonOrder: FC<ButtonOrderProps> = ({ product }) => {
  const dispatch = useDispatch();
  const handleProductAdd = (event: React.FormEvent<HTMLButtonElement>, product: foodType) => {
    event.preventDefault();
    dispatch(orderAdd(product));
  };
  return (
    <button
      type="button"
      className="rounded-md bg-red-300 px-2.5 py-1.5 text-sm w-24  text-gray-900 shadow-sm ring-1 ring-inset "
      onClick={even => handleProductAdd(even, product)}
    >
      <div className="pl-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          fill="currentColor"
          className="bi bi-basket3-fill"
          viewBox="0 0 16 16"
        >
          <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
        </svg>
      </div>
    </button>
  );
};

export default ButtonOrder;
