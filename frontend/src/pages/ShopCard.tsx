import React, { FC } from 'react';
import ListOrder from '../components/Lists/ListOrders/ListOrder';
import { useDispatch } from 'react-redux';
import { orderAllRemove, orderRemove, quantityAdd, quantityLess } from '../store/orderSlice';
import FormUser from '../components/FormUser/FormUser';
import {
  addressChange,
  emailChange,
  nameChange,
  phoneChange,
  removeChange,
} from '../store/userSlice';

const ShopCard: FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex">
      <FormUser
        nameChange={event => dispatch(nameChange(event))}
        emailChange={event => dispatch(emailChange(event))}
        phoneChange={event => dispatch(phoneChange(event))}
        addressChange={event => dispatch(addressChange(event))}
        orderAllRemove={() => dispatch(orderAllRemove())}
        removeChange={() => dispatch(removeChange())}
      />
      <ListOrder
        orderRemove={event => dispatch(orderRemove(event))}
        quantityAdd={event => dispatch(quantityAdd(event))}
        quantityLess={event => dispatch(quantityLess(event))}
      />
    </div>
  );
};

export default ShopCard;
