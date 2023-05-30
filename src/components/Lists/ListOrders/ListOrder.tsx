import React, { FC } from 'react';
import ItemOrder from './ItemOrder';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

interface ListOrderProps {
  orderRemove: (id: number) => void;
  quantityLess: (id: number) => void;
  quantityAdd: (id: number) => void;
}

const ListOrder: FC<ListOrderProps> = ({ orderRemove, quantityAdd, quantityLess }) => {
  const products = useSelector((state: RootState) => state.order.userOrder);
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto  gap-x-11 px-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 space-x-24 ">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shopping Cart</h2>

          <div className="mt-6 grid grid-cols-2  gap-x-28 gap-y-10">
            {products.map((product, id) => (
              <ItemOrder
                key={id}
                product={product}
                orderRemove={even => orderRemove(even)}
                quantityAdd={even => quantityAdd(even)}
                quantityLess={even => quantityLess(even)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOrder;
