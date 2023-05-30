import React, { FC } from 'react';
import ButtonRemove from './ButtonRemove';
import NumberStepper from './NumberStepper';
import { orderType } from '../../../types';

interface ItemOrderProps {
  product: orderType;
  orderRemove: (id: number) => void;
  quantityLess: (id: number) => void;
  quantityAdd: (id: number) => void;
}

const ItemOrder: FC<ItemOrderProps> = ({ product, orderRemove, quantityLess, quantityAdd }) => {
  return (
    <div>
      <div key={product.food_id} className="group">
        <div className="aspect-h-1 aspect-w-1  w-max overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 space-x-40">
          <img
            src={product.food_img}
            alt={product.food_img}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-lg text-gray-700">{product.food_name}</h3>
          </div>
          <p className="text-lg font-medium text-gray-900">{product.food_price}</p>
        </div>

        <ButtonRemove id={product.food_id} orderRemove={even => orderRemove(even)} />
      </div>
      <NumberStepper
        id={product.food_id}
        quantity={product.quantity}
        quantityAdd={even => quantityAdd(even)}
        quantityLess={even => quantityLess(even)}
      />
    </div>
  );
};

export default ItemOrder;
