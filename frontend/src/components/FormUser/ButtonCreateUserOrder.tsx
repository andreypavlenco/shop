import React, { FC } from 'react';

import { useCreateOrder, useCreateUser, useFindUser, useLocalStorageService } from '../../hooks';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { userType } from '../../types';
import { validateFormUser } from '../../helpers';

interface ButtonProps {
  username: string;
  email: string;
  phone: string;
  address: string;
  orderAllRemove: () => void;
  removeChange: () => void;
}

const ButtonCreateUser: FC<ButtonProps> = ({
  username,
  email,
  phone,
  address,
  orderAllRemove,
  removeChange,
}) => {
  const userOrder = useSelector((state: RootState) => state.order.userOrder);

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const validate = validateFormUser({ username, phone, email, address });

    if (validate) {
      const localStorageService = new useLocalStorageService();

      for (let i = 0; i < userOrder.length; i++) {
        const id = userOrder[i].food_id;
        localStorageService.setItem('userOrder', { ...userOrder[i], user_id: id });
        console.log(localStorageService.getItem('userOrder'));
      }
    }
    orderAllRemove();
    removeChange();
  };

  return (
    <button
      className="rounded-md bg-cyan-300 px-2.5 py-1.5  w-24 text-lg  text-gray-900 shadow-sm ring-1 ring-inset"
      onClick={event => onButtonClick(event)}
    >
      Submit
    </button>
  );
};

export default ButtonCreateUser;
