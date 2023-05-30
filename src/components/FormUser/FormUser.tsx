import React, { FC } from 'react';
import { RootState } from '../../store/store';
import Input from '../UI/Input';
import { useSelector } from 'react-redux';
import ButtonCreateUser from './ButtonCreateUserOrder';

interface FormUserType {
  nameChange: (event: any) => void;
  emailChange: (event: any) => void;
  phoneChange: (event: any) => void;
  addressChange: (event: any) => void;
  orderAllRemove: () => void;
  removeChange: () => void;
}

const FormUser: FC<FormUserType> = ({
  nameChange,
  emailChange,
  phoneChange,
  addressChange,
  orderAllRemove,
  removeChange,
}) => {
  const username = useSelector((state: RootState) => state.user.username);
  const email = useSelector((state: RootState) => state.user.email);
  const phone = useSelector((state: RootState) => state.user.phone);
  const address = useSelector((state: RootState) => state.user.address);
  const orderPrice = useSelector((state: RootState) => state.order.orderPrice);

  return (
    <div className="border-b border-gray-900/10 pb-12 w-96 ml-12 mt-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Use a permanent address where you can receive mail.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <Input title="Name" value={username} onChange={even => nameChange(even)} />
        <Input title="Email" value={email} onChange={even => emailChange(even)} />
        <Input title="Phone" value={phone} onChange={even => phoneChange(even)} />
        <Input title="Address" value={address} onChange={even => addressChange(even)} />
      </div>
      <div className="flex space-x-10 mt-10">
        <ButtonCreateUser
          username={username}
          email={email}
          phone={phone}
          address={address}
          orderAllRemove={() => orderAllRemove()}
          removeChange={() => removeChange()}
        />
        <h1 className="text-lg pt-2">Price: {orderPrice} UA</h1>
      </div>
    </div>
  );
};
export default FormUser;
